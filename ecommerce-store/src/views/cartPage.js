import React from "react";
import styled from "styled-components";

const MyCart = () => {
    return (
        <CartContainer>
            <h1>Placeholder Test</h1>
        </CartContainer>
    );
};

// Styles
const CartContainer = styled.div`
    display: flex;
    min-height: calc(100vh - 105px);
`;

export default MyCart;
