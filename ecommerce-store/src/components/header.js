import React from "react";
import NavBar from "./navbar";
import styled from "styled-components";

const Header = (authenticated) => {
    return (
        <HeaderContainer>
            <CompanyNameWrap>
                <h3>Company Name</h3>
            </CompanyNameWrap>
            <NavBar />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    flex: 1fr;
    width: 100%;
    align-items: center;
    background-color: green;
    height: 50px;
`;

const CompanyNameWrap = styled.div`
    margin-left: 12px;
    @media only screen and (min-width: 375px) {
        width: 100%;
    }
`;

export default Header;
