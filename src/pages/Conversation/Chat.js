import React from "react";
import Messages from '../../components/chat/Messages';
import "../../chatStyles.css";
import { getMessages, useMessages} from "../../api.js";


export default function Chat() {

  return (
    <section className="forms">
      <div class="account">
        <div class="create">
          <h1>Create Account</h1>

          <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" /> <br />
            <label for="sname">Last Name</label>
            <input type="text" id="sname" name="sname" /> <br />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" /> <br />
            <label for="datemin">Date of Birth</label>
            <input type="date" id="birthday" min="1960-01-02" /> <br />
            <label for="pword">Password</label>
            <input type="password" id="pword" name="pword" /> <br />
            <label for="cpword">Confirm Password</label>
            <input type="password" id="cpword" name="cpword" /> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div class="login">
          <h1>Login</h1>
          <form>
            <label for="lemail">Email</label>
            <input type="email" id="lemail" name="lemail" /> <br />
            <label for="lpword">Password</label>
            <input type="password" id="lpword" name="lpword" /> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );







    var { loading, messages, error } = useMessages();
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Something went wrong: {error.message}</p>;
    }

    console.log(messages);
  
    messages = [{ id: "wewew" }];
    return (

      <div>
          <h1 id='join-heading'>Conversation List</h1>
              {messages.map(messages => (
                  <Message key={messages.text} {...messages} />
              ))}
              
      </div>

  );
}


  
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
  



