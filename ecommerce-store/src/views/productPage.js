import React, { useEffect, useState } from "react";
import ProductList from "../components/productList";
import SearchAndCategory from "../components/searchCategory";
import Spinner from "../components/Spinner";

const productAPI =
    "https://my-json-server.typicode.com/tdmichaelis/typicode/products";

const ProductPage = () => {
    const [searchIt, setSearchIt] = useState({
        searchItVal: "allItems",
    });

    const [productData, setProductData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState();

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        const response = await fetch(productAPI);
        const jsonData = await response.json();
        setProductData(jsonData);
    };

    let productDisplay = productData.filter(
        (product) =>
            product.category === searchIt.searchItVal ||
            searchIt.searchItVal === "allItems"
    );

    localStorage.setItem("allProducts", JSON.stringify(productData));

    return productData.length === 0 ? (
        <Spinner />
    ) : (
        <>
            <SearchAndCategory
                productData={productData}
                setSearchIt={setSearchIt}
                onFilter={setFilteredProducts}
            />
            <ProductList productData={filteredProducts || productDisplay} />
        </>
    );
};

export default ProductPage;
