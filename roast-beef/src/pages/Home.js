import React from 'react';
import Logo from '../images/logo.png';
import Fight from '../images/FightSymbol.png';
import {NavBar, LandingPage, Button, LandingPageWrapper,Post,PostContents,Text, Reply} from '../pages/style';

const Home = () => {
    return (
        <LandingPage>
            <LandingPageWrapper>
                <NavBar> 
                    <a href='/' className="NavLogo">
                        <marquee behavior="alternate" width="300">
                            <img src={Logo} alt="Logo" align="left" ></img>
                        </marquee>
                    </a> 
                </NavBar> <p/>
                
                <Post>
                    <div>
                        <Text>POST 1</Text>
                        {/* <img src={Fight} alt="Versus" ></img> */}
                    </div>
                    <PostContents></PostContents> 
                </Post><p/>                
                <Post>
                    <Text>POST 2</Text> <p/>
                    <PostContents></PostContents> 
                </Post><p/>
                <Post>
                    <Text>POST 3</Text> <p/>
                    <PostContents></PostContents> 
                </Post><p/>
                <Post>
                    <Text>POST 4</Text> <p/>
                    <PostContents></PostContents> 
                </Post><p/>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default Home;