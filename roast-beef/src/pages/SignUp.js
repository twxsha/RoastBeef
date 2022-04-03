import React, { useState, useEffect } from "react";
import {
  NavPadding,
  NavBar,
  LandingPage,
  NextButton,
  Text,
  LandingPageWrapper,
  HeaderText,
  TextBox,
  ErrorText,
} from "../pages/style";
import Logo from "../images/logo.png";
import { collection, getDocs, addDoc,query,where } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebase-config";
import { useHistory } from "react-router-dom";

const usersCollectionRef = collection(db, "users");

function SignUp() {
  const history = useHistory();
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [users, setUsers] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const createUser = async () => {
    try {
      const h5 = query(usersCollectionRef, where("user", "==", "@" + newUser));
      console.log(newUser);
      const querySnapshot5 = await getDocs(h5);

      if(newName === "")
      {
        setEmailError("Enter a name")
        setPassError("")
      }
      else if(newUser === "")
      {
        setEmailError("Enter a username")
        setPassError("")
      }
      else if(querySnapshot5.empty){
        let res = await createUserWithEmailAndPassword(auth, newEmail, newPass);
        res = await addDoc(usersCollectionRef, {
          name: newName,
          email: newEmail,
          user: "@" + newUser,
          pass: newPass,
        });
        history.push("/signIn");
      }
      else {
        setEmailError("Username already exists");
        setPassError("")
      }
    } catch (error) {
      setEmailError("");
      setPassError("");
      if(newEmail === "")
      {
        setEmailError("Enter an email")
      }
      if(newPass === "")
      {
        setPassError("Enter a password")
      }
      switch (error.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError("Email is already in use or is invalid");
          break;
        case "auth/weak-password":
          setPassError("Password must be at least 6 characters");
          break;
      }
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

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
        <HeaderText>CREATE ACCOUNT</HeaderText>
        <Text>Enter Your Name: </Text>
        <TextBox
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <p />
        <Text>Enter Your Email: </Text>
        <TextBox
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        />
        <p />
        <Text>Create Username: </Text>
        <TextBox
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setNewUser(event.target.value);
          }}
        />
        <p />
        <Text>Create Password: </Text>
        <TextBox
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setNewPass(event.target.value);
          }}
        />
        <p />
        <ErrorText> {emailError} </ErrorText> <p />
        <ErrorText> {passError} </ErrorText> <p />
        <a href="/">
          <NextButton>Back</NextButton>
        </a>
        <NextButton onClick={createUser}>Next</NextButton> <p />
      </LandingPageWrapper>
    </LandingPage>
  );
}
export {usersCollectionRef};
export default SignUp;

