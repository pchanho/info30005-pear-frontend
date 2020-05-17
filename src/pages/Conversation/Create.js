import React, { useState} from "react";
import { addConversation} from "../../api";
import { useConversations} from "../../api";
import {useHistory} from "react-router-dom";

export default function Create() {


    return (
        <div>
            <ConversationAddForm />
        </div>
    )
}

function ConversationAddForm() {
    const [topic, setTopic] = useState("");
    const [category, setCategory] = useState("");
    const [topicImage, setImage] = useState(null);
    var image;


    function onSubmit() {
        addConversation({
            topic,
            category,
            image
        });
    }

    const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        history.push("/chat");
    }

    return (
        <div className="conversation-create">
            <h1>Create a new Conversation - It's Easy!</h1>
            <form className="conversation-create-content" onSubmit={handleSubmit}>
                <p>Pick a category</p>
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={category}
                    onChange={event => {
                        setCategory(event.target.value);
                    }}
                />

                <br></br>
                <p>What do you want to talk about?</p>
                <input
                    type="text"
                    placeholder="Topic"
                    name="topic"
                    value={topic}
                    onChange={event => {
                        setTopic(event.target.value);
                    }}
                />
                
                <br></br>
                {/*friend added later*/}
                <p>Add your image</p>
                <input
                  type="file"
                  value={topicImage}
                  onChange={event => {
                    image = event.target.files[0];
                }}
                onClick={event => {
                    event.target.value = null
                }}
                />
                <div className="btn-create-container">
                    <button className={"btn-create"} onClick={onSubmit}>
                        {/* !!! Only if successful */}
                        {/* on click redirect to chat page*/}
                        {/* on click set currentConversation within sessionStorage */}
                        Create
                    </button>
                </div>

            </form>
        </div>
    );
}

// function Conversation(conversation) {
//     const {category} = conversation;
//     return (
//         <div key={category}>
//             <select>
//                 <option>{category}</option>
//             </select>
//         </div>
//     );
// }

