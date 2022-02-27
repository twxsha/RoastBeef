import React, { useState } from 'react';
import './nicky.css';
import Logo from '../images/logo.png';
import Popup from './Popup'
import {NavBar, NavPadding, LandingPage, Button, LandingPageWrapper, Post, PostContents, Text, NextButton} from '../pages/style';
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
            <Popup trigger={true}>
            </Popup>              
            <NavBar>
            <div class="outer">
                    <div>
                        <NextButton> Create Post </NextButton>
                    </div>
                </div>

                <a href='/' className="NavLogo">
                    <div class="stayPut">
                        <marquee behavior="alternate" width="300">
                            <img src={Logo} alt="Logo" align="left" width="200" height="133" ></img>
                        </marquee>
                    </div>
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