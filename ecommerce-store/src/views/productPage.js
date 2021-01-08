import React, { useEffect, useState } from "react";
import ProductList from "../components/productList";
import SearchAndCategory from "../components/searchCategory";
import Spinner from "../components/Spinner";

const productAPI =
    "https://my-json-server.typicode.com/tdmichaelis/typicode/products";

const ProductPage = () => {


    const [dropDown, setDropDown] = useState({
        dropDownVal: 'allItems'
    })


   const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        const response = await fetch(productAPI);
        const jsonData = await response.json();
        setProductData(jsonData);
    };
    console.log(dropDown.dropDownVal);
    //have the functionality in an event listener to change product list when changed
    let productDisplay = productData.filter(product => product.category === dropDown.dropDownVal || dropDown.dropDownVal === 'allItems');

    console.log(productData);
    console.log(dropDown);

    localStorage.setItem("allProducts", JSON.stringify(productData));

    return productData.length === 0 ? (
        <Spinner />
    ) : (
        <>
            <SearchAndCategory productData={productData} setDropDown={setDropDown}  />
            <ProductList productData={productDisplay} />
        </>
    );
};

export default ProductPage;
