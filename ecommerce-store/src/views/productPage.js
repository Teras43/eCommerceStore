import React, { useEffect, useState } from "react";
import ProductList from "../components/productList";
import SearchAndCategory from "../components/searchCategory";
import Spinner from "../components/Spinner";

const productAPI =
    "https://my-json-server.typicode.com/tdmichaelis/typicode/products";

const ProductPage = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        const response = await fetch(productAPI);
        const jsonData = await response.json();
        setProductData(jsonData);
    };
    console.log(productData);

    localStorage.setItem("allProducts", JSON.stringify(productData));

    return productData.length === 0 ? (
        <Spinner />
    ) : (
        <>
            <SearchAndCategory productData={productData} />
            <ProductList productData={productData} />
        </>
    );
};

export default ProductPage;
