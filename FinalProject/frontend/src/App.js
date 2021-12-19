import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import CategoryNavbar from "./components/CategoryNavbar";
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
import PerfumePage from "./screens/CategoryPages/perfumePages/PerfumePage";
import MenPerfumePage from "./screens/CategoryPages/perfumePages/MenPerfumePage";
import WomenPerfumePage from "./screens/CategoryPages/perfumePages/WomenPerfumePage";
import OrientalPerfumePage from "./screens/CategoryPages/perfumePages/OrientalPerfumePage";
import MakeupPage from "./screens/CategoryPages/makeupPages/MakeupPage";
import FoundationMakeupPage from "./screens/CategoryPages/makeupPages/FoundationMakeupPage";
import MascaraMakeupPage from "./screens/CategoryPages/makeupPages/MascaraMakeupPage";
import EyeshadowMakeupPage from "./screens/CategoryPages/makeupPages/EyeshadowMakeupPage";
import HighlighterMakeupPage from "./screens/CategoryPages/makeupPages/HighlighterMakeupPage";
import BronzerMakeupPage from "./screens/CategoryPages/makeupPages/BronzerMakeupPage";
import LipglossMakeupPage from "./screens/CategoryPages/makeupPages/LipglossMakeupPage";
import RougeMakeupPage from "./screens/CategoryPages/makeupPages/RougeMakeupPage";
import MakeupremoverPage from "./screens/CategoryPages/makeupPages/MakeupRemoverPage";
import KohlMakeupPage from "./screens/CategoryPages/makeupPages/KohlMakeupPage";
import BodycarePage from "./screens/CategoryPages/bodycarePages/BodycarePage";
import CreamBodyCarePage from "./screens/CategoryPages/bodycarePages/CreamBodyCarePage";
import BodylotionBodycarePage from "./screens/CategoryPages/bodycarePages/BodylotionBodycarePage";
import BodymistBodyCarePage from "./screens/CategoryPages/bodycarePages/BodymistBodyCarePage";
import HaircarePage from "./screens/CategoryPages/haircarePages/HaircarePage";
import ShampoHaircarePage from "./screens/CategoryPages/haircarePages/ShampoHaircarePage";
import SerumsHaircarePage from "./screens/CategoryPages/haircarePages/SerumsHaircarePage";
import ConditionerHaircarePage from "./screens/CategoryPages/haircarePages/ConditionerHaircarePage";
import ConditionerCreamHaircarePage from "./screens/CategoryPages/haircarePages/ConditionerCreamHaircarePage";
import ProteinAndCreatineHaircarePage from "./screens/CategoryPages/haircarePages/ProteinAndCreatineHaircarePage";
import OilsHaircarePage from "./screens/CategoryPages/haircarePages/OilsHaircarePage";

function App() {
  return (
    <Router>
      <Header />
      <CategoryNavbar />
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
            <Route path="/contactus" component={ContactUs} />

            <Route path="/admin/productlist" component={ProductListScreen} />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />

            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            {/* category routes */}
            {/* perfume */}
            <Route path="/perfume" component={PerfumePage} />
            <Route path="/menperfume" component={MenPerfumePage} />
            <Route path="/womenperfume" component={WomenPerfumePage} />
            <Route path="/orientalperfume" component={OrientalPerfumePage} />
            {/* makeup */}
            <Route path="/makeup" component={MakeupPage} />
            <Route path="/foundationmakeup" component={FoundationMakeupPage} />
            <Route path="/masacaramakeup" component={MascaraMakeupPage} />
            <Route path="/eyeshadowmakeup" component={EyeshadowMakeupPage} />
            <Route
              path="/highlightermakeup"
              component={HighlighterMakeupPage}
            />
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
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
