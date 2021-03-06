import React from "react";
import { useState, useRef, useEffect } from "react";
import "./HomePage.css";
import "./Popup.css";
import {
  TextBox,
  Text,
  BiggerTextBox,
  PopupButton,
  DDButton,
  TagsTextBox,
  Tags,
  DDTagButton,
  ClearButton,
  ErrorText
} from "../pages/style";
import { db } from "../firebase-config";
import { collection, addDoc, getDocs,query,where } from "firebase/firestore";
import { cookies } from "./SignIn";
import clearx from "../images/clearx.png";

const SearchbarDropdown = (props) => {
  const { options, onInputChange, tagDropdownFocus } = props;
  const ulRef = useRef();

  function handleMentionClick() {
    if (tagDropdownFocus === 0 || tagDropdownFocus == 1)
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
          tagDropdownFocus === 2 ? { display: "flex" } : { display: "none" }
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
              {option}
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
    if (tagDropdownFocus === 0 || tagDropdownFocus === 2)
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
          tagDropdownFocus === 1 ? { display: "flex" } : { display: "none" }
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

let userNameList = [];

const defaultOptions = [];
defaultOptions.push(`#political`);
defaultOptions.push(`#sports`);
defaultOptions.push(`#basketball`);
defaultOptions.push(`#football`);
defaultOptions.push(`#business`);
defaultOptions.push(`#entertainment`);
defaultOptions.push(`#music`);
defaultOptions.push(`#movies`);
defaultOptions.push(`#TV`);
defaultOptions.push(`#food`);
defaultOptions.push(`#casual`);
defaultOptions.push(`#school`);
defaultOptions.push(`#ucla`);
defaultOptions.push(`#computerscience`);
defaultOptions.push(`#technology`);
defaultOptions.push(`#wordle`);
defaultOptions.push(`#environment`);
defaultOptions.push(`#fitness`);
defaultOptions.push(`#travel`);
defaultOptions.push(`#style`);
defaultOptions.push(`#animals`);


function Popup(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newMentioned, setMentioned] = useState("");

  const [tagDropdownFocus, updateFocusDropdown] = useState(0);
  const postsCollectionRef = collection(db, "posts");
  const usersColRef = collection(db, "users");

  const [options, setOptions] = useState([]);
  const [tagOptions, setTagOptions] = useState(defaultOptions);
  const [tagInput, updateTagInput] = useState("");
  const [mentionInput, updateMentionInput] = useState("");
  const [taggedList, updateTaggedList] = useState([]);
  const [postError, setPostError] = useState("");
  
  const onInputChange = (value) => {
    updateMentionInput(value);
    setMentioned(value);
    setOptions(userNameList.filter((option) => option.includes(value)));
  };
  
  useEffect(() => {
    const getOptions = async () => {
      const  q = await getDocs(usersColRef);
      userNameList = q.docs.map((doc) => (doc.data().user))
      setOptions(userNameList.filter((option) => option !== cookies.get('user')));
    }
    getOptions();
    setTagOptions(defaultOptions.filter((option) => option.includes(tagInput) && !taggedList.includes(option)));
  }, [taggedList, tagInput]);

  const onInputChangeTag = (value) => {
    updateTagInput(value);
  };

  const createPost = async () => {
    const h = query(postsCollectionRef, where("Title", "==", newTitle));
    const querySnapshot = await getDocs(h);

    if(newTitle.replace(/\s/g, "") === "") {
      setPostError("Title field can not be empty");
    }
    else if(!querySnapshot.empty){
      setPostError("Title already exists");
    }
    else if(newMentioned === "") {
      setPostError("Must select a user to beef with");
    }
    else if(newContent.replace(/\s/g, "")  === "") {
      setPostError("Must enter a roast ");
    }
    else if(taggedList.length === 0) {
      setPostError("Must select at least one tag");
    }
    else {
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
    }
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
            <ErrorText>{postError}</ErrorText>
          </div>
        </div>
        <br></br>
        <br></br>
        <div class="outer">
          <div>
            <PopupButton onClick={() => props.setTrigger(false)}>
              {" "}
              Cancel{" "}
            </PopupButton>
          </div>
        </div>

        <div class="outer2">
          <PopupButton onClick={createPost}> Post </PopupButton>
        </div>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
