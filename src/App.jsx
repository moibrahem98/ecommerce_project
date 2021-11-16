// import { Route, Redirect, Switch } from "react-router-dom";
import { Photoslider } from "./components/slider";

import { Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import {Footer} from "./components/footer"
import { ProductDetails } from "./Pages/product_details";
export const App = () => {
  return (
    <>
      <Nav />
      <Photoslider />
      <Footer/>
      

      <div className="container-fluid">
        <Switch>
          <Route path="/product_details/">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </>
  );
};
