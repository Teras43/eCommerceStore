import React from "react";
import styled from "styled-components";

const ProductDetails = (props) => {
    if (!props) {
        localStorage.getItem("productData");
    }

    return (
        <ProductContainer>
            <ImgContainer>
                <ProductImage
                    src={props.location.productData.img}
                    alt="Not found!"
                />
            </ImgContainer>
            <BaseInfo>
                <div>{props.location.productData.title}</div>
                <div>Price: ${props.location.productData.price}</div>
                <div>Rating: {props.location.productData.rating}</div>
            </BaseInfo>
            <br />
            <DetailHeader>Product Details</DetailHeader>
            <DescriptionBlock>
                <div>{props.location.productData.description}</div>
            </DescriptionBlock>
            <PurchaseOptions>
                <CartButton>Add to Cart</CartButton>
                Quantity:{" "}
                <QuantityInput
                    placeholder="0"
                    id="QuantityInput"
                    type="number"
                    onwheel="this.blur()"
                />
            </PurchaseOptions>
        </ProductContainer>
    );
};

// Styles
const BaseInfo = styled.div`
    div {
        margin-bottom: 10px;
    }
    font-size: 18px;
    border-bottom: 1px solid black;
`;

const DetailHeader = styled.div`
    border-bottom: 1px solid black;
`;

const DescriptionBlock = styled.div`
    margin-top: 20px;
    line-height: 28px;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: calc(100vh - 105px);
    box-sizing: border-box;
    align-items: center;
    padding: 10px 20px 50px 20px;
    font-size: 20px;
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 75%;
    object-fit: contain;
    border-bottom: 1px solid black;
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0px 30px;
    padding-bottom: 25px;
`;

const ProductImage = styled.img`
    max-height: 90%;
    max-width: 100%;
    height: auto;
    width: auto;
`;

const PurchaseOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin-top: 30px;
`;

const CartButton = styled.button`
    height: 40px;
    width: 100px;
    font-size: 16px;
    margin-left: 60px;
    background-color: #049287;
    color: #e7e7e7;
    border-radius: 10px;
    box-shadow: 3px 3px;
`;

const QuantityInput = styled.input`
    width: 40px;
    margin-right: 60px;
    font-size: 16px;
    text-align: center;
`;

export default ProductDetails;
