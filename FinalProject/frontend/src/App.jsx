import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomePage";
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
import UserListScreen from "./pages/UserListPage";
import UserEditScreen from "./pages/UserEditPage";
import ProductListScreen from "./pages/ProductListPage";
import ProductEditScreen from "./pages/ProductEditPage";
import OrderListScreen from "./pages/OrderListPage";
import ContactUs from "./pages/ContactUsPage";
import PerfumePage from "./pages/CategoryPages/perfumePages/PerfumePage";
import MenPerfumePage from "./pages/CategoryPages/perfumePages/MenPerfumePage";
import WomenPerfumePage from "./pages/CategoryPages/perfumePages/WomenPerfumePage";
import OrientalPerfumePage from "./pages/CategoryPages/perfumePages/OrientalPerfumePage";
import MakeupPage from "./pages/CategoryPages/makeupPages/MakeupPage";
import FoundationMakeupPage from "./pages/CategoryPages/makeupPages/FoundationMakeupPage";
import MascaraMakeupPage from "./pages/CategoryPages/makeupPages/MascaraMakeupPage";
import EyeshadowMakeupPage from "./pages/CategoryPages/makeupPages/EyeshadowMakeupPage";
import HighlighterMakeupPage from "./pages/CategoryPages/makeupPages/HighlighterMakeupPage";
import BronzerMakeupPage from "./pages/CategoryPages/makeupPages/BronzerMakeupPage";
import LipglossMakeupPage from "./pages/CategoryPages/makeupPages/LipglossMakeupPage";
import RougeMakeupPage from "./pages/CategoryPages/makeupPages/RougeMakeupPage";
import MakeupremoverPage from "./pages/CategoryPages/makeupPages/MakeupRemoverPage";
import KohlMakeupPage from "./pages/CategoryPages/makeupPages/KohlMakeupPage";
import BodycarePage from "./pages/CategoryPages/bodycarePages/BodycarePage";
import CreamBodyCarePage from "./pages/CategoryPages/bodycarePages/CreamBodyCarePage";
import BodylotionBodycarePage from "./pages/CategoryPages/bodycarePages/BodylotionBodycarePage";
import BodymistBodyCarePage from "./pages/CategoryPages/bodycarePages/BodymistBodyCarePage";
import HaircarePage from "./pages/CategoryPages/haircarePages/HaircarePage";
import ShampoHaircarePage from "./pages/CategoryPages/haircarePages/ShampoHaircarePage";
import SerumsHaircarePage from "./pages/CategoryPages/haircarePages/SerumsHaircarePage";
import ConditionerHaircarePage from "./pages/CategoryPages/haircarePages/ConditionerHaircarePage";
import ConditionerCreamHaircarePage from "./pages/CategoryPages/haircarePages/ConditionerCreamHaircarePage";
import ProteinAndCreatineHaircarePage from "./pages/CategoryPages/haircarePages/ProteinAndCreatineHaircarePage";
import OilsHaircarePage from "./pages/CategoryPages/haircarePages/OilsHaircarePage";
import Cat from "./components/categorySelect";
import ReturnsListPage from "./pages/ReturnsPages/ReturnsListPage";
import ReturnDetailsPage from "./pages/ReturnsPages/ReturnDetailsPage";
import ReturnCreatePage from "./pages/ReturnsPages/ReturnCreatePage";
import AdminPanalPage from "./pages/AdminPages/AdminPanalPage";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-5 ">
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cat" component={Cat} />
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
          <Route path="/contactus" component={ContactUs} />
          <Route path="/returndetails/:id" component={ReturnDetailsPage} />
          <Route path="/createreturn" component={ReturnCreatePage} />
          <Route path="/admin/returnslist" component={ReturnsListPage} />
          <Route path="/admin/adminpanal" component={AdminPanalPage} />

          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          {/* category routes */}
          {/* perfume */}
          <Route path="/perfume" component={PerfumePage} />
          {/* <Route path="/perfume">
              {" "}
              <PerfumePage id="1" />
            </Route> */}
          <Route path="/menperfume" component={MenPerfumePage} />
          <Route path="/womenperfume" component={WomenPerfumePage} />
          <Route path="/orientalperfume" component={OrientalPerfumePage} />
          {/* makeup */}
          <Route path="/makeup" component={MakeupPage} />
          <Route path="/foundationmakeup" component={FoundationMakeupPage} />
          <Route path="/masacaramakeup" component={MascaraMakeupPage} />
          <Route path="/eyeshadowmakeup" component={EyeshadowMakeupPage} />
          <Route path="/highlightermakeup" component={HighlighterMakeupPage} />
          <Route path="/bronzermakeup" component={BronzerMakeupPage} />
          <Route path="/lipglossmakeup" component={LipglossMakeupPage} />
          <Route path="/rougemakeup" component={RougeMakeupPage} />
          <Route path="/makeupremover" component={MakeupremoverPage} />
          <Route path="/kohlmakeup" component={KohlMakeupPage} />
          {/* body care */}
          <Route path="/bodycare" component={BodycarePage} />
          <Route path="/creambodycare" component={CreamBodyCarePage} />
          <Route
            path="/bodylotionbodycare"
            component={BodylotionBodycarePage}
          />
          <Route path="/bodymistbodycare" component={BodymistBodyCarePage} />
          {/* hair care */}
          <Route path="/haircare" component={HaircarePage} />
          <Route path="/shampohaircare" component={ShampoHaircarePage} />
          <Route path="/serumshaircare" component={SerumsHaircarePage} />
          <Route
            path="/conditionerhaircare"
            component={ConditionerHaircarePage}
          />
          <Route
            path="/conditionercreamhaircare"
            component={ConditionerCreamHaircarePage}
          />
          <Route
            path="/proteinandcreatinehaircare"
            component={ProteinAndCreatineHaircarePage}
          />
          <Route path="/oilshaircare" component={OilsHaircarePage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
