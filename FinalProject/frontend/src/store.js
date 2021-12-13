import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducers, productDetailsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
});
const initialState = {};

const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
