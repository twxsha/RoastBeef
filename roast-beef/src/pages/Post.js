import React, { useState, useEffect } from "react";
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
  CommentButton,
  VoteButton,
  VoteCount,
} from "./style";
import fightSymbol from "../images/fightSymbol.png";
import ArrowUnfilled from "../images/arrow-unfilled.png";
import ArrowFilled from "../images/arrow-filled.png";
import { cookies } from "./SignIn";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config.js";
import { __RouterContext } from "react-router";

const DisplayCommenting = (props) => {
  const {
    username,
    postuser,
    taggeduser,
    postcomments,
    setNewTag,
    setComments,
    newTag,
    updateComments,
  } = props;
  let turn = postcomments.length;
  if (turn % 2 === 0) {
    if (username === postuser) {
      return (
        <div id="postPadding">
          <CreateComments
            type="text"
            placeholder="Enter Roast"
            onChange={(event) => {
              setNewTag(event.target.value);
            }}
          ></CreateComments>
          <CommentButton
            onClick={(event) => {
              let c = postcomments;
              c.push(newTag);
              setComments(c);
              updateComments();
            }}
          >
            Roast
          </CommentButton>
        </div>
      );
    } else {
      return <p />;
    }
  } else {
    if (username === taggeduser) {
      return (
        <div id="postPadding">
          <CreateComments
            type="text"
            placeholder="Enter Roast"
            onChange={(event) => {
              setNewTag(event.target.value);
            }}
          ></CreateComments>
          <CommentButton
            onClick={(event) => {
              let c = postcomments;
              c.push(newTag);
              setComments(c);
              updateComments();
            }}
          >
            Roast
          </CommentButton>
        </div>
      );
    } else {
      return <p />;
    }
  }
};

const LikeButtonImg = (props) => {
  if (props.liked) {
    return (
      <img src={ArrowFilled} alt="ArrowFilled" width="20" height="21"></img>
    );
  } else {
    return (
      <img src={ArrowUnfilled} alt="ArrowUnfilled" width="20" height="21"></img>
    );
  }
};

function PostD({
  username,
  taggedUser,
  postTitle,
  postTags,
  postComments,
  postVote_Tagged,
  postVote_User,
}) {
  const [liked, setLiked] = useState(null);
  const [newTag, setNewTag] = useState("");
  const [comments, setComments] = useState(postComments);
  const postCollectionRef = collection(db, "posts");
  const [userVotes, setUserVotes] = useState(postVote_User);
  const [taggedVotes, setTaggedVotes] = useState(postVote_Tagged);

  async function pushLikes() {
    let docID;
    setLiked(!liked);
    const h = query(postCollectionRef, where("Title", "==", postTitle));
    const querySnapshot2 = await getDocs(h);
    querySnapshot2.forEach((doc) => {
      docID = doc.id;
    });

    const docIDRef = doc(db, "posts", docID);

    await updateDoc(docIDRef, {
      Vote_Tagged: postVote_Tagged,
      Vote_User: postVote_User,
    });
  }
  var votes = postVote_User;
  var tvotes = postVote_Tagged;

  async function updateComments() {
    console.log("shr");
    let docID;
    setLiked(!liked);
    const h = query(postCollectionRef, where("Title", "==", postTitle));
    const querySnapshot2 = await getDocs(h);
    querySnapshot2.forEach((doc) => {
      docID = doc.id;
    });
    const postRef = doc(db, "posts", docID);
    await updateDoc(postRef, {
      Comments: postComments,
      createdAt: Date.now(),
    });
  }

  useEffect(() => {
    setUserVotes(postVote_User);
    setTaggedVotes(postVote_Tagged);
  },[postVote_User, postVote_Tagged]);

  return (
    <div className="postD">
      <Post>
        {/* PostHeader -> @usernames + vote counters + upvote buttons that increase the vote count + title + tags*/}
        <PostHeaderText>
          <PostTitle>{postTitle}</PostTitle>
          <VoteCount>{userVotes.length}</VoteCount>
          <VoteButton
            onClick={(event) => {
              postVote_User = postVote_User.filter(function (value) {
                return value !== cookies.get("user");
              });
              postVote_User.push(cookies.get("user"));

              postVote_Tagged = postVote_Tagged.filter(function (value) {
                return value !== cookies.get("user");
              });
              setUserVotes(postVote_User);
              setTaggedVotes(postVote_Tagged);
              pushLikes(postVote_User, postVote_Tagged);
            }}
          >
            <LikeButtonImg
              liked={Array.from(userVotes).includes(cookies.get("user"))}
            ></LikeButtonImg>
          </VoteButton>
          <PostUsername>{username}</PostUsername>
          <fightSymbolStyle>
            <img
              src={fightSymbol}
              alt="fightSymbol"
              width="50"
              height="50"
            ></img>
          </fightSymbolStyle>
          <PostUsername>{taggedUser}</PostUsername>
          <VoteButton
            onClick={(event) => {
              postVote_User = postVote_User.filter(function (value) {
                return value !== cookies.get("user");
              });
              postVote_Tagged = postVote_Tagged.filter(function (value) {
                return value !== cookies.get("user");
              });
              postVote_Tagged.push(cookies.get("user"));
              setUserVotes(postVote_User);
              setTaggedVotes(postVote_Tagged);
              pushLikes(postVote_User, postVote_Tagged);
            }}
          >
            <LikeButtonImg
              liked={Array.from(taggedVotes).includes(cookies.get("user"))}
            ></LikeButtonImg>
          </VoteButton>
          <VoteCount>{taggedVotes.length}</VoteCount>
          <PostTags>{" " + postTags}</PostTags>
        </PostHeaderText>
        {/* post contents: text*/}
        <PostContents>
          {postComments.map((post, index) => {
            if (index % 2 === 0) {
              return <PostTextL>{postComments[index]}</PostTextL>;
            } else {
              return <PostTextR>{postComments[index]}</PostTextR>;
            }
          })}
        </PostContents>{" "}
        <DisplayCommenting
          username={cookies.get("user")}
          postuser={username}
          taggeduser={taggedUser}
          postcomments={postComments}
          newTag={newTag}
          setNewTag={setNewTag}
          setComments={setComments}
          updateComments={updateComments}
        ></DisplayCommenting>
      </Post>
    </div>
  );
}

export default PostD;
