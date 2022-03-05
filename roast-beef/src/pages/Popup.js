import React from "react";
import { useState, useRef, useEffect } from "react";
import "./HomePage.css";
import "./Popup.css";
import {
  TextBox,
  Text,
  BiggerTextBox,
  NickyButton,
  DDButton,
} from "../pages/style";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { cookies } from "./SignIn"

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  
  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
    });
    document.addEventListener("click", (event) => {
      ulRef.current.style.display = "none";
    });
  }, []);

  return (
    <div className="tagDropdown">
      <TextBox
        type="text"
        placeholder='Tag "@username"'
        ref={inputRef}
        onChange={onInputChange}
      />{" "}
      <ul id="resultsTags" ref={ulRef} style = {{display: "none"}}>
        {options.map((option, index) => {
          return (
            <DDButton
              className="list-group-item list-group-item-action"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
              }}
            >
              {"@" + option}
            </DDButton>
          );
        })}
      </ul>
    </div>
  );
};

const userNameList = [];//should be list of all usernames, grabbed from back end
userNameList.push(`twxsha`);
userNameList.push(`shravan.parigi`);
userNameList.push(`dishasikaria`);
userNameList.push(`nikolaisilky`);
userNameList.push(`sankirth7`);
userNameList.push(`WestEggert`);
userNameList.push(`stephencurry30`);

function Popup(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newVote_Tagged, setVote_Tagged] = useState("");
  const [newVote_User, setVote_User] = useState("");

  const postsCollectionRef = collection(db, "posts");

  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    console.log(event.target.value);
    setOptions(
      userNameList.filter((option) => option.includes(event.target.value))
    );
  };

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      Title: newTitle,
      Tags: ["Wordle", "Intel", "sankirth"],
      Vote_Tagged: 0,
      Vote_User: 0,
      User: cookies.get('user'),
      Comments: [newContent, "..."],
      TaggedUser: "Nicky",
    });
    props.setTrigger(false);
    window.location.reload();
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Text>Create Post</Text>

        <TextBox
          type="text"
          placeholder="Enter title here"
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />

        <SearchbarDropdown
          options={options}
          onInputChange={onInputChange}
          onChange={(event) => {
            setNewTag(event.target.value);
          }}
        />

        <BiggerTextBox
          type="text"
          placeholder="Your text here"
          onChange={(event) => {
            setNewContent(event.target.value);
          }}
        ></BiggerTextBox>

        <br></br>
        <br></br>
        <div class="outer">
          <div>
            <NickyButton onClick={() => props.setTrigger(false)}>
              {" "}
              Cancel{" "}
            </NickyButton>
          </div>
        </div>

        <div class="outer2">
          <NickyButton onClick={createPost}> Post </NickyButton>
        </div>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
