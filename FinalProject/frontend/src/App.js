import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UpdateProfileScreen from "./screens/UpdateProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import MyOrdersScreen from "./screens/MyOrdersScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/login/" component={LoginScreen} />
            <Route path="/register/" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/update" component={UpdateProfileScreen} />
            <Route path="/myorders" component={MyOrdersScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/contact-us" component={ContactUs} />

            <Route path="/admin/productlist" component={ProductListScreen} />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />

            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
