import React from "react";
import styled from "styled-components";
import store from "../store/index";

const TotalPrice = () => {
    const currentCart = store.getState();
    let totalPrice = 0;

    currentCart.cart.map((index) => {
        const productPrice = index.productPrice;
        const quantity = index.quantity;
        return (totalPrice += productPrice * quantity);
    });

    return <TotalDiv>Total: ${totalPrice}</TotalDiv>;
};

const TotalDiv = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    padding: 15px;
    font-weight: 600;
    font-size: 20px;
`;

export default TotalPrice;
