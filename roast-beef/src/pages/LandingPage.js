import {useState, useEffect, React} from 'react';
import Logo from '../images/logo.png';
import {NavBar, LandingPage, LandingButton, LandingPageWrapper} from './style';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from "../firebase-config";

function Nav() {
    return(
        <nav class="Landing">    
            <LandingPage> 
                <LandingPageWrapper>
                    <a href='/' className="NavLogo">
                        <img src={Logo} alt="Logo" width="621" height="394"></img>
                    </a> <p/>
                    <a href="/signUp">
                        <LandingButton>Create Account</LandingButton>
                    </a> <p/> 
                    <a href="/signIn">
                        <LandingButton>Log In</LandingButton>
                    </a> <p/> 
                </LandingPageWrapper>
            </LandingPage>
        </nav>
    );
}

export default Nav;