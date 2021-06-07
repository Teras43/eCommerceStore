import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import store from "../store/index";
import QuantityInput from "../components/quantityInput";

const ProductDetails = (props) => {
    const [productCount, setProductCount] = useState(1);
    const history = useHistory();

    let altData;
    if (!props.location.productData) {
        altData = JSON.parse(localStorage.getItem("productData"));
    } else {
        localStorage.setItem(
            "productData",
            JSON.stringify(props.location.productData)
        );
    }

    return (
        <ProductContainer>
            <ImgContainer>
                <ProductImage
                    src={(props.location.productData || altData).img}
                    alt="Not found!"
                />
            </ImgContainer>
            <BaseInfo>
                <div>{(props.location.productData || altData).title}</div>
                <div>
                    Price: ${(props.location.productData || altData).price}
                </div>
                <div>
                    Rating: {(props.location.productData || altData).rating} / 5
                </div>
            </BaseInfo>
            <br />
            <DetailHeader>Product Details</DetailHeader>
            <DescriptionBlock>
                <div>{(props.location.productData || altData).description}</div>
            </DescriptionBlock>
            <PurchaseOptions>
                <CartButton
                    onClick={() => {
                        store.dispatch({
                            type: "ADD_TO_CART",
                            data: {
                                productImg: (
                                    props.location.productData || altData
                                ).img,
                                productName: (
                                    props.location.productData || altData
                                ).title,
                                productPrice: (
                                    props.location.productData || altData
                                ).price,
                                quantity: productCount,
                            },
                        });
                        history.push("/cartPage");
                    }}
                >
                    Add to Cart
                </CartButton>
                Quantity: <QuantityInput updater={setProductCount} />
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

    @media only screen and (min-width: 800px) {
        max-width: 800px;
    }
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

    @media only screen and (min-width: 800px) {
        max-width: 400px;
    }
`;

const CartButton = styled.button`
    height: 40px;
    width: 100px;
    font-size: 16px;
    margin-left: 60px;
    background-color: #4863a0;
    color: white;
    border-radius: 10px;
    outline: none;
`;

export default ProductDetails;
