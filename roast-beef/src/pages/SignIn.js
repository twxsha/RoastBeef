import React from 'react';
import {NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper} from '../pages/style';
import Logo from '../images/logo.png';

const SignIn = () => {
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
                <LandingPageWrapper>
                    <Text>Enter Your Username: </Text>
                    <Button></Button>
                    <Text>Enter Your Password: </Text>
                    <Button></Button>
                </LandingPageWrapper>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignIn;