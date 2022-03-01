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
    const [newVote_Tagged, setVote_Tagged] = useState("")
    const [newVote_User, setVote_User] = useState("")

    const postsCollectionRef = collection(db, "posts");

    const createPost = async () =>{
        await addDoc(postsCollectionRef, {Title: newTitle, 
            Tags: newTag, Text: newContent, Vote_Tagged: 0, Vote_User: 0})
            props.setTrigger(false)
    }

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
                        <NickyButton onClick={createPost}> Post </NickyButton> 
                    </div>
                    
                    {props.children}
            </div>
        </div>
    ) : "";
}


export default Popup