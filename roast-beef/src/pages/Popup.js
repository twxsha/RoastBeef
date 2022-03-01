import React from 'react';

import './HomePage.css';
import  './Popup.css';
import {TextBox,BiggerTextBox,NickyButton} from '../pages/style';

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
                <br></br><br></br>
                    <div class="outer">
                       <div>
                            <NickyButton onClick={() => props.setTrigger(false)}> Cancel </NickyButton>   
                                   
                        </div>
                    </div>

                    <div class="outer2">
                        <NickyButton onClick={() => props.setTrigger(false)}> Post </NickyButton> 
                    </div>
                    
                    {props.children}
            </div>
        </div>
    ) : "";
}


export default Popup