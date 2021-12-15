import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducers, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
};


// const initialState = {
//   cart: {
//     cartItems: cartItemsFromStorage,
//   },
//   userLogin: { userInfo: userInfoFromStorage },
// };

const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
