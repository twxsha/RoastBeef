import React from 'react';
import {Post, PostContents, PostText, PostHeaderText, PostUsername, fightSymbolStyle} from './style';
import fightSymbol from '../images/fightSymbol.png';

function PostD({username1, username2, postText}) {
  return (
    <div className ="postD">
        <Post>
        {/* PostHeader -> @usernames + vote counters + upvote buttons that increase the vote count*/}
            <PostHeaderText><PostUsername>{username1}</PostUsername>
                <fightSymbolStyle><img src={fightSymbol} alt="fightSymbol" width="30" height="30"></img></fightSymbolStyle>
                    <PostUsername>{username2}</PostUsername></PostHeaderText>

        {/* title + tags */}

        {/* text */}
            <PostContents>
                <PostText>{postText}</PostText>
            </PostContents>
        </Post>

        {/* read more buttons */}
    
    </div>
  )
}

export default PostD