import {useState, useEffect, React} from 'react';
import db from '../firebase-config';
import Logo from '../images/logo.png';
import {NavBar, NavPadding, LandingPage, Button, LandingPageWrapper, Post, PostContents, Text} from '../pages/style';
import PostD from './Post';

const Home = () => {
    {/* posts stored in an array */}
    const [posts, setPosts] = useState ([
        {
            username1: "paul eggert",
            username2: "students",
            postText: "students deserve a harder project"
        },
        {
            username1: "nicky",
            username2: "shravan",
            postText: "we hate sank"
        },
    ]);

    return (
        <LandingPage>
            <NavBar>
                <a href='/' className="NavLogo">
                    <marquee behavior="alternate" width="300">
                        <img src={Logo} alt="Logo" align="left" width="200" height="133" ></img>
                    </marquee>
                </a>
            </NavBar>
            <NavPadding>
            </NavPadding> <p />
            <LandingPageWrapper>
                {
                    posts.map(post => (
                        <PostD username1={post.username1} username2={post.username2} postText={post.postText}></PostD>
                    ))
                }
                <p></p>
            </LandingPageWrapper>
        </LandingPage>
        
    );
}
export default Home;