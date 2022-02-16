import styled from "styled-components";

export const colors = {
    backgroundPink: "#F3DFE3",
    buttonBrown: "#69404C",
    white: "#FFFFFF",
    postPink: "#FCF1F1",
}
const LandingPage = styled.div`
    background: ${colors.backgroundPink};
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

const NextButton = styled.button`
    border-radius: 10px;
    border: 0px;
    background: #69404C;
    margin: 0 1em;
    padding: 0.25em 1em;
    position: dynamic;
    width: 316px;
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
    HeaderText,
 }