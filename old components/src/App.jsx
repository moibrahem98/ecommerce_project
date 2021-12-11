// import { Route, Redirect, Switch } from "react-router-dom";
import { Photoslider } from "./components/slider";

import { Route, Switch } from "react-router-dom";
import { Nav } from "./components/Nav";
import {Footer} from "./components/footer"
import { ProductDetails } from "./Pages/product_details";
// import { Signup } from "./Pages/Signup";
// import { Login } from "./Pages/Login";
// import { ContactUs } from "./Pages/ContactUs";
export const App = () => {
  return (
    <>
      <Nav />
      <Photoslider />
      <Footer/>
      {/* <Signup/>
      <Login/>
      <ContactUs/> */}
      

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
