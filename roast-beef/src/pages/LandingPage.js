import React from 'react';
import Logo from '../images/logo.png';
import {LandingPage, LandingButton, LandingPageWrapper} from './style';

function Nav() {
    return(
        <nav class="Landing">    
            <LandingPage> 
                <LandingPageWrapper>
                    <a href='/' className="NavLogo">
                        <img src={Logo} alt="Logo" width="621" height="394"></img>
                    </a> <br/> <br/> <br/> <br/>
                    <a href="/signUp">
                        <LandingButton>Create Account</LandingButton>
                    </a> <br/> <br/> <br/> 
                    <a href="/signIn">
                        <LandingButton>Log In</LandingButton>
                    </a> <p/> 
                </LandingPageWrapper>
            </LandingPage>
        </nav>
    );
}

export default Nav;