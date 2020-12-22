import React from 'react';
import NavBar from './navbar';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderContainer>
            <h3>Company Name</h3>
            <NavBar />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    flex: 1fr;
    width: 100vw;
    align-items: center;
    background-color: green;
    height: 50px;
`

export default Header