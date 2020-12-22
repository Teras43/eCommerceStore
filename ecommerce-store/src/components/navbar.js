import React from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import Login from '../views/login';

const NavBar = () => {
    const MyCart = () => <div>My Cart</div>

    return (
        <HeaderContent>
            <BrowserRouter>
                <CartLink>
                    <Link to="../views/cartPage">My Cart</Link>
                </CartLink>
                <LoginLink>
                    <Link to="../views/login">Login</Link>
                </LoginLink>
                <Switch>
                    <Route path="/cartPage" component={MyCart}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        </HeaderContent>
    )
}

const HeaderContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
`

const CartLink = styled.div`

    margin-right: 6px;
`

const LoginLink = styled.div`
margin-left: 6px;
`

export default NavBar