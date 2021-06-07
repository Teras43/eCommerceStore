import React, { Fragment, useState } from "react";
import store from "./../store/index";
import styled from "styled-components";
import CartDisplay from "../components/cartDisplay";
import { useHistory } from "react-router-dom";
import TotalPrice from "../components/totalPrice";
import DeleteButton from "../components/deleteCartItem";

const MyCart = () => {
  const currentCart = store.getState();
  const history = useHistory();
  const [remountCount, setRemountCount] = useState(0);
  const refresh = () => setRemountCount(remountCount + 1);

  let cartUser = "";

  if (currentCart.userInfo.userName.length > 0) {
    cartUser = currentCart.userInfo.userName;
  } else {
    cartUser = "Guest";
  }

  return (
    <>
      <CartContainer>
        <CurrentUser>{cartUser}</CurrentUser>
        {currentCart.cart.map((index) => (
          <Fragment key={index}>
            <CartDisplay
              img={index.productImg}
              title={index.productName}
              price={index.productPrice}
              quantity={index.quantity}
            />
            <DeleteButton
              productName={index.productName}
              onComplete={refresh}
            />
          </Fragment>
        ))}
        <TotalPrice />
        <ButtonContainer>
          {currentCart.cart.length > 0 && (
            <CheckOutBtn
              className="btn"
              onClick={() => {
                store.dispatch({
                  type: "EMPTY_CART",
                });
                history.replace("/eCommerceStore/purchasePage");
              }}
            >
              Check Out!
            </CheckOutBtn>
          )}
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

  @media only screen and (min-width: 800px) {
    width: 100%;
  }
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

  .btn.disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

const CurrentUser = styled.div`
  display: flex;
  font-size: 30px;
  margin: 12px;
  font-weight: 700;
  color: #4863a0;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;

export default MyCart;
