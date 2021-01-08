import React from "react";
import store from "../store/index";
import styled from "styled-components";

const CartDisplay = () => {
    const currentCart = store.getState();

    currentCart.cart.map((index) => {
        const title = index.productName;
        const price = index.productPrice;
        const quantity = index.quantity;
        return title, price, quantity;
    });

    return (
        <ItemWrap>
            <div>{}</div>
        </ItemWrap>
    );
};

const ItemWrap = styled.div`
    display: flex;
`;

export default CartDisplay;
