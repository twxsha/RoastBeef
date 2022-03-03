import { useState, React, useEffect } from "react";
import "./HomePage.css";
import { db, db2 } from "../firebase-config";
import Logo from "../images/logo.png";
import Popup from "./Popup";
import { NavBar, NavPadding, LandingPage, NickyButton } from "../pages/style";
import PostD from "./Post";
import "./Popup";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const postsColRef = collection(db, "posts");


  useEffect(()=> {
    const getPosts = async () => {
      const data = await getDocs(postsColRef);
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getPosts();
  }, []);


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
      {posts.map((post) => {
        return (
          <PostD
            username={post.User}
            taggerUser={post.TaggedUser}
            postText={post.Text}
            postTitle={post.Title}
          ></PostD>
        );
        
      })}
      <p></p>
    </LandingPage>
  );
};
export default Home;




/*
    instagram guys

    useEffect(()=> {
      db2.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
          id: doc.id,
          post: doc.data()
        })));
      })
    }, []);

    */

     /*
  //get collection data
  getDocs(postsColRef)
    .then((snapshot) => {
      let posts = []
      snapshot.docs.forEach((doc) => {
        posts.push({...doc.data(), id: doc.id})
      })
      console.log(posts)
    })
    .catch(err => {
      console.log(err.message)
    })
*/