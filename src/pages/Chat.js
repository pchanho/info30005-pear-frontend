// Import necessary libraries
import React, { useState, useEffect } from "react";
import Messages from '../components/chat/Messages';
import "../css/chatStyles.css";
import { NavLink, useHistory } from "react-router-dom";
import { addMessage, getMessages, useMessages, useOneAccount, useReadOneConversation, useReadParticipants } from "../api.js";


export default function Chat(data) {
  var { loading, messages, error } = useMessages({ conversationId: sessionStorage.getItem('conversationId') });
  console.log(messages)
  var { loading, conversations, error } = useReadOneConversation({ conversationId: sessionStorage.getItem('conversationId') })
  console.log(conversations)

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div>
      <div className="message-heading">
      </div>
      <div className="chat-page">
        {[conversations].map(conversations => (
          <Partner key={conversations._id} {...conversations} />
        ))}

        <div className="grid-item message-display">
          {console.log(conversations)}
          {messages.map(messages => (
            <Message key={messages._id} {...messages} />
          ))}
        </div>


        <div className="grid-item topic-display">
        <img src={conversations.topicImage}width="250" height="250"></img>
          Talking about: {conversations.topic}
          </div>


        <div className="grid-item message-form">
          <MessageForm />
        </div>

      </div>
    </div>
  );
}


function MessageForm() {
  const conversationId = sessionStorage.getItem('conversationId');
  const senderId = sessionStorage.getItem('accountId');
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
        {/* <label for="message">Write a message</label> */}
        <input
          type="text"
          name="message"
          placeholder="Type your message"
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}

        /> <br />

        <input type="submit" value="Send" id='btn' onClick={onSubmit} />
      </form>
    </div>
  );
}

/* This function is created to display all messages from a specific conversation stored in the mongoDb
   database. However, as this section of the code is not yet fully implemented, conversation is still 
   hardcoded.
*/
function Message(message) {
  const history = useHistory();
  const { _id, conversationId, senderId, text, image, video, timeSent } = message;
  //used for testing
  var account = useOneAccount({ accountId: senderId }).accounts


  function onSubmit() {
    sessionStorage.setItem('reportUserId', senderId)
    sessionStorage.setItem('reportMessageId', _id)
    history.push("/report");
  }

  return (
    <section className='join'>
      <div className={`chat-room conversation-${text}`} key={text}>
        <div>
          <br></br>
          {account.firstName}:
                  <br></br>
          {text}
          <input type="submit" value="Report" id='btn' onClick={onSubmit} />
        </div>
      </div>
    </section>
  );
}


function Partner(data) {
  const [userImage, setUserImage] = useState(`url(https://res.cloudinary.com/drvfo389c/image/upload/v1589694061/pear/profile_hdtz1k.png)`);

  for (var i = 0; i < data.participantsId.length; i++) {
    if (data.participantsId[i] != sessionStorage.getItem('accountId') && data.participantsId[i] != null) {
      var participant = data.participantsId[i]
    }
  }
  var account = useReadParticipants({ accountId: participant }).accounts
  console.log(account.userImage)

  console.log(userImage)
  console.log(account)
  return (

    <div className="grid-item user-display" >
      {console.log(account.firstName)}
      <img src={account.userImage}width="250" height="250"></img>
      {console.log(account.userImage)}
            Talking to: {account.firstName}
    </div>
  );
}