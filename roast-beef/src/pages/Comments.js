import React from "react";
import { useState } from "react";
import "./HomePage.css";
import "./Comments.css";
import {
  Comments,
  CommentTitle,
  CreateComments,
  CommentButton2,
} from "../pages/style";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function Popup(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newVote_Tagged, setVote_Tagged] = useState("");
  const [newVote_User, setVote_User] = useState("");

  const postsCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      Title: newTitle,
      Tags: newTag,
      Text: newContent,
      Vote_Tagged: 0,
      Vote_User: 0,
    });
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="cPopup">
      <div className="cPopup-inner">
        <br></br>

        <CommentTitle>Comments</CommentTitle>

        <Comments>Comment Text...</Comments>

        <br></br>
        <br></br>

        <Comments>Comment Text...</Comments>

        <br></br>
        <br></br>

        <CreateComments
          type="text"
          placeholder="Enter Comment"
          onChange={(event) => {
            setNewTag(event.target.value);
          }}
        />

        <br></br>
        <br></br>
        <div class="outer">
          <div>
            <CommentButton2 onClick={() => props.setTrigger(false)}>
              {" "}
              Cancel{" "}
            </CommentButton2>
          </div>
        </div>

        <div class="outer2">
          <CommentButton2 onClick={createPost}> Comment </CommentButton2>
        </div>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
