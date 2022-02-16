import React from 'react';
import {NavBar, LandingPage, Button, NextButton, Text, LandingPageWrapper} from '../pages/style';
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
                    <Text>Enter Your Username: </Text>
                    <Button></Button>
                    <Text>Enter Your Password: </Text>
                    <Button></Button>
                </LandingPageWrapper>
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignUp;