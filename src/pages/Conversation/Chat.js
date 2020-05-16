import React from "react";
import Messages from '../../components/chat/Messages';
import "../../chatStyles.css";
import { getMessages, useMessages} from "../../api.js";


export default function Chat() {

  return (
    <section className="forms">
      <div class="chatLog">
        <ChatBox />
   
      </div>
    </section>
  );    
}


function ChatBox() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [birthday, setBirthday] = useState("");
  // const [password, setPassword] = useState("");
  // function onSubmit() {
  //     addAccount({
  //         firstName,
  //         lastName,
  //         email, 
  //         birthday, 
  //         password
  //     });

  //     window.location.reload();
  // }

  function onSubmit() {
  

    window.location.reload();
}

  return (
    <div class="chatBox">
      <h1>Create Account</h1>

      <form>
        
      
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
                {text}
             </div>
         </div>
      </section>
  );
  }
  



