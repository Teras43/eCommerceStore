import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return (
        <HeaderContent>
            <SearchProducts>
                <Link to="/">Search Products</Link>
            </SearchProducts>
            <CartLink>
                <Link to="/cartPage">My Cart</Link>
            </CartLink>
            <LoginLink>
                <Link to="/login">Login</Link>
            </LoginLink>
        </HeaderContent>
    );
};

/** Styles */
const HeaderContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    font-size: 14px;
    @media only screen and (min-width: 375px) {
        width: 50%;
    }
`;

const SearchProducts = styled.div`
    display: flex;
    margin-left: 30px;
    @media only screen and (min-width: 375px) {
        margin-right: 12px;
    }
`;

const CartLink = styled.div`
    margin-right: 6px;
`;

const LoginLink = styled.div`
    margin-left: 6px;
    @media only screen and (min-width: 375px) {
        margin-right: 12px;
    }
`;

export default NavBar;
