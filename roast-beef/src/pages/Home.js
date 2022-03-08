import { useState, useEffect, React, useRef } from "react";
import "./HomePage.css";
import "./HomeCss.css";
import {db} from "../firebase-config";
import Logo from "../images/logo.png";
import Popup from "./Popup";
import {
  NavBar,
  NavPaddingHome,
  LandingPage,
  Text,
  SearchButton,
  NickyButton,
  SearchBar,
  DDButton,
} from "../pages/style";
import PostD from "./Post";
import "./HomeCss.css";
import "./Popup";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { async } from "@firebase/util";
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
      document.addEventListener('click', (event) =>{
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
      <SearchButton>Search</SearchButton>
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





const Home = () => {

  const [posts, setPosts] = useState([]);
  const postsColRef = collection(db, "posts");

  useEffect(()=> {
    const getPosts = async () => {
      const q = query(postsColRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setPosts(querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getPosts();
  }, []);

  // function writeComment(){
  //   const thisPost = doc(db, "posts", "DC");

  //   // Atomically add a new region to the "regions" array field.
  //   await updateDoc(thisPost, {
  //       Comments: arrayUnion("greater_virginia")
  //   });
  // }

  const postsCollectionRef = collection(db, "posts");
  const [buttonPopup, setButtonPopup] = useState(false);

  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    console.log(event.target.value);
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value))
    );
  };

  return (
    <LandingPage>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      <NavBar>
        <br/>
        <SearchbarDropdown options={options} onInputChange={onInputChange} />
        <div className="outerrightuser">
          <Text> {cookies.get('user')}</Text>
        </div>
        <div className="outerright">
          <div>
            <NickyButton onClick={() => setButtonPopup(true)}>
              {" "}
              Start Beef{" "}
            </NickyButton>
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
        <br/>
      </NavBar>{" "}
      <p />
      <NavPaddingHome></NavPaddingHome> <p />
      {posts.map((post) => {
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
        
      })}
      <p></p>
    </LandingPage>
  );
};
export default Home;
