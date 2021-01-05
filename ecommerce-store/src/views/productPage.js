import React, { useEffect, useState } from "react";
import ProductList from "../components/productList";
import SearchAndCategory from "../components/searchCategory";

const productAPI =
    "https://my-json-server.typicode.com/tdmichaelis/typicode/products";

const ProductPage = () => {
    const [dropDown, setDropDown] = useState({
        dropDownVal: 'allItems'
    })
    //function that calls listener
    setDropDown = () => {

    }


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
    let productDisplay = productData.filter(product => product.category == dropDown.dropDownVal || dropDown.dropDownVal == 'allItems');

    console.log(productData);
    console.log(dropDown);

    return (
        <>
            <SearchAndCategory productData={productData} dropDown={dropDown} />
            <ProductList productData={productDisplay} />
        </>
    );
};

export default ProductPage;
