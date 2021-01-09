import React, { useState } from "react";

const InputComponent = ({ name, placeholder }) => {
    const [inputState, setInputState] = useState("");

    return (
        <input
            name={name}
            placeholder={placeholder}
            value={inputState}
            onChange={(event) => {
                setInputState(event.target.value);
            }}
        />
    );
};

export default InputComponent;
