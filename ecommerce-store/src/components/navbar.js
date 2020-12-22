import React from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components'

const NavBar = () => {
    const MyCart = () => <div>My Cart</div>
    const Login = () => <div>Login</div>

    return (
        <HeaderContent>
            <BrowserRouter>
                <CartLink>
                    <Link to="../views/cartPage">My Cart</Link>
                </CartLink>
                <LoginLink>
                    <Link to="../views/loginPage">Login</Link>
                </LoginLink>
                <Switch>
                    <Route path="../views/cartPage" component={MyCart}/>
                    <Route path="../views/loginPage" component={Login}/>
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