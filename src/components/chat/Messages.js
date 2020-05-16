import React from "react";
import ToolBar from "./ToolBar";
import "../../chatStyles.css";

export default function Messages() {
  return ( 
    <div className="message-list">
        <ToolBar title="Conversation Title" />

        <div className="message-list-container">{}</div>
    </div>
  );
}