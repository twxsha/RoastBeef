import { useState, React } from "react";
import {
  Post,
  PostContents,
  PostTextL,
  PostTextR,
  PostHeaderText,
  PostUsername,
  PostTitle,
  PostTags,
  CommentButton,
  Button,
  VoteButton,
  VoteCount
} from "./style";
import Comments from "./Comments";
import fightSymbol from "../images/fightSymbol.png";
import ArrowUnfilled from "../images/arrow-unfilled.png";
import ArrowFilled from "../images/arrow-filled.png";

function PostD({ username, taggedUser, postText, postTitle, postTags, postComments, postVote_Tagged, postVote_User }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [liked, setLiked] = useState(null);
  return (
    <div className="postD">
      <Post>
        {/* PostHeader -> @usernames + vote counters + upvote buttons that increase the vote count + title + tags*/}
        <PostHeaderText>
          <PostTitle>{postTitle}</PostTitle>
          <VoteCount>{postVote_User}</VoteCount>
          <VoteButton
            onClick={() => setLiked(!liked)}
          >
            <img
              src={ArrowFilled}
              alt="ArrowFilled"
              width="20"
              height="21"
            ></img>
          </VoteButton>
          <PostUsername>{"@" + username}</PostUsername>
          <fightSymbolStyle>
            <img
              src={fightSymbol}
              alt="fightSymbol"
              width="50"
              height="50"
            ></img>
          </fightSymbolStyle>
          <PostUsername>{"@" + taggedUser}</PostUsername>
          <VoteButton>
            <img
              src={ArrowUnfilled}
              alt="ArrowUnfilled"
              width="20"
              height="21"
            ></img>
          </VoteButton>
          <VoteCount>{postVote_Tagged}</VoteCount>
          <PostTags>{" " + postTags}</PostTags>
        </PostHeaderText>

        {/* post contents: text*/}
        <PostContents>
          <PostTextL>{postComments[0]}</PostTextL>
          <PostTextR>{postComments[1]}</PostTextR>
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
