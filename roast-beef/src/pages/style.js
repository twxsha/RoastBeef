import styled from "styled-components";

export const colors = {
    backgroundPink: "#F3DFE3",
    buttonBrown: "#69404C",
    white: "#FFFFFF",
    postPink: "#FCF1F1",
}
const LandingPage = styled.div`
    background: ${colors.backgroundPink};
    overflow: scroll;
`;

const LandingPageWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  min-height: 100vh;
  padding: 0px 100vw 0 0vw;
`;

const NavBar = styled.div`
    background: ${colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    color: #69404C;
`;

const Post = styled.button`
    border-radius: 10px;
    border: 0px;
    background: ${colors.postPink};
    margin: 0 1em;
    padding: 0.25em 1em;
    position: dynamic;
    width: 1000px;
    height: 400px;
    left: 57px;
    top: 245px;

    transition: 0.2s;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Reply = styled.button`
    border-radius: 10px;
    border: 0px;
    background: ${colors.white};
    margin: 0 1em;
    padding: 0.25em 1em;
    position: dynamic;
    width: 1000px;
    height: 300px;
    left: 100px;
    top: 245px;

    transition: 0.2s;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
`;

const PostContents = styled.button`
    border-radius: 10px;
    border: 0px;
    background: ${colors.white};
    margin: 0 1em;
    padding: 0.25em 1em;
    position: dynamic;
    width: 750px;
    height: 250px;
    left: 448px;
    top: 385px;

    transition: 0.2s;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
    
`;

const TextBox = styled.input`
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
  color: ${colors.beefBrown};  
  ::placeholder {
    color: palevioletred;
    font-weight: 50;
  }
`;

const NextButton = styled.button`
    border-radius: 10px;
    border: 0px;
    background: #69404C;
    margin: 0 1em;
    padding: 0.25em 1em;
    position: dynamic;
    width: 250px;
    height: 60px;
    left: 598px;
    top: 804px;

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
    color: #FFFFFF;
    text-decoration: none;
`;

const Text = styled.p`
    font-family: Tahoma;
    font-style: normal;
    font-weight: 50;
    font-size: 30px;
    line-height: 10px;
    align-items: center;
    text-align: center;
    color: #69404C;
`;

const HeaderText = styled.p`
    font-family: Tahoma;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    line-height: 58.59px;
    align-items: center;
    text-align: center;
    color: #69404C;
`;

export {
    LandingPage,
    NavBar,
    Button,
    NextButton,
    LandingPageWrapper,
    Text,
    Post,
    PostContents,
    HeaderText,
    TextBox,
    Reply,
 }