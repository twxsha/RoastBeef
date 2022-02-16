import React from 'react';
import Logo from '../images/logo.png';
import {NavBar, LandingPage, Button, LandingPageWrapper,Post,PostContents,Text} from '../pages/style';

const Home = () => {
    return (
        <LandingPage>
            <LandingPageWrapper>
            
    
                <NavBar> 
                    <a href='/' className="NavLogo">
                        <marquee behavior="alternate" width="300">
                            <img 
                            src={Logo} 
                            alt="Logo" 
                            align="left"
                            ></img>
                        </marquee>
                    </a> 
                </NavBar> <p/>
                
                
                <Post>
                
                <Text>TITLE</Text> <p/>
                
                <PostContents></PostContents> 
                </Post>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default Home;