import React from "react";
import Messages from '../../components/chat/Messages';
import "../../chatStyles.css";

export default function Chat() {
    return (
        <div class="container">
            <div class="chatBox scrollable">
                <h1>list</h1>
            </div>
            <div class="chatList scrollable">
                <Messages />
            </div>
        </div>
    );
}
