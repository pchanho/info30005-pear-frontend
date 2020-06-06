// Import necessary libraries

/* Chat page hosts a conversation between 2 participants and keeps track fo messages sent
 */
import React, { useState, useEffect } from "react";
import Messages from "../components/chat/Messages";
import "../css/chatStyles.css";
import { NavLink, useHistory } from "react-router-dom";
import {
  addMessage,
  getMessages,
  useMessages,
  useOneAccount,
  useReadOneConversation,
  useReadParticipants,
  addParticipantsInConversation,
  removeParticipantsInConversation,
} from "../api.js";

export default function Chat(data) {
  /* Loads conversation and messages, specified by stored conversationId
   */
  var { loading, messages, error } = useMessages({
    conversationId: sessionStorage.getItem("conversationId"),
  });
  console.log(messages);
  var { loading, conversations, error } = useReadOneConversation({
    conversationId: sessionStorage.getItem("conversationId"),
  });
  console.log(conversations);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  /* Called when a participant enters the chat room and registers that they have joined the chat,
  ensures that the chat room is inaccesible from the homepage when there are 2 participants (max participants)
*/
  addParticipantsInConversation({
    conversationId: sessionStorage.getItem("conversationId"),
    participantsId: sessionStorage.getItem("accountId"),
  });

  return (
    <div>
      <div className="message-heading"></div>
      <div className="chat-page">
        {/*Determines the chat partner in a conversation*/}
        {[conversations].map((conversations) => (
          <Partner key={conversations._id} {...conversations} />
        ))}

        <div className="grid-item message-display">
          {/*Spreads messages and displays them in the chat window*/}
          {messages.map((messages) => (
            <Message key={messages._id} {...messages} />
          ))}
        </div>

        {/*Displayst the topic image and name of the topic*/}
        <div className="grid-item topic-display">
          <img src={conversations.topicImage} width="250" height="250"></img>
          Talking about: {conversations.topic}
        </div>

        <div className="grid-item message-form">
          <MessageForm />
        </div>
      </div>
    </div>
  );
}

{
  /*Form used to handle message submissions*/
}
function MessageForm() {
  const conversationId = sessionStorage.getItem("conversationId");
  const senderId = sessionStorage.getItem("accountId");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  //on submit, add message to mongoDB database
  function onSubmit() {
    addMessage({
      conversationId,
      senderId,
      text,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="chatBox">
      <h1>Write message: </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Type your message"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />{" "}
        <br />
        <div className="send">
          <input type="submit" value="Send" id="send-btn" onClick={onSubmit} />
        </div>
      </form>
    </div>
  );
}

/* This function is created to display all messages from a specific conversation stored in the mongoDb
   database. 
*/
function Message(message) {
  var intervalID;
  const history = useHistory();
  const {
    _id,
    conversationId,
    senderId,
    text,
    image,
    video,
    timeSent,
  } = message;
  //gets account based on the senderId
  var account = useOneAccount({ accountId: senderId }).accounts;

  //if the report button is clicked, the message id and user id of the sender gets recorded.
  //The user is then directed to another page to make a report
  function onSubmit() {
    sessionStorage.setItem("reportUserId", senderId);
    sessionStorage.setItem("reportMessageId", _id);
    history.push("/report");
  }

  return (
    <section className="join">
      <div className={`chat-room conversation-${text}`} key={text}>
        <div>
          <br></br>
          {account.firstName}:<br></br>
          {text}
          <input
            type="submit"
            value="Report"
            id="chatReport-btn"
            onClick={onSubmit}
          />
        </div>
      </div>
    </section>
  );
}

function Partner(data) {
  //default values in the case that there is no other participant in the chat
  var userImage = `https://res.cloudinary.com/drvfo389c/image/upload/v1589694061/pear/profile_hdtz1k.png`;
  var firstName = "Waiting on Partipant";

  //determines chat partner
  for (var i = 0; i < data.participantsId.length; i++) {
    if (
      data.participantsId[i] != sessionStorage.getItem("accountId") &&
      data.participantsId[i] != null
    ) {
      var participant = data.participantsId[i];
    }
  }

  //updates default values to use chat partner values if one is available
  var account = useReadParticipants({ accountId: participant }).accounts;
  console.log(account);
  if (account.userImage != undefined) {
    userImage = account.userImage;
  }
  if (account.firstName != undefined) {
    firstName = account.firstName;
  }
  return (
    <div className="grid-item user-display">
      {/*displays partner information*/}
      <img src={userImage} width="250" height="250"></img>
      {console.log(firstName)}
      {console.log(userImage)}
      Talking to: {firstName}
    </div>
  );
}
