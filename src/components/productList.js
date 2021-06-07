import React from "react";
import Product from "./product";
import styled from "styled-components";

const ProductList = ({ productData }) => {
    return (
        <ProductListContainer>
            {productData.map((product, index) => (
                <Product
                    key={index}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    description={product.description}
                />
            ))}
        </ProductListContainer>
    );
};

const ProductListContainer = styled.div`
    min-height: calc(100vh - 105px);
`;

export default ProductList;
