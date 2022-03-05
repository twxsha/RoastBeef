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
  CreateComments,
  Button,
  CommentButton,
  VoteButton,
  VoteCount
} from "./style";
import fightSymbol from "../images/fightSymbol.png";
import ArrowUnfilled from "../images/arrow-unfilled.png";
import ArrowFilled from "../images/arrow-filled.png";

function PostD({ username, taggedUser, postText, postTitle, postTags, postComments, postVote_Tagged, postVote_User }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [liked, setLiked] = useState(null);
  const [newTag, setNewTag] = useState("");

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
        <div id="postPadding">
          <CreateComments
            type="text"
            placeholder="Enter Roast"
            onChange={(event) => {
              setNewTag(event.target.value);
            }}
          ></CreateComments>
          <CommentButton>Roast</CommentButton>
        </div>

      </Post>
    </div>
  );
}

export default PostD;
