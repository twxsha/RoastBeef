import React from 'react';
import Logo from '../images/logo.png';
import {NavBar, NavPadding, LandingPage, Button, LandingPageWrapper,Post,PostContents,Text} from '../pages/style';

const Home = () => {
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
                <Post>
                <Text>TITLE</Text> <p/>
                <PostContents></PostContents> 
                </Post>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default Home;