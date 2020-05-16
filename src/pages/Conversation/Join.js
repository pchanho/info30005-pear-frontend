import React from 'react';
import { useConversations} from "../../api";
import { NavLink } from "react-router-dom";
import "./joinStyles.css";


export default function Join() {
    const { loading, conversations, error } = useConversations();
    console.log(conversations)
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return (

        <div>
            <h1 id='join-heading'>Conversation List</h1>
                {conversations.map(conversation => (
                    <Conversation key={conversation.id} {...conversation} />
                ))}
                <NavLink to="/create" className="btn">+</NavLink>
        </div>

    );
}

function Conversation(conversation) {
    const {_id, status, topic, category} = conversation;

    return (
        <section className='join'>
            <div className={`chat-room conversation-${topic}`}  key={topic}>
              <div className="info">
                  {/*{_id}*/}
                  <br></br>
                  <br></br>
                  {status}
                  <br></br>
                  <NavLink to="/chat" className="btn">Join</NavLink>
                  <br></br>
                  {topic}
                  <br></br>
                  {category}
               </div>
           </div>
        </section>
    );
}
