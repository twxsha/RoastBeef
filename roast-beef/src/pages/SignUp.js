import React from 'react';
import {NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper, HeaderText} from '../pages/style';
import Logo from '../images/logo.png';

function SignUp() {
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
                    <HeaderText>CREATE ACCOUNT</HeaderText>
                    <Text>Enter Your Name: </Text>
                    <Button></Button>
                    <Text>Enter Your Email: </Text>
                    <Button></Button>
                    <Text>Create Username: </Text>
                    <Button></Button><p/>
                    <Text>Create Password: </Text>
                    <Button></Button><p/>
                    <a href='/'>
                        <NextButton>Back</NextButton>
                        </a>
                    <a href='/signIn'>
                        <NextButton>Next</NextButton>
                        </a> <p/>
                </LandingPageWrapper>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignUp;