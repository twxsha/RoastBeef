import React from 'react';
import {NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper, HeaderText, TextBox,} from '../pages/style';
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
                    <TextBox type="text" placeholder="Name" /><p/>
                    <Text>Enter Your Email: </Text>
                    <TextBox type="text" placeholder="Email" /><p/>
                    <Text>Create Username: </Text>
                    <TextBox type="text" placeholder="Username" /><p/>
                    <Text>Create Password: </Text>
                    <TextBox type="text" placeholder="Password" /><p/>
                    <NextButton>Next</NextButton><p/>
                </LandingPageWrapper>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignUp;