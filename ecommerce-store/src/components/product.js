import React from 'react'
import styled from 'styled-components'

const Product = ({img, title, price, rating}) => {
    return (
        <ProductContainer>
            <ImgContainer>
                <ProductImage src={img} alt='Not found!'/>
            </ImgContainer>
            <div>{title}</div>
            <div>{price}</div>
            <div>{rating}</div>
        </ProductContainer>
    )
}

/** Styles */
const ProductContainer = styled.div`
    width: 250px;
    height: 250px;
    margin: 45px;
    box-sizing: border-box;
`
const ImgContainer = styled.div`
    height: 75%;
    object-fit: contain;
`

const ProductImage = styled.img`
    height: 80%;
    width: 100%;
`

export default Product