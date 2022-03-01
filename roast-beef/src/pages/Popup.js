import React from 'react';
import {useState} from 'react';
import './HomePage.css';
import  './Popup.css';
import {TextBox,Text,BiggerTextBox,NickyButton} from '../pages/style';
import {db} from '../firebase-config';
import {collection, addDoc} from "firebase/firestore";

function Popup(props){

    const [newTitle, setNewTitle] = useState("")
    const [newTag, setNewTag] = useState("")
    const [newContent, setNewContent] = useState("")
    const postsCollectionRef = collection(db, "posts");

   

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <br></br>
                
                <Text>Create Post</Text>
                
                <TextBox type="text" placeholder="Enter title here" 
                onChange={(event) => {setNewTitle(event.target.value)}}/>

                <br></br><br></br>

                <TextBox type="text" placeholder="Tag" 
                onChange={(event) => {setNewTag(event.target.value)}}/>

                <br></br><br></br>
                
                <BiggerTextBox type="text" placeholder="Your text here"
                onChange={(event) => {setNewContent(event.target.value)}} ></BiggerTextBox>

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