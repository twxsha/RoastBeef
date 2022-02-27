import React from 'react';
import './nicky.css';
import  './Popup.css';
import {NavBar, LandingPage, LandingPageWrapper,Post,PostContents,Text,NextButton} from '../pages/style';

function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Text>Post</Text>
                    <div class="outer">
                        <div>
                            <NextButton> Post </NextButton>
                            <NextButton> Close </NextButton>               
                        </div>
                    </div>
                    {props.children}
            </div>
        </div>
    ) : "";
}


export default Popup