import React from 'react';
import styled from 'styled-components'
// import Privacy from './privacy'

const Footer = () => {
    return (
        <FooterContainer >
            <FooterTextWrap>
                &copy; 2020 Company Name
                <a href='./privacy.js'>Privacy</a>
            </FooterTextWrap>
        </FooterContainer>
    )
}

/** Styles */
const FooterContainer = styled.div`
    display: flex;
    flex: 1fr;
    height: 35px;
    width: 100vw;
    background-color: green;
    align-items: flex-end;
`

const FooterTextWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 6px;
`

export default Footer