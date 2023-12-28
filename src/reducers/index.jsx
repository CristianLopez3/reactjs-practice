import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import shoppingReducer from "./shoppingReducer";

const reducer = combineReducers({
  counter: counterReducer,
  shoppingCart: shoppingReducer
});

export default reducer;