import React, { useState } from "react";
import { addConversation, useConversations } from "../api";
import { useHistory } from "react-router-dom";
import "../css/createStyles.css";
import ReactTooltip from "react-tooltip";

export default function Create() {
  return (
    <div>
      <ConversationAddForm />
    </div>
  );
}

/* function creates a form and submits form data to the database to be stored
 */
function ConversationAddForm() {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [topicImage, setImage] = useState(null);
  var image;

  //on submit the function calls the api add conversation function with input parameters
  async function onSubmit() {
    history.push("/loading");
    await addConversation({
      topic,
      category,
      image,
    });
    history.push("/chat");
  }

  const history = useHistory();

  //on form submit the page is redirected to home
  function handleSubmit(event) {
    event.preventDefault();
    //history.push("/loading");
  }

  //JSX for conversation form
  return (
    <div className="conversation-create">
      <h1>Create a new Conversation - It's Easy!</h1>
      <form className="conversation-create-content" onSubmit={handleSubmit}>
        <p>Enter a conversation category</p>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          data-tip="ex) Film, Gardening, Photography, Literature..."
        />
        <ReactTooltip />

        <br></br>
        <p>What do you want to talk about?</p>
        <input
          type="text"
          placeholder="Topic"
          name="topic"
          value={topic}
          onChange={(event) => {
            setTopic(event.target.value);
          }}
        />

        <br></br>
        <p>Add your image</p>
        <input
          type="file"
          value={topicImage}
          onChange={(event) => {
            image = event.target.files[0];
            console.log(image);
          }}
          onClick={(event) => {
            event.target.value = null;
          }}
        />
        <div className="btn-create-container">
          <button className={"btn-create"} onClick={onSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
