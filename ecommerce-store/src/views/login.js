import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
// import NavBar from './navbar.js' brandons navbar. Work it out when he submits to master
//import cart and have login proceed when you head to checkout

const Login = () => {
    const [userInfo = { authenticated: false }, setUserInfo] = useState(null);

    const HandleUserFormChange = (event) => {
        const { email, password } = event.target;
        setUserInfo(() => {});
    };

    const validateLogin = (event) => {
        let errors = {};

        if (userInfo.email && userInfo.password === event.target.value) {
            setUserInfo((prevData) => ({
                ...prevData,
                authenticated: true,
            }));
            // Set redirect to last page they were on here.
        } else {
            errors.invalidLogin = "Invalid Username or Password.";
        }
    };

    const loginAsGuest = () => {
        <Route to="/productPage" />;
    };

    return (
        <>
            <LoginContainer>
                <NotifyDiv>Please Login Or Continue As Guest</NotifyDiv>
                <div id="errorDiv"></div>
                <EmailInput
                    placeholder="Email"
                    onChange={HandleUserFormChange}
                />
                <PasswordInput
                    placeholder="Password"
                    onChange={HandleUserFormChange}
                />
                <ButtonDiv>
                    <ButtonStyles onClick={validateLogin}>Login</ButtonStyles>
                    <ButtonStyles onClick={loginAsGuest}>Guest</ButtonStyles>
                </ButtonDiv>
            </LoginContainer>
        </>
    );
};

//styles
const LoginContainer = styled.div`
    display: flex;
    min-height: calc(100vh - 105px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const EmailInput = styled.input`
    height: 10px;
    width: 100px;
`;

const PasswordInput = styled.input`
    height: 10px;
    width: 100px;
`;

const ButtonDiv = styled.div`
    display: flex;
    max-width: 250px;
    width: 100%;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 10px;
`;
const ButtonStyles = styled.button`
    /* margin: 10px; */
`;
const NotifyDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    color: blue;
`;

export default Login;
