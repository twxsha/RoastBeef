import { useState, React } from "react";
import {
  NavBar,
  NavPadding,
  LandingPage,
  NextButton,
  Text,
  LandingPageWrapper,
  HeaderText,
  TextBox,
  ErrorText,
} from "../pages/style";
import { signInWithEmailAndPassword } from "firebase/auth";
import Logo from "../images/logo.png";
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  function signInHandler() {
    console.log("signing in");
    signInWithEmailAndPassword(auth, newEmail, newPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/home");
        // ...
      })
      .catch((error) => {
        setEmailError("");
        setPassError("");
        switch (error.code) {
          case "auth/user-not-found":
            setEmailError("No account associated with this email");
            break;
          case "auth/wrong-password":
            setPassError("Incorrect password");
            break;
        }
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
      </NavBar>
      <NavPadding></NavPadding> <p />
      <LandingPageWrapper>
        <HeaderText>LOG IN</HeaderText>
        <Text>Enter Your Email: </Text>
        <TextBox
          type="text"
          placeholder="Email"
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
        <ErrorText> {emailError} </ErrorText> <p />
        <ErrorText> {passError} </ErrorText> <p />
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
