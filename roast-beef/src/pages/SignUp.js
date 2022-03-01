import {useState, useEffect, React} from 'react';
import { NavPadding, NavBar, LandingPage, NextButton, Text, LandingPageWrapper, HeaderText, TextBox } from '../pages/style';
import Logo from '../images/logo.png';
import { collection, getDocs } from "firebase/firestore";
import {createUserWithEmailAndPassword } from "firebase/auth";

import {db, auth} from "../firebase-config";

function SignUp() {
    const[newName, setNewName] = useState("");
    const[newEmail, setNewEmail] = useState("");
    const[newUser, setNewUser] = useState("");
    const[newPass, setNewPass] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        let res = await createUserWithEmailAndPassword(auth, newEmail, newPass)
        // only do the next part if no errors
        //res = await addDoc(usersCollectionRef, {name: newName, email: newEmail, user: newUser, pass: newPass});
        console.log(res);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data  = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getUsers();
    }, []);

    return (
        <LandingPage>
            <NavBar>
                <a href='/' className="NavLogo">
                    <marquee behavior="alternate" width="300">
                        <img src={Logo} alt="Logo" align="left" width="200" height="133"></img>
                    </marquee>
                </a>
            </NavBar>
            <NavPadding></NavPadding> <p />
            <LandingPageWrapper>
                <HeaderText>CREATE ACCOUNT</HeaderText>
                <Text>Enter Your Name: </Text>
                <TextBox type="text" placeholder="Name" onChange={(event) => {setNewName(event.target.value);}}/><p/>
                <Text>Enter Your Email: </Text>
                <TextBox type="text" placeholder="Email" onChange={(event) => {setNewEmail(event.target.value);}}/><p />
                <Text>Create Username: </Text>
                <TextBox type="text" placeholder="Username" onChange={(event) => {setNewUser(event.target.value);}}/><p />
                <Text>Create Password: </Text>
                <TextBox type="password" placeholder="Password" onChange={(event) => {setNewPass(event.target.value);}}/><p />
                <a href='/'>
                    <NextButton>Back</NextButton>
                </a>
                {/* <a href='/signIn'> */}
                    <NextButton onClick={createUser}>Next</NextButton>
                {/* </a> <p /> */}
            </LandingPageWrapper>
        </LandingPage>
    );
}
export default SignUp;