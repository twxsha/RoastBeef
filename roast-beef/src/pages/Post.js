import { useState, React } from "react";
import {
  Post,
  PostContents,
  PostText,
  PostHeaderText,
  PostUsername,
  CommentButton,
} from "./style";
import Comments from "./Comments";
import fightSymbol from "../images/fightSymbol.png";

function PostD({ username, taggedUser, postText, postTitle }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="postD">
      <Post>
        {/* PostHeader -> @usernames + vote counters + upvote buttons that increase the vote count*/}
        <PostHeaderText>
          <PostUsername>{username}</PostUsername>
          <fightSymbolStyle>
            <img
              src={fightSymbol}
              alt="fightSymbol"
              width="30"
              height="30"
            ></img>
          </fightSymbolStyle>
          <PostUsername>{taggedUser}</PostUsername>
        </PostHeaderText>
        {/* title + tags */}
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
