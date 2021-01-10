import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import store from "../store";
import styled from "styled-components";

const NavBar = () => {
    const currentState = store.getState();

    const [remountCount, setRemountCount] = useState(0);
    const refresh = () => setRemountCount(remountCount + 1);

    const style = { color: "white", textDecoration: "none" };

    // refresh();

    return (
        <HeaderContent>
            <SearchProducts>
                <NavLink to="/" style={style}>
                    Home
                </NavLink>
            </SearchProducts>
            {" | "}
            <CartLink>
                <NavLink to="/cartPage" style={style}>
                    Cart
                </NavLink>
            </CartLink>
            {" | "}
            <LoginLink>
                <NavLink
                    to="/login"
                    style={style}
                    onClick={() => {
                        store.dispatch({
                            type: "REMOVE_CREDENTIALS",
                        });
                    }}
                >
                    {currentState.userInfo.userName !== "" ? "Logout" : "Login"}
                </NavLink>
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
    font-size: 16px;
    @media only screen and (min-width: 375px) {
        width: 50%;
    }
`;

const SearchProducts = styled.div`
    display: flex;
    color: black;
    @media only screen and (min-width: 375px) {
        margin-right: 10px;
    }
`;

const CartLink = styled.div`
    margin-right: 6px;
    margin-left: 8px;
`;

const LoginLink = styled.div`
    margin-left: 6px;
    @media only screen and (min-width: 375px) {
        margin-right: 12px;
    }
`;

export default NavBar;
