import React, { useEffect, useState } from 'react';
import ProductList from '../components/productList';
import Header from '../components/header';
import Footer from '../components/footer';
import SearchAndCategory from '../components/searchCategory';

const productAPI = 'https://my-json-server.typicode.com/tdmichaelis/typicode/products'

const ProductPage = (authenticated) => {
    const [productData, setProductData] = useState([])
    
    useEffect(() => {
        getProductData()
    }, [])

    const getProductData = async () => {
        const response = await fetch(productAPI)
        const jsonData = await response.json()
        setProductData(jsonData)
    }
    console.log(productData)

    return (
        <>
            <Header autheticated={authenticated}/>
            <SearchAndCategory productData={productData}/>
            <ProductList 
                productData={productData}
            />
            <Footer />
        </>
    )
}

export default ProductPage