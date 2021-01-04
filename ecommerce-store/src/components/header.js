import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./navbar";
import styled from "styled-components";

const Header = () => {
    const style = { color: "black" };

    return (
        <HeaderContainer>
            <CompanyNameWrap>
                <NavLink to="/" style={style} exact>
                    Company Name
                </NavLink>
            </CompanyNameWrap>
            <NavBar />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: green;
    height: 70px;
    font-size: 23px;
    text-decoration: none;
`;

const CompanyNameWrap = styled.div`
    margin-left: 12px;
    @media only screen and (min-width: 375px) {
        width: 100%;
    }
`;

export default Header;
