import React, { useCallback, useState } from "react";
import styled from "styled-components";

const InputComponent = ({ name, placeholder, password = false }) => {
    const [inputState, setInputState] = useState("");

    const hidePassword = useCallback(() => {
        const inputLength = inputState.length;
        let passwordString = "";
        for (let i = 0; i < inputLength; i++) {
            passwordString += "•";
        }
        return passwordString;
    }, [inputState]);

    return (
        <InputStyles
            name={name}
            placeholder={placeholder}
            value={password === false ? inputState : hidePassword()}
            onChange={(event) => {
                setInputState(event.target.value);
            }}
        />
    );
};

// Styles
const InputStyles = styled.input`
    height: 25px;
    width: 180px;
    margin-top: 10px;
    margin-left: 50px;
    border: 1px solid black;
    font-size: 18px;

    @media only screen and (min-width: 800px) {
        margin: auto;
        margin-right: 10px;
        margin-top: 20px;
    }
`;

export default InputComponent;
