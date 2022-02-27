import React from 'react';
import { NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper, HeaderText, TextBox } from '../pages/style';
import Logo from '../images/logo.png';

const SignIn = () => {
    return (
        <LandingPage>
            <NavBar>
                <a href='/' className="NavLogo">
                    <marquee behavior="alternate" width="300">
                        <img
                            src={Logo}
                            alt="Logo"
                            align="left"
                            width="200" height="133"
                        ></img>
                    </marquee>
                </a>
            </NavBar> 
            <LandingPageWrapper>
                <HeaderText>LOG IN</HeaderText>
                <Text>Enter Your Username: </Text>
                <TextBox type="text" placeholder="Username" /><p />
                <Text>Enter Your Password: </Text>
                <TextBox type="password" placeholder="Password" /><p />
                <a href='/'>
                    <NextButton>Back</NextButton>
                </a>
                <a href='/home'>
                    <NextButton>Next</NextButton>
                </a> <p />
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignIn;