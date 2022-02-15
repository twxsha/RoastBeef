import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png'

function Nav() {
    return(
        <nav class="Navigation">
            <div class="navbar-nav ml-auto">
                <Link to='/' className="NavLogo">
                    <img src={Logo} alt="Logo"></img>
                </Link> <p/>
                <Link to='/signIn'>Sign In</Link> <p/>
                <Link to='/signUp'>Sign Up</Link>
            </div>
        </nav>
    );
}

export default Nav;