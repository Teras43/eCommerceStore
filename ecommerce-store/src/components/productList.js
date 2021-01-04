import React from "react";
import Product from "./product";

const ProductList = ({ productData }) => {
    const HandleProductClicked = () => {};

    return (
        <div>
            {productData.map((product, index) => (
                <Product
                    key={index}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    onClick={HandleProductClicked}
                />
            ))}
        </div>
    );
};

export default ProductList;
