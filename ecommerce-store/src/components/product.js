import React from "react";
import styled from "styled-components";

const Product = ({ img, title, price, rating }) => {
    return (
        <ProductContainer>
            <ImgContainer>
                <ProductImage src={img} alt="Not found!" />
            </ImgContainer>
            <div>{title}</div>
            <div>{price}</div>
            <div>{rating}</div>
        </ProductContainer>
    );
};

/** Styles */
const ProductContainer = styled.div`
    width: 300xpx;
    height: 250px;
    margin: 45px;
    box-sizing: border-box;
    padding: 10px 20px 50px 20px;
    font-size: 20px;
`;
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 75%;
    object-fit: contain;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
    padding: 0px 30px;
`;

const ProductImage = styled.img`
    max-height: 90%;
    max-width: 100%;
    height: auto;
    width: auto;
`;

export default Product;
