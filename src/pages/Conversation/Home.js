import React from 'react';
import { useConversations} from "../../api";
import { NavLink, useHistory } from "react-router-dom";
import "./homeStyles.css";


export default function Home() {
    const { loading, conversations, error } = useConversations();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return (
      <div className='join-main'>
        <h1 id='join-heading'>Conversation List</h1>
        <div className="join-container">
          <NavLink to="/create" className="btn-join">Add New Conversation</NavLink>
          {conversations.map(conversation => (
            <Conversation key={conversation.id} {...conversation} />
            ))}
            {/*<NavLink to="/create" className="btn">+</NavLink>*/}
        </div>
      </div>
    );
}

function Conversation(conversation) {
    const {_id, status, topic, category, topicImage} = conversation;

    let history = useHistory();

    function storeCurrentConversation(conversation) {
      history.push("/chat");
      {/* on click set currentConversation within sessionStorage */}
    }


    return (
      <button
        className={`conversation-item conversation-${topic}`}
        key={topic}
        style={{backgroundImage: `url(${topicImage})`}}
        //onClick={storeCurrentConversation(conversation)}
      >
        🏷 {category}<br></br>🗣 {topic}
      </button>





        // onClick={storeCurrentConversation(conversation)}

    );
}


