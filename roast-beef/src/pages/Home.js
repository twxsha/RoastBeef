import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import "./HomeCss.css";
import { db } from "../firebase-config";
import Logo from "../images/logo.png";
import Popup from "./Popup";
import {
  NavBar,
  NavPaddingHome,
  LandingPage,
  Text,
  SearchButton,
  PopupButton,
  SearchBar,
  DDButton,
} from "../pages/style";
import PostD from "./Post";
import "./HomeCss.css";
import "./Popup";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { cookies } from "./SignIn"

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="outerleft">
      <SearchBar
        type="text"
        placeholder="Search Here"
        ref={inputRef}
        onChange={onInputChange}
      />{" "}
      <SearchButton
        onClick={(event) => (props.filterTag(inputRef.current.value))}
      >Search</SearchButton>
      <ul id="results" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <DDButton
              className="list-group-item list-group-item-action"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
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



const ShowPosts = (props) => {
  let arr = props.filtered.map((post) => {
    console.log(props.filtered);
    return (
      <PostD
        username={post.User}
        taggedUser={post.TaggedUser}
        postText={post.Text}
        postTitle={post.Title}
        postTags={post.Tags}
        postComments={post.Comments}
        postVote_Tagged={post.Vote_Tagged}
        postVote_User={post.Vote_User}
      ></PostD>
    );
  });
  return arr;
}

const Home = () => {

  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const postsColRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const q = query(postsColRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFiltered(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getPosts();
  }, []);

  const [buttonPopup, setButtonPopup] = useState(false);

  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value))
    );
  };

  function filterPosts(filterTag) {
    if (filterTag === "") {
      setFiltered(posts);
    }
    else {
      let arr = posts.filter(function (post) {
        return Array.from(post.Tags).includes(filterTag);
      });
      setFiltered(arr);
    }
  }

  return (
    <LandingPage>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      <NavBar>
        <br />
        <SearchbarDropdown options={options} onInputChange={onInputChange} filterTag={filterPosts} />
        <div className="outerrightuser">
          <Text> {cookies.get('user')}</Text>
        </div>
        <div className="outerright">
          <div>
            <PopupButton onClick={() => setButtonPopup(true)}>
              {" "}
              Start Beef{" "}
            </PopupButton>
          </div>
        </div>
        <div className="stayPutHome">
          <a href="/" className="NavLogo">
            <marquee behavior="alternate" width="300">
              <img
                src={Logo}
                alt="Logo"
                align="left"
                width="180"
                height="120"
              ></img>
            </marquee>
          </a>
        </div>
        <br />
      </NavBar>{" "}
      <p />
      <NavPaddingHome></NavPaddingHome> <p />
      <ShowPosts
        filtered={filtered}
      ></ShowPosts>
      <p></p>
    </LandingPage>
  );
};
export default Home;
