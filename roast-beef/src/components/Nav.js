import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png'
import InfoBar from '../images/InfoBar.png'
import {NavBar, LandingPage, Button, LandingPageWrapper} from '../pages/style';

function Nav() {
    return(
        <LandingPage> 
            <nav class="Navigation">    
                <div class="navbar">
                    <NavBar> 
                        <Link to='/' className="NavLogo">
                            <img src={Logo} alt="Logo"></img>
                        </Link> 
                    </NavBar> <p/>
                    {/* <Link to='/signIn'>Sign In</Link> <p/>
                    <img src={InfoBar} alt="Logo"></img> <p/>
                    <Link to='/signUp'>Sign Up</Link> <p/>
                    <img src={InfoBar} alt="Logo"></img> <p/> */}
                    <LandingPageWrapper>
                        <Button>Create Account</Button> <p/>
                        <Button>Log In</Button> <p/> 
                    </LandingPageWrapper>
                </div>
            </nav>
        </LandingPage>
        
    );
}

export default Nav;