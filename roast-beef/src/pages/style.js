import styled from "styled-components";

export const colors = {
  backgroundPink: "#F3DFE3",
  buttonBrown: "#69404C",
  white: "#FFFFFF",
  grey: "#DEDEDE",
  postPink: "#FCF1F1",
  votePink: "#F3DFE3",
  postBrown: "#dbabab",
  textBrown: "#52313b"
};
const LandingPage = styled.div`
    background: ${colors.backgroundPink};
`;
const LandingPageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  min-height: 100vh;
  padding: 20px 0vw 0 0vw;
`;
const NavBar = styled.div`
  background: ${colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  width: 99.5%;
`;

const NavPadding = styled.div`
  background: ${colors.white};
  padding-top: 155px;
`;

const LandingButton = styled.button`
  border-radius: 10px;
  border: 0px;
  background: ${colors.white};
  margin: 2 px;
  padding: 0.25em 1em;
  position: dynamic;
  width: 615px;
  height: 61px;
  left: 448px;
  top: 385px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Tahoma;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  color: #69404c;
`;

const Button = styled.button`
  border-radius: 10px;
  border: 0px;
  background: ${colors.white};
  margin: 0 1em;
  padding: 0.25em 1em;
  position: dynamic;
  width: 615px;
  height: 61px;
  left: 448px;
  top: 385px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Tahoma;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  color: #69404c;
`;


const Post = styled.button`
  border-radius: 10px;
  border: 0px;
  background: ${colors.postPink};
  margin: 0 1em 3em;
  padding: 0.25em 1em;
  position: dynamic;
  width: 1000px;
  left: 57px;
  top: 245px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PostContents = styled.button`
  border-radius: 15px;
  border: 0px;
  background: ${colors.white};
  margin: 0 1em;
  padding: 0.25em 1em;
  position: dynamic;
  width: 950px;
  left: 448px;
  top: 385px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
`;

const PostTextL = styled.p`
  border-radius: 20px;
  border: 50px;
  background: ${colors.buttonBrown};
  padding: 13px 16px 16px 16px;
  margin: 20px 90px 0px 5px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 20px;
  line-height: 25px;
  text-align: left;
  color: ${colors.white};
  float: left;
  display: block;
`;
const PostTextR = styled.p`
  border-radius: 20px;
  border: 50px;
  background: ${colors.postBrown};
  padding: 13px 16px 16px 16px;
  margin: 20px 5px 20px 90px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 20px;
  line-height: 25px;
  text-align: left;
  color: ${colors.textBrown};
  float: right;
  display: block;
`;

const PostHeaderText = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 20px;
  line-height: 10px;
  align-items: baseline;
  text-align: center;
  color: #69404c;
`;

const PostUsername = styled.p`
    font-family: Tahoma;
    font-style: normal;
    font-weight: 0;
    font-size: 25px;
    text-align: center;
    padding: 10px 0px 10px;
    margin: 25px 25px 25px 25px;
    color: #69404C;
    display: inline;
`;



const fightSymbolStyle = styled.p`
  padding: 0px 10px 10px 30px;
`;


const PostTitle = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 10px;
  align-items: center;
  text-align: left;
  padding: 0px 0px 0px;
  margin: 30px 5px 0px 20px;
  color: #69404c;
`;

const PostTags = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 10px;
  align-items: right;
  text-align: right;
  padding: 0px 0px 0px 0px;
  margin: 20px 25px 0px 0px;
  color: #69404c;
`;


const VoteCount = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: 30;
  text-transform: uppercase;
  font-size: 22px;
  line-height: 10px;
  align-items: center;
  text-align: center;
  padding: 0px 0px 0px;
  margin: 35px 10px 15px 10px;
  color: #69404c;
  display: inline;
`;

const VoteButton = styled.button`
  border-radius: 10px;
  border: 0px;
  background: ${colors.white};
  margin: 0 0 0 0;
  padding: 5px 0 0 0;
  position: dynamic;
  width: 60px;
  height: 40px;
  left: 448px;
  top: 385px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 0.05s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }

  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    background: ${colors.votePink};
  }

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Tahoma;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  color: #69404c;
`;


const TextBox = styled.input`
  //HAS AN ISSUE
  font-size: 18px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: white;
  border: 10px;
  border-radius: 10px;
  width: 615px;
  height: 61px;
  left: 448px;
  top: 385px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-color: ${colors.buttonBrown};
  ::placeholder {
    color: ${colors.backgroundPink};
    font-weight: 50;
    font-style: italic;
  }
`;

const BiggerTextBox = styled.textarea`
  font-size: 18px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: white;
  border: 10px;
  border-radius: 10px;
  width: 615px;
  height: 120px;
  left: 448px;
  top: 385px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-color: ${colors.buttonBrown};
  ::placeholder {
    color: ${colors.backgroundPink};
    font-weight: 50;
    font-style: italic;
  }
`;

const NextButton = styled.button`
  border-radius: 10px;
  border: 0px;
  background: #69404c;
  margin: 0 1em;
  padding: 0.25em 1em;
  position: dynamic;
  width: 250px;
  height: 60px;
  left: 598px;
  top: 804px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  font-family: Tahoma;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
`;

const NickyButton = styled.button`
  border-radius: 10px;
  border: 0px;
  background: #69404c;
  margin: 0 1em;
  padding: 0.25em 1em;
  position: dynamic;
  width: 220px;
  height: 50px;
  left: 598px;
  top: 804px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  font-family: Tahoma;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
`;

const CommentButton = styled.button`
  border-radius: 10px;
  border: 0px;
  background: #69404c;
  margin: 10px 0 20px 0;
  padding: 0.25em 1em;
  position: dynamic;
  width: 220px;
  height: 40px;
  left: 598px;
  top: 804px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  font-family: Tahoma;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
`;

const CommentButton2 = styled.button`
  border-radius: 10px;
  border: 0px;
  background: #fcf1f1;
  margin: 0 1em;
  padding: 0.25em 1em;
  position: dynamic;
  width: 220px;
  height: 50px;
  left: 598px;
  top: 804px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  font-family: Tahoma;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  text-align: center;
  color: #69404c;
  text-decoration: none;
`;

const CreateComment = styled.textarea`
  font-size: 18px;
  padding: 0.25em 1em;
  margin: 2em 1em 1em 1em;
  background: ${colors.white};
  border: 10px;
  border-radius: 10px;
  width: 1320px;
  height: 59px;
  left: 448px;
  top: 385px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: #69404c;
  align-items: center;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ::placeholder {
    color: ${colors.backgroundPink};
    font-weight: 50;
    font-style: italic;
  }
`;

const Comments = styled.button`
  border-radius: 10px;
  border: 0px;
  background: ${colors.postPink};
  margin: 0 1em;
  padding: 0.25em 1em;
  position: dynamic;
  width: 1360px;
  height: 100px;
  left: 448px;
  top: 385px;
  font-family: Tahoma;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #69404c;
`;

const Text = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 30px;
  line-height: 10px;
  align-items: center;
  text-align: center;
  color: #69404c;
`;

const HeaderText = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 58.59px;
  align-items: center;
  text-align: center;
  color: #69404c;
`;

const CommentTitle = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: 100;
  font-size: 35px;
  line-height: 10px;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const SearchBar = styled.input`
  font-size: 16px;
  padding: 0.5em 1em;
  margin: 35px 35px;
  background: #EFE9E9;
  float: left;
  border: 10px;
  border-radius: 10px;
  width: 400px;
  height: 30px;
  left: 448px;
  top: 385px;  
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-color: ${colors.buttonBrown}; 
  ::placeholder {
    color: rgba(105, 64, 76, .5);
    font-weight: 50;
    font-style: italic;
  }
  &:hover {
    cursor: pointer;
    color: ${colors.buttonBrown}
  }
`;
  
const ErrorText = styled.p`
  font-family: Tahoma;
  font-style: normal;
  font-weight: 50;
  font-size: 30px;
  line-height: 10px;
  align-items: center;
  text-align: center;
  color: #ff0000;
`;

const DDButton = styled.button`
    border: 10px;
    border-radius: 10px;
    background: ${colors.white};
    height: 40px;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      color: red;
    }
    font-family: Tahoma;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    align-items: center;
    text-align: center;
    color: #69404C;
`;

export {
  LandingPage,
  NavBar,
  NavPadding,
  Button,
  LandingButton,
  NextButton,
  LandingPageWrapper,
  Text,
  Post,
  PostContents,
  PostTextL,
  PostTextR,
  PostHeaderText,
  PostUsername,
  PostTitle,
  PostTags,
  HeaderText,
  DDButton,
  SearchBar,
  fightSymbolStyle,
  TextBox,
  BiggerTextBox,
  NickyButton,
  ErrorText,
  CommentButton,
  CommentButton2,
  Comments,
  CreateComment as CreateComments,
  CommentTitle,
  VoteButton,
  VoteCount,
};
