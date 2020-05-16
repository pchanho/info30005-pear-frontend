import React, { useState } from "react";
import Messages from '../../components/chat/Messages';
import "../../chatStyles.css";
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
          <h1 id='join-heading'>Conversation List</h1>
              {messages.map(messages => (
                  <Message key={messages.text} {...messages} />
              ))}
              
      </div>

  );
  return (  
    <section className="forms">
      <div class="chatLog">
        <ChatBox />
   
      </div>
    </section>
  );    
}


function ChatBox() {
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

    window.location.reload();
}

  return (
    <div class="chatBox">
      <h1>Chatting with: </h1>

      <form>  
        <label for="message">Write a message</label>
          <input 
            type="text" 
            name="message" 
            value={text}  
            onChange={event => {
              setText(event.target.value);
            }}
          /> <br />
      
        <input type="submit" value="Submit" className='account-btn' onClick={onSubmit}/>
      </form>
    </div>
  );
}



  // function readMessages(){
  //   var { loading, messages, error } = useMessages();
  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }
  //   if (error) {
  //     return <p>Something went wrong: {error.message}</p>;
  //   }

  //   console.log(messages);
  
  //   messages = [{ id: "wewew" }];
  //   return (

  //     <div>
  //         <h1 id='join-heading'>Conversation List</h1>
  //             {messages.map(messages => (
  //                 <Message key={messages.text} {...messages} />
  //             ))}
              
  //     </div>

  // );
  // }
  
  function Message(message) {
    const {_id, conversationId, senderId, text, image, video, timeSent} = message;
  
    return (
      <section className='join'>
          <div className={`chat-room conversation-${text}`}  key={text}>
            <div className="info">
                {/*{_id}*/}
                <br></br>
                <br></br>
                <br></br>
               
                <br></br>
                {text}
                <br></br>
                {senderId}
             </div>
         </div>
      </section>
  );
  }
  



