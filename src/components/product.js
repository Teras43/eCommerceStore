import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Product = ({ img, title, price, rating, description }) => {
  const productData = {
    img,
    title,
    price,
    rating,
    description,
  };

  return (
    <NavLink
      to={{
        pathname: "/eCommerceStore/productDetailsPage/" + title,
        productData,
      }}
      style={{ textDecoration: "none" }}
    >
      <ProductContainer>
        <ImgContainer>
          <ProductImage src={img} alt="Not found!" />
        </ImgContainer>
        <TextContainerMain>
          <div>{title}</div>
          <div>${price}</div>
          <div>Rating: {rating} / 5</div>
        </TextContainerMain>
      </ProductContainer>
    </NavLink>
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

const TextContainerMain = styled.div`
  color: black;
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
