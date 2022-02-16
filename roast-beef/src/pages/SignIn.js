import React from 'react';
import {NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper, HeaderText} from '../pages/style';
import Logo from '../images/logo.png';

const SignIn = () => {
    return (
        <LandingPage>
            <LandingPageWrapper> 
                <NavBar> 
                    <a href='/' className="NavLogo">
                        <img src={Logo} alt="Logo"></img>
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