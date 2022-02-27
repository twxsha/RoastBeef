import React from 'react';
import './nicky.css';
import  './Popup.css';
import {NavBar, LandingPage, LandingPageWrapper,Post,PostContents,Text,TextBox,BiggerTextBox,NextButton} from '../pages/style';

function Popup(props){
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <br></br>
                <TextBox type="text" placeholder="Enter title here" />
                <br></br><br></br>
                <TextBox type="text" placeholder="Tag" />
                <br></br><br></br>
                <BiggerTextBox type="text" placeholder="Your text here" ></BiggerTextBox>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <div class="outer">
                       <div>
                            <NextButton> Cancel </NextButton>   
                                   
                        </div>
                    </div>

                    <div class="outer2">
                        <NextButton> Post </NextButton> 
                    </div>
                    
                    {props.children}
            </div>
        </div>
    ) : "";
}


export default Popup