import React from 'react';
import { useConversations} from "../../api";
import { NavLink } from "react-router-dom";
import "./homeStyles.css";
// import Button from '../../components/Button';


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
    return (
      <NavLink
        to="/chat"
        className={`conversation-item conversation-${topic}`}
        key={topic}
        style={{backgroundImage: `url(${topicImage})`}}
      >
        🏷 {category}<br></br>🗣 {topic}
      </NavLink>
    );
}
