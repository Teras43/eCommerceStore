import React, { useEffect, useState } from "react";
import styled from "styled-components";

const QuantityInput = ({ updater, initialValue = 1 }) => {
    const [quantityInputState, setQuantityInputState] = useState(initialValue);

    useEffect(() => {
        console.log(quantityInputState);
        updater(quantityInputState);
    }, [updater, quantityInputState]);

    return (
        <CustomInput
            type="tel"
            value={quantityInputState}
            onChange={(e) => setQuantityInputState(Number(e.target.value))}
        />
    );
};

const CustomInput = styled.input`
    width: 40px;
    margin-right: 60px;
    font-size: 16px;
    text-align: center;
`;

export default QuantityInput;
