import React from 'react';
import { useConversations} from "../api";
import { NavLink, useHistory } from "react-router-dom";
import "../css/homeStyles.css";

// Present conversation list, conversation creation
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
        </div>
      </div>
    );
}

// Fetch conversation data from mongoDB
function Conversation(conversation) {
    const {_id, status, topic, category, topicImage} = conversation;

    const history = useHistory();
    
// Store topicImage on user click and redirect to chat page
    function handleClick(event) {
      event.preventDefault();
      history.push("/chat");
      sessionStorage.setItem('currentTopicImage', topicImage);
      sessionStorage.setItem('conversationId', _id);
    }


    return (
      <button
        className={`conversation-item conversation-${topic}`}
        key={topic}
        style={{backgroundImage: `url(${topicImage})`}}
        onClick={handleClick}
      >
        🏷 {category}<br></br>🗣 {topic}
      </button>
    );
}


