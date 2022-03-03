import {useState, useEffect, React} from 'react';
import './HomePage.css';
import db from '../firebase-config';
import Logo from '../images/logo.png';
import Popup from './Popup'
import {NavBar, NavPadding, LandingPage, Button, LandingPageWrapper, Post, PostContents, Text, NextButton, NickyButton, SearchBar, DDButton} from '../pages/style';
import PostD from './Post';
import './HomeCss.css'
import "./Popup";
import { collection } from "firebase/firestore";

const SearchbarDropdown = (props) => {
    const {options, onInputChange} = props;
    return(
        <div className = "outerleft">
            <SearchBar type="text" placeholder="Search Here" onChange={onInputChange}/> <p/>
            <ul id = "results">
                {options.map((option, index) => {
                    return (
                        <DDButton
                            className='list-group-item list-group-item-action'
                            key={index}
                        >
                            {option}
                        </DDButton>
                    );
                })}
            </ul>
        </div>
    );
}


const defaultOptions = [];
defaultOptions.push(`#political`);
defaultOptions.push(`#sports`);
defaultOptions.push(`#basketball`);
defaultOptions.push(`#business`);
defaultOptions.push(`#entertainment`);
defaultOptions.push(`#arts`);
defaultOptions.push(`#history`);
defaultOptions.push(`#casual`);
defaultOptions.push(`#ucla`);
defaultOptions.push(`#computer science`);
defaultOptions.push(`#wordle`);
defaultOptions.push(`#globle`);
defaultOptions.push(`#handshakes`);

for(let i = 0; i < 10; i++){
    defaultOptions.push(`tag ${i}`);
}

const Home = () => {
  {
    /* posts stored in an array */
  }
  const [posts, setPosts] = useState([
    {
      username1: "paul eggert",
      username2: "students",
      postText: "students deserve a harder project",
    },
    {
      username1: "nicky",
      username2: "shravan",
      postText: "we hate sank",
    },
  ]);
  
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
      <br></br>
      <SearchbarDropdown options={options} onInputChange={onInputChange}/>
      <div className="outerright">
          <div>
              <NickyButton onClick={() => setButtonPopup(true)}> Create Post </NickyButton>
          </div>
      </div>
      <div className = "stayPutHome">
          <a href='/' className="NavLogo">
              <marquee behavior="alternate" width="300">
                  <img src={Logo} alt="Logo" align="left" width="200" height="133" ></img>
              </marquee>
          </a>
      </div>
  </NavBar> <p/>
   <NavPadding></NavPadding> <p />
      {posts.map((post) => (
        <PostD
          username1={post.username1}
          username2={post.username2}
          postText={post.postText}
        ></PostD>
      ))}
      <p></p>
    </LandingPage>
  );
};
export default Home;