import React, { useEffect, useState } from 'react';
import ProductList from '../components/productList';
import Header from '../components/header';

const productAPI = 'https://my-json-server.typicode.com/tdmichaelis/typicode/products'

const ProductPage = () => {
    const [productData, setProductData] = useState([])
    
    useEffect(() => {
        getProductData()
    }, [])

    const getProductData = async () => {
        const response = await fetch(productAPI)
        const jsonData = await response.json()
        setProductData(jsonData)
    }

    return (
        <>
            <Header />
            <ProductList 
                productData={productData}
            />
        </>
    )
}

export default ProductPage