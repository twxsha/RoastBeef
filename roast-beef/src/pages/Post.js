import { useState, React } from "react";
import {
  Post,
  PostContents,
  PostText,
  PostHeaderText,
  PostUsername,
  PostTitle,
  PostTags,
  CommentButton,
  Button,
  VoteButton
} from "./style";
import Comments from "./Comments";
import fightSymbol from "../images/fightSymbol.png";


function PostD({ username, taggedUser, postText, postTitle, postTags, postComments, postVote_Tagged, postVote_User }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="postD">
      <Post>
        {/* PostHeader -> @usernames + vote counters + upvote buttons that increase the vote count + title + tags*/}
        <PostHeaderText>
          <PostTags>{" " + postTags}</PostTags>
          <VoteButton>{postVote_User}</VoteButton>
          <PostUsername>{"@" + username}</PostUsername>
          <fightSymbolStyle>
            <img
              src={fightSymbol}
              alt="fightSymbol"
              width="30"
              height="30"
            ></img>
          </fightSymbolStyle>
          <PostUsername>{"@" + taggedUser}</PostUsername>
          <VoteButton>{postVote_User}</VoteButton>
          <PostTitle>{postTitle}</PostTitle>
        </PostHeaderText>

        {/* post contents: text*/}
        <PostContents>
          <PostText>{postText}</PostText>
        </PostContents>{" "}
        <p />
        <Comments trigger={buttonPopup} setTrigger={setButtonPopup}></Comments>
        <CommentButton
          style={{ justifyContent: "right" }}
          onClick={() => setButtonPopup(true)}
        >
          {" "}
          Comments{" "}
        </CommentButton>
      </Post>
    </div>
  );
}

export default PostD;
