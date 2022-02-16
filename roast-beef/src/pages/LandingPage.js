import React from 'react';
import Link from 'react-router-dom';
import Logo from '../images/logo.png';
import {NavBar, LandingPage, Button, LandingPageWrapper} from './style';

function Nav() {
    return(
        <nav class="Landing">    
            <LandingPage> 
                <NavBar> 
                    <a href='/' className="NavLogo">
                        <img src={Logo} alt="Logo"></img>
                    </a> 
                </NavBar> <p/>
                <LandingPageWrapper>
                    <a href="/signUp">
                        <Button>Create Account</Button>
                    </a> <p/> 
                    <a href="/signIn">
                        <Button>Log In</Button>
                    </a> <p/> 
                </LandingPageWrapper>
            </LandingPage>
        </nav>
    );
}

export default Nav;