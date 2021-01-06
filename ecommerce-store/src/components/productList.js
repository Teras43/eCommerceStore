import React from "react";
import styled from "styled-components";
import Product from "./product";

const ProductList = ({ productData }) => {
    return (
        <div>
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
        </div>
    );
};

export default ProductList;
