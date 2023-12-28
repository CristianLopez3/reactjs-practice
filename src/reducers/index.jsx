import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import shoppingReducer from "./shoppingReducer";
import { crudReducer } from "./CrudReducer";

const reducer = combineReducers({
  counter: counterReducer,
  shoppingCart: shoppingReducer,
  crud: crudReducer
});

export default reducer;