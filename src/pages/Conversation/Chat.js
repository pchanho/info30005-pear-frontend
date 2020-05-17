import React, { useState } from "react";
import Messages from '../../components/chat/Messages';
import "../../chatStyles.css";
import { NavLink } from "react-router-dom";
import { addMessage, getMessages, useMessages} from "../../api.js";


export default function Chat(data) {
  data = {conversationId: "5eae207c2630d000173c63d6"}
  var { loading, messages, error } = useMessages(data);
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Something went wrong: {error.message}</p>;
    }

    console.log(messages);
  
    return (
      <div>
        <div className = "message-heading">
          Chat (Not Fully Implemented)
        </div>
        <div className = "chat-page">
          <div className = "grid-item user-display" style={{backgroundImage: `url(https://res.cloudinary.com/drvfo389c/image/upload/v1589556393/pear/pets_v0mnpz.jpg)`}}>
            Talking to:
          </div>

          <div className = "grid-item message-display">
            {messages.map(messages => (
              <Message key={messages.text} {...messages} />
            ))}
          </div>

          <div className = "grid-item topic-display" style={{backgroundImage: `url(https://res.cloudinary.com/drvfo389c/image/upload/v1589556393/pear/pets_v0mnpz.jpg)`}}>
            Talking about:
          </div>

          <div className = "grid-item message-form">
            <MessageForm />
          </div>

        </div>
      </div>
  );
}


function MessageForm() {
   const [conversationId, setConversatioId] = useState("");
   const [senderId, setSenderId] = useState("");
   const [text, setText] = useState("");
   const [image, setImage] = useState("");
   const [video, setVideo] = useState("");

  function onSubmit() {
    addMessage({
      conversationId,
      senderId, 
      text,
      image,
      video

    });
}
  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <div className = "chatBox">
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
      
        <input type="submit" value="Send" id='btn' onClick={onSubmit}/>
      </form> 
    </div>
  );
}
  
  function Message(message) {
    const {_id, conversationId, senderId, text, image, video, timeSent} = message;
    
    return (
      <section className='join'>
          <div className={`chat-room conversation-${text}`}  key={text}>
            <div>
                {/*{_id}*/}
               
                <br></br>
                  {senderId}:
                <br></br>
                {text}
            </div>
         </div>
      </section>
  );
 }