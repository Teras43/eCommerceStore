import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components';
import Login from '../views/login';
import ProductPage from '../views/productPage';
import MyCart from '../views/cartPage';

const NavBar = () => {
    return (
        <HeaderContent>
            <Router>
                    <SearchProducts>
                        <Link to='/productPage'>Search Products</Link>
                    </SearchProducts>
                    <CartLink>
                        <Link to='/cartPage'>My Cart</Link>
                    </CartLink>
                    <LoginLink>
                        <Link to='/login'>Login</Link>
                    </LoginLink>
                <Switch>
                    <Route path='/productPage' component={ProductPage}/>
                    <Route path='/cartPage' component={MyCart}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </Router>
        </HeaderContent>
    )
}

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
`

const SearchProducts = styled.div`
    display: flex;
    margin-left: 30px;
    @media only screen and (min-width: 375px) {
        margin-right: 12px;
    }
`

const CartLink = styled.div`

    margin-right: 6px;
`

const LoginLink = styled.div`
margin-left: 6px;
@media only screen and (min-width: 375px) {
        margin-right: 12px;
    }
`

export default NavBar