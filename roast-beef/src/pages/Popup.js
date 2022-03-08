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
  TagsTextBox,
  Tags,
  DDTagButton,
  ClearButton,
} from "../pages/style";
import { db } from "../firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { cookies } from "./SignIn";
import { prodErrorMap } from "firebase/auth";
import clearx from "../images/clearx.png";

const SearchbarDropdown = (props) => {
  const { options, onInputChange, tagDropdownFocus } = props;
  const ulRef = useRef();

  function handleMentionClick() {
    if (tagDropdownFocus == 0 || tagDropdownFocus == 1)
      props.updateFocusDropdown(2);
    else props.updateFocusDropdown(0);
  }
  return (
    <div className="tagDropdown">
      <TextBox
        type="text"
        placeholder='Mention "@username"'
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        onClick={handleMentionClick}
        value={props.mentionInput}
      />{" "}
      <ul
        id="resultsMentions"
        style={
          tagDropdownFocus == 2 ? { display: "flex" } : { display: "none" }
        }
      >
        {options.map((option, index) => {
          return (
            <DDButton
              className="list-group-item list-group-item-action"
              key={index}
              onClick={(e) => {
                onInputChange(option);
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

const TagsDropdown = (props) => {
  const { options, onInputChange, tagDropdownFocus } = props;
  const ulTagRef = useRef();
  const inputTagRef = useRef();

  function handleTagClick() {
    if (tagDropdownFocus == 0 || tagDropdownFocus == 2)
      props.updateFocusDropdown(1);
    else props.updateFocusDropdown(0);
  }

  return (
    <div className="tagDropdown">
      <TagsTextBox
        type="text"
        placeholder='Search tags: "#ucla"'
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        onClick={handleTagClick}
        value={props.tagInput}
      />{" "}
      <ul
        id="resultsTags"
        style={
          tagDropdownFocus == 1 ? { display: "flex" } : { display: "none" }
        }
      >
        {options.map((option, index) => {
          return (
            <DDTagButton
              className="list-group-item list-group-item-action"
              key={index}
              onClick={(e) => {
                if(props.taggedList.length<4){
                  props.updateTaggedList([...props.taggedList,option]);
                  onInputChange("");
                }
                
              }}
            >
              {option}
            </DDTagButton>
          );
        })}
      </ul>
    </div>
  );
};

const userNameList = []; //should be list of all usernames, grabbed from back end
userNameList.push(`twxsha`);
userNameList.push(`shravan.parigi`);
userNameList.push(`dishasikaria`);
userNameList.push(`nikolaisilky`);
userNameList.push(`sankirth7`);
userNameList.push(`WestEggert`);
userNameList.push(`stephencurry30`);

const defaultOptions = []; //should be list of all tags, grabbed from back end
defaultOptions.push(`#political`);
defaultOptions.push(`#sports`);
defaultOptions.push(`#basketball`);
defaultOptions.push(`#business`);
defaultOptions.push(`#entertainment`);
defaultOptions.push(`#arts`);
defaultOptions.push(`#history`);
defaultOptions.push(`#casual`);
defaultOptions.push(`#ucla`);
defaultOptions.push(`#computerscience`);
defaultOptions.push(`#wordle`);
defaultOptions.push(`#globle`);
defaultOptions.push(`#handshakes`);


function removeTaggedFromOptions(options, tagged) {}

function Popup(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newVote_Tagged, setVote_Tagged] = useState("");
  const [newVote_User, setVote_User] = useState("");
  const [newMentioned, setMentioned] = useState("");

  const [tagDropdownFocus, updateFocusDropdown] = useState(0);
  const postsCollectionRef = collection(db, "posts");

  const [options, setOptions] = useState(userNameList);
  const [tagOptions, setTagOptions] = useState(defaultOptions);
  const [tagInput, updateTagInput] = useState("");
  const [mentionInput, updateMentionInput] = useState("");
  const [taggedList, updateTaggedList] = useState([]);

  const onInputChange = (value) => {
    updateMentionInput("@" + value);
    setMentioned(value);
    setOptions(userNameList.filter((option) => option.includes(value)));
  };

  useEffect(() => {
    setTagOptions(defaultOptions.filter((option) => option.includes(tagInput) && !taggedList.includes(option)));
  }, [taggedList, tagInput]);

  const onInputChangeTag = (value) => {
    updateTagInput(value);
  };

  const createPost = async () => {
  await addDoc(postsCollectionRef,{
      Title: newTitle,
      Tags: taggedList,
      Vote_Tagged: [],
      Vote_User: [],
      User: cookies.get("user"),
      Comments: [newContent],
      TaggedUser: newMentioned,
      createdAt: Date.now(),
    });
    props.setTrigger(false);
    window.location.reload();
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Text>Create Post</Text>
        <div className="popupsidebyside">
          <div id="popupleft">
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
              tagDropdownFocus={tagDropdownFocus}
              updateFocusDropdown={updateFocusDropdown}
              mentionInput={mentionInput}
              setMentioned={setMentioned}
            />

            <BiggerTextBox
              type="text"
              placeholder="Your text here"
              onChange={(event) => {
                setNewContent(event.target.value);
              }}
            ></BiggerTextBox>
          </div>
          <div id="popupright">
            <div className="tagsSelected">
              <ClearButton
                onClick={()=>updateTaggedList([])}
              >
                <img
                  src={clearx}
                  alt="clearx"
                  width="30"
                  height="30"
                ></img>
              </ClearButton>
              <div className="tags"> 
              {taggedList.map((option, index) => {
                return (
                  <Tags
                    className="list-group-item list-group-item-action"
                    key={index}
                  >
                    {option}
                  </Tags>
                );
              })}
              </div>
            </div>
            <TagsDropdown
              options={tagOptions}
              onInputChange={onInputChangeTag}
              onChange={(event) => {
                setNewTag(event.target.value);
              }}
              tagDropdownFocus={tagDropdownFocus}
              updateFocusDropdown={updateFocusDropdown}
              tagInput={tagInput}
              updateTaggedList={updateTaggedList}
              taggedList={taggedList}
            />
          </div>
        </div>
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
