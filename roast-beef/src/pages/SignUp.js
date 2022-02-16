import React from 'react';
import {NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper, HeaderText} from '../pages/style';
import Logo from '../images/logo.png';

function SignUp() {
    return (
        <LandingPage>
            <LandingPageWrapper> 
                <NavBar> 
                    <a href='/' className="NavLogo">
                        <img src={Logo} alt="Logo"></img>
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
                    <NextButton>Next</NextButton><p/>
                </LandingPageWrapper>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignUp;