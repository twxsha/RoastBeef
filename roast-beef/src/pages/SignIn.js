import React from 'react';
import {NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper, HeaderText} from '../pages/style';
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
                    <HeaderText>LOG IN</HeaderText>
                    <Text>Enter Your Username: </Text>
                    <Button></Button>
                    <Text>Enter Your Password: </Text>
                    <Button></Button><p/>
                    <a href='/'>
                        <NextButton>Back</NextButton>
                        </a>
                    <a href='/home'>
                        <NextButton>Next</NextButton>
                        </a> <p/>
                </LandingPageWrapper>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignIn;