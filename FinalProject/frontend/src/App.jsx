import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components:
import Header from "./components/Header";
import Footer from "./components/Footer";
// Pages:
//  1. Main Pages:
import HomePage from "./pages/MainPages/HomePage";
import SearchPage from "./pages/MainPages/SearchPage";
import ContactUs from "./pages/MainPages/ContactUsPage";
//  2. User Pages:
import UserPanal from "./pages/UserPages/UserPanal/UserPanal";
import LoginPage from "./pages/UserPages/LoginPage";
import RegisterPage from "./pages/UserPages/RegisterPage";
import ProfilePage from "./pages/UserPages/ProfilePage";
import UpdateProfilePage from "./pages/UserPages/UpdateProfilePage";
import UserListPage from "./pages/UserPages/UserListPage";
import UserEditPage from "./pages/UserPages/UserEditPage";
//  3. Product Pages:
import ProductCreatePage from "./pages/ProductPages/ProductCreatePage";
import ProductImageAddPage from "./pages/ProductPages/ProductImageAddPage";
import ProductListPage from "./pages/ProductPages/ProductListPage";
import ProductEditPage from "./pages/ProductPages/ProductEditPage";
import ProductPage from "./pages/ProductPages/ProductPage";
import CategoryPage from "./pages/ProductPages/CategoryPage";
import SubCategoryPage from "./pages/ProductPages/SubCategoryPage";
import OffersProductPage from "./pages/ProductPages/OffersProductPage";
//  4. Order Pages:
import CartPage from "./pages/OrderPages/CartPage";
import ShippingPage from "./pages/OrderPages/ShippingPage";
import PaymentPage from "./pages/OrderPages/PaymentPage";
import PlaceOrderPage from "./pages/OrderPages/PlaceOrderPage";
import OrderPage from "./pages/OrderPages/OrderPage";
import OrderListPage from "./pages/OrderPages/OrderListPage";
import MyOrdersPage from "./pages/OrderPages/MyOrdersPage";
//  5. Returns Pages:
import MyReturnsPage from "./pages/ReturnsPages/MyReturnsPage";
import ReturnDetailsPage from "./pages/ReturnsPages/ReturnDetailsPage";
import ReturnCreatePage from "./pages/ReturnsPages/ReturnCreatePage";
import ReturnsListPage from "./pages/ReturnsPages/ReturnsListPage";
//  6. Brand Pages:
import BrandsListPage from "./pages/BrandPages/BrandListPage";
import BrandDetailsPage from "./pages/BrandPages/BrandDetailsPage";
//  7. Admin Pages
import AdminPanalPage from "./pages/AdminPages/AdminPanalPage/AdminPanalPage";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Container>
        <Switch>
          {/* Admin */}
          <Route path="/admin/adminpanal" component={AdminPanalPage} />
          <Route path="/admin/createproduct" component={ProductCreatePage} />
          <Route path="/admin/productimage" component={ProductImageAddPage} />
          <Route path="/admin/productlist" component={ProductListPage} />
          <Route path="/admin/product/:id/edit" component={ProductEditPage} />
          <Route path="/admin/orderlist" component={OrderListPage} />
          <Route path="/admin/userlist" component={UserListPage} />
          <Route path="/admin/user/:id/edit" component={UserEditPage} />
          <Route path="/admin/returnslist" component={ReturnsListPage} />

          {/* Main */}
          <Route path="/search" component={SearchPage} />
          <Route path="/contactus" component={ContactUs} />

          {/* Products */}
          <Route path="/categoryproducts/:id" component={CategoryPage} />
          <Route path="/subcategoryproducts/:id" component={SubCategoryPage} />
          <Route path="/offersproducts/:id" component={OffersProductPage} />
          <Route path="/product/:id" component={ProductPage} />

          {/* Users */}
          <Route path="/userpanal" component={UserPanal} />
          <Route path="/login/" component={LoginPage} />
          <Route path="/register/" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/update" component={UpdateProfilePage} />

          {/* Order */}
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/myorders" component={MyOrdersPage} />

          {/* Returns */}
          <Route path="/returndetails/:id" component={ReturnDetailsPage} />
          <Route path="/myreturns" component={MyReturnsPage} />
          <Route path="/createreturn" component={ReturnCreatePage} />

          {/* Brand: */}
          <Route path="/admin/brands" component={BrandsListPage} />
          <Route path="/brand/:id" component={BrandDetailsPage} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
