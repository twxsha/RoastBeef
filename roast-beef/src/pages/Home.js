import React from 'react';
import './nicky.css';
import Logo from '../images/logo.png';
import Popup from './Popup'
import {NavBar, LandingPage, LandingPageWrapper,Post,PostContents,Text,NextButton} from '../pages/style';

const Home = () => {
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
                            <img
                                src={Logo}
                                alt="Logo"
                                width="200" height="133"
                                
                            ></img>
                     </marquee>
                    </div>
  
                    
                </a>
                
            </NavBar> <p />
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