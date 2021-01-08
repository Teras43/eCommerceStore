import React from "react";
// import store from "./../store/index";
import styled from "styled-components";
import CartDisplay from "../components/cartDisplay";

const MyCart = () => {
    return (
        <CartContainer>
            <CartDisplay />
        </CartContainer>
    );
};

// Styles
const CartContainer = styled.div`
    display: flex;
    min-height: calc(100vh - 105px);
`;

export default MyCart;
