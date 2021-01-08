import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import ProductPage from "./views/productPage";
import ProductDetails from "./views/productDetailsPage";
import MyCart from "./views/cartPage";
import Login from "./views/login";
import Footer from "./components/footer";
import Privacy from "./components/privacy";
import PurchasePage from "./views/purchasePage";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={ProductPage} />
                <Route
                    path="/productDetailsPage/:title"
                    component={ProductDetails}
                />
                <Route path="/cartPage" component={MyCart} />
                <Route path="/login" component={Login} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/purchasePage" component={PurchasePage} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
