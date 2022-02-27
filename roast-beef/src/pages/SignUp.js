import React from 'react';
import { NavBar, NavPadding, LandingPage, Button, NextButton, Text, LandingPageWrapper, HeaderText, TextBox } from '../pages/style';
import Logo from '../images/logo.png';

function SignUp() {
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
            <NavPadding>
            </NavPadding> <p />
            <LandingPageWrapper>
                <HeaderText>CREATE ACCOUNT</HeaderText>
                <Text>Enter Your Name: </Text>
                <TextBox type="text" placeholder="Name" /><p />
                <Text>Enter Your Email: </Text>
                <TextBox type="text" placeholder="Email" /><p />
                <Text>Create Username: </Text>
                <TextBox type="text" placeholder="Username" /><p />
                <Text>Create Password: </Text>
                <TextBox type="password" placeholder="Password" /><p />
                <a href='/'>
                    <NextButton>Back</NextButton>
                </a>
                <a href='/signIn'>
                    <NextButton>Next</NextButton>
                </a> <p />
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignUp;