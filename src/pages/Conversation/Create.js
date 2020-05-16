import React, { useState } from "react";
import { addConversation} from "../../api";
import Button from "../../components/Button";


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

        window.location.reload();
    }

    return (
        <div className="conversation-create">
            <h1>Create a new Conversation - It's Easy!</h1>
            <form className="conversation-create-content">
                <input
                    type="text"
                    placeholder="Topic"
                    name="topic"
                    value={topic}
                    onChange={event => {
                        setTopic(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={category}
                    onChange={event => {
                        setCategory(event.target.value);
                    }}
                />

                {/*friend added later*/}
                <body>
                Add a file
                </body>
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





