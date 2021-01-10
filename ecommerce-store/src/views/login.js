import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import InputComponent from "../components/inputComponent";
import styled from "styled-components";
import store from "../store";

const Login = () => {
    const [errors, setErrors] = useState([]);
    const currentState = store.getState();

    const history = useHistory();

    const loginAsGuest = () => {
        history.push("/");
    };

    const validateAndSubmit = useCallback(
        (event) => {
            event.preventDefault();
            setErrors([]);
            const formErrors = [];
            const email = event.target.elements.emailInput.value;
            const password = event.target.elements.passwordInput.value;
            if (!email.match(/^[a-zA-Z0-9_]*@[a-zA-Z0-9_]*(\.com)$/)) {
                formErrors.push(
                    "Email must follow the pattern of 'example@example.com'"
                );
            }

            if (password.length < 4) {
                formErrors.push(
                    "Password needs to be at least 4 characters long."
                );
            }

            setErrors(formErrors);

            if (formErrors.length > 0) return;

            store.dispatch({
                type: "SET_CREDENTIALS",
                data: {
                    userName: email,
                    userPassword: password,
                },
            });

            history.replace("/");
            console.log(currentState.userInfo);
        },
        [history, currentState]
    );

    return (
        <LoginContainer>
            <LoginBox>
                <HeaderDiv>Please Login Or Continue As Guest</HeaderDiv>
                <form onSubmit={validateAndSubmit}>
                    <InputComponent name={"emailInput"} placeholder={"Email"} />
                    <InputComponent
                        name={"passwordInput"}
                        placeholder={"Password"}
                        password
                    />
                    {errors.map((error, index) => (
                        <ErrorDiv key={index}>{error}</ErrorDiv>
                    ))}
                    <ButtonDiv>
                        <ButtonStyles onClick={loginAsGuest}>
                            Guest
                        </ButtonStyles>
                        <ButtonStyles type="submit">Login</ButtonStyles>
                    </ButtonDiv>
                </form>
                <CreateAcc>Click here to create account.</CreateAcc>
            </LoginBox>
        </LoginContainer>
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

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px;
    padding: 30px;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 5px 8px 10px;
    background-color: #049287;
    margin-bottom: 250px;
`;

const ButtonDiv = styled.div`
    display: flex;
    max-width: 300px;
    width: 100%;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 15px;

    @media only screen and (min-width: 800px) {
        margin-left: 43px;
    }
`;

const ButtonStyles = styled.button`
    width: 100px;
    height: 25px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #4863a0;
    outline: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
`;

const HeaderDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
`;

const CreateAcc = styled.div`
    display: flex;
    margin-top: 60px;
    color: #2f436f;
    text-decoration: none;
    font-size: 18px;
    font-weight: 800;
    &:visited {
        text-decoration: none;
    }
`;

const ErrorDiv = styled.div`
    color: red;
    text-align: center;
    margin: 5px 0px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
`;

export default Login;
