import React, { useState } from "react";
import { addConversation} from "../../api";
import Button from "../../components/Button";
import { useConversations} from "../../api";


export default function Create() {


    return (
        <div>
            <ConversationAddForm />
        </div>

        //What do you want to talk about?

        //Pick a category:

        //Do you want to invite any friends?

        //Spice it up with an image!
    )
}
function ConversationAddForm() {
    const [topic, setTopic] = useState("");
    const [category, setCategory] = useState("");
    const [topicImage, setImage] = useState("");

    function onSubmit() {
        addConversation({
            topic,
            category,
            topicImage
        });
        // window.location.reload();
    }

    function handleSubmit(event) {
        event.preventDefault();
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
                        setImage(event.target.value);
                  }}
                />
                <div className="btn-create-container">
                    <Button className={"btn-create"} onClick={onSubmit}>
                        Create
                    </Button>
                </div>

            </form>
        </div>
    );
}

function ConversationAddImage() {

}




function Conversation(conversation) {
    const {category} = conversation;
    return (
        <div key={category}>
            <select>
                <option>{category}</option>
            </select>
        </div>
    );
}

