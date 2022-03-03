import { useState, React } from "react";
import "./HomePage.css";
import { db } from "../firebase-config";
import Logo from "../images/logo.png";
import Popup from "./Popup";
import { NavBar, NavPadding, LandingPage, NickyButton } from "../pages/style";
import PostD from "./Post";
import "./Popup";
import { collection } from "firebase/firestore";

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
  return (
    <LandingPage>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      <NavBar>
        <br></br>
        <div class="outer">
          <div>
            <NickyButton
              style={{ justifyContent: "right" }}
              onClick={() => setButtonPopup(true)}
            >
              {" "}
              Create Post{" "}
            </NickyButton>
          </div>
        </div>
        <a href="/" className="NavLogo">
          <div class="stayPut">
            <marquee behavior="alternate" width="300">
              <img
                src={Logo}
                alt="Logo"
                align="left"
                width="200"
                height="133"
              ></img>
            </marquee>
          </div>
        </a>
      </NavBar>
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
