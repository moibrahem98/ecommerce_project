import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProductScreen from "./pages/ProductPage";
import CartScreen from "./pages/CartPage";
import LoginScreen from "./pages/LoginPage";
import RegisterScreen from "./pages/RegisterPage";
import ProfileScreen from "./pages/ProfilePage";
import UpdateProfileScreen from "./pages/UpdateProfilePage";
import ShippingScreen from "./pages/ShippingPage";
import PaymentScreen from "./pages/PaymentPage";
import PlaceOrderScreen from "./pages/PlaceOrderPage";
import OrderScreen from "./pages/OrderPage";
import MyOrdersScreen from "./pages/MyOrdersPage";
import UserListScreen from "./pages/UserPages/UserListPage";
import UserEditScreen from "./pages/UserPages/UserEditPage";
import ProductListScreen from "./pages/ProductListPage";
import ProductEditScreen from "./pages/ProductEditPage";
import OrderListScreen from "./pages/OrderListPage";
import ContactUs from "./pages/ContactUsPage";
import InternalSearch from "./components/categorySelect";
import ReturnsListPage from "./pages/ReturnsPages/ReturnsListPage";
import MyReturnsPage from "./pages/ReturnsPages/MyReturnsPage";
import ReturnDetailsPage from "./pages/ReturnsPages/ReturnDetailsPage";
import ReturnCreatePage from "./pages/ReturnsPages/ReturnCreatePage";
import AdminPanalPage from "./pages/AdminPages/AdminPanalPage";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import UserPanal from "./pages/UserPages/UserPanal/UserPanal";
import BrandsListPage from "./pages/BrandPages/BrandListPage";
import BrandDetailsPage from "./pages/BrandPages/BrandDetailsPage";
import ProductCreatePage from "./pages/ProductPages/ProductCreatePage";
import ProductImageAddPage from "./pages/ProductPages/ProductImageAddPage";
// import AddBrandPage from "./pages/BrandPages/AddBrandPage";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
      </Switch>
      <Container>
        <Switch>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cat" component={InternalSearch} />
          <Route path="/search" component={SearchPage} />
          <Route path="/categoryproducts/:id" component={CategoryPage} />
          <Route path="/subcategoryproducts/:id" component={SubCategoryPage} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login/" component={LoginScreen} />
          <Route path="/register/" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/update" component={UpdateProfileScreen} />
          <Route path="/myorders" component={MyOrdersScreen} />
          <Route path="/userpanal" component={UserPanal} />

          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/returndetails/:id" component={ReturnDetailsPage} />
          <Route path="/admin/returnslist" component={ReturnsListPage} />
          <Route path="/myreturns" component={MyReturnsPage} />
          <Route path="/createreturn" component={ReturnCreatePage} />
          <Route path="/admin/createproduct" component={ProductCreatePage} />
          <Route path="/admin/productimage" component={ProductImageAddPage} />
          <Route path="/admin/adminpanal" component={AdminPanalPage} />

          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          {/* Brand: */}
          <Route path="/admin/brands" component={BrandsListPage} />
          <Route path="/brand/:id" component={BrandDetailsPage} />
          {/* <Route path="/brand/addbrand" component={AddBrandPage} /> */}
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
