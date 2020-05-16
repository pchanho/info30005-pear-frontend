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
    const [image, setImage] = useState("");

    function onSubmit() {
        addConversation({
            topic,
            category,
            image
        });
        // window.location.reload();
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const {conversations} = useConversations();

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
                  value={image}
                  onChange={event => {
                        setImage(event.target.value);
                  }}
                />
                <Button className={"btn-success"} onClick={onSubmit}>
                    Create
                </Button>
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

