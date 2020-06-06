import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../css/styles.css";
import { removeParticipantsInConversation } from "../api";

// Nav specifies where to nagigate for each menu
export default function ChatNav() {
  let history = useHistory();

  //removes a record of a participant from a conversation
  //allows another person to join this conversation
  function onSubmit2(event) {
    event.preventDefault();
    removeParticipantsInConversation({
      conversationId: sessionStorage.getItem("conversationId"),
      participantsId: sessionStorage.getItem("accountId"),
    });
    history.push("/home");
  }

  return (
    <div className="Nav-bar">
      <h2 id="nav-logo-text">Pear</h2>
      <nav>
        <button type="submit" onClick={onSubmit2}>
          Leave Chat
        </button>
      </nav>
    </div>
  );
}
