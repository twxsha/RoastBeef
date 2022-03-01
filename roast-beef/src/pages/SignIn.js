import { useState, React } from "react";
import {
  NavBar,
  LandingPage,
  NextButton,
  Text,
  LandingPageWrapper,
  HeaderText,
  TextBox,
} from "../pages/style";
import {signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../images/logo.png";
import {auth} from "../firebase-config";

function SignIn() {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function signInHandler() {
    console.log("signing in");
    signInWithEmailAndPassword(auth, newEmail, newPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <LandingPage>
      <NavBar>
        <a href="/" className="NavLogo">
          <marquee behavior="alternate" width="300">
            <img
              src={Logo}
              alt="Logo"
              align="left"
              width="200"
              height="133"
            ></img>
          </marquee>
        </a>
      </NavBar> <p />
      <LandingPageWrapper>
        <HeaderText>LOG IN</HeaderText>
        <Text>Enter Your Username: </Text>
        <TextBox
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        />
        <p />
        <Text>Enter Your Password: </Text>
        <TextBox
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setNewPassword(event.target.value);
          }}
        />
        <p />
        <a href="/">
          <NextButton>Back</NextButton>
        </a>
        <NextButton onClick={signInHandler}>Next</NextButton>
        <p />
      </LandingPageWrapper>
    </LandingPage>
  );
}
export default SignIn;
