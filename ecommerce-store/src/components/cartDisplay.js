import React from "react";
import styled from "styled-components";

const CartDisplay = ({ img, title, price, quantity }) => {
    return (
        <div>
            <ItemWrap>
                <ImgWrap>
                    <ImgElement src={img} alt="Not found!" />
                </ImgWrap>
                <BodyWrap>
                    <TitleElement>{title}</TitleElement>
                    <PriceElement>${price * quantity}</PriceElement>
                    <QuantityElement>Quantity: {quantity}</QuantityElement>
                </BodyWrap>
            </ItemWrap>
        </div>
    );
};

const ItemWrap = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const ImgWrap = styled.div`
    display: flex;
    max-height: 100px;
    height: auto;
    width: 50%;
    object-fit: contain;
    margin-left: 15px;
    justify-content: center;
    align-items: center;
`;

const ImgElement = styled.img`
    max-height: 90%;
    max-width: 90%;
    height: auto;
    width: auto;
`;

const BodyWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;
    height: auto;
    align-items: left;
    margin-right: 10px;
    border-left: 1px solid black;
    padding-left: 12px;
`;

const TitleElement = styled.div`
    width: 100%;
    padding-bottom: 8px;
    border-bottom: 1px solid black;
`;

const PriceElement = styled.div`
    margin-top: 10px;
`;

const QuantityElement = styled.div`
    margin-top: 5px;
`;

export default CartDisplay;
