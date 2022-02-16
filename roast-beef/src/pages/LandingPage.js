import React from 'react';
import Logo from '../images/logo.png';
import {NavBar, LandingPage, Button, LandingPageWrapper} from './style';

function Nav() {
    return(
        <nav class="Landing">    
            <LandingPage> 
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