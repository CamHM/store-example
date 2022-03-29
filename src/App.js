import './App.css';
import Products from "./pages/products/Products";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Product from "./pages/product/Product";
import { productsRoute, singleProductRoute } from "./routes/products";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to={productsRoute} />
                </Route>
                <Route exact path={productsRoute}>
                    <Products />
                </Route>
                <Route exact path={singleProductRoute()}>
                    <Product />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
