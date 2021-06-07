import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import ProductPage from "./views/productPage";
import ProductDetails from "./views/productDetailsPage";
import MyCart from "./views/cartPage";
import Login from "./views/login";
import Footer from "./components/footer";
import Privacy from "./views/privacy";
import PurchasePage from "./views/purchasePage";
import styled from "styled-components";

function App() {
  return (
    <PageBackground>
      <Header />
      <PageBox>
        <Switch>
          <Route exact path="/eCommerceStore" component={ProductPage} />
          <Route
            path="/eCommerceStore/productDetailsPage/:title"
            component={ProductDetails}
          />
          <Route path="/eCommerceStore/cartPage" component={MyCart} />
          <Route path="/eCommerceStore/login" component={Login} />
          <Route path="/eCommerceStore/privacy" component={Privacy} />
          <Route path="/eCommerceStore/purchasePage" component={PurchasePage} />
        </Switch>
      </PageBox>
      <Footer />
    </PageBackground>
  );
}

const PageBox = styled.div`
  background-color: white;

  @media only screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    margin: auto;
    align-items: center;
  } ;
`;

const PageBackground = styled.div`
  background-color: #eeeeee;
`;

export default App;
