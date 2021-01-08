import React from "react";
import store from "./../store/index";
import styled from "styled-components";
import CartDisplay from "../components/cartDisplay";
import { useHistory } from "react-router-dom";
import TotalPrice from "../components/totalPrice";
import DeleteButton from "../components/deleteCartItem";

const MyCart = () => {
    const currentCart = store.getState();
    const history = useHistory();

    return (
        <>
            <CartContainer>
                {currentCart.cart.map((index) => (
                    <>
                        <CartDisplay
                            key={index}
                            img={index.productImg}
                            title={index.productName}
                            price={index.productPrice}
                            quantity={index.quantity}
                        />
                        <DeleteButton title={index.productName} />
                    </>
                ))}
                <TotalPrice />
                <ButtonContainer>
                    <CheckOutBtn
                        onClick={() => {
                            history.push("/purchasePage");
                        }}
                    >
                        Check Out!
                    </CheckOutBtn>
                </ButtonContainer>
            </CartContainer>
        </>
    );
};

// Styles
const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 105px);
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
`;

const CheckOutBtn = styled.button`
    width: 110px;
    height: 40px;
    margin-top: 20px;
    background-color: #4863a0;
    color: white;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
`;

export default MyCart;
