import React from 'react'
import styled from 'styled-components'

const Product = ({img, title, price, rating}) => {
    // onClick function to render a single product needed

    return (
        <ProductContainer>
            <ImgContainer>
                <ProductImage src={img} alt='Not found!'/>
            </ImgContainer>
            <div>{title}</div>
            <div>${price}</div>
            <div>Rating: &nbsp;&nbsp;{rating} / 5</div>
        </ProductContainer>
    )
}

/** Styles */
const ProductContainer = styled.div`
    width: 200px;
    height: 200px;
    margin: 45px;
    box-sizing: border-box;
`
const ImgContainer = styled.div`
    height: 75%;
    object-fit: contain;
    justify-content: center;
`

const ProductImage = styled.img`
    max-height: 80%;
    max-width: 100%;
    height: auto;
    width: auto;
`

export default Product