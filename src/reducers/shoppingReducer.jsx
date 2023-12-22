import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "product 1", price: 100.0 },
    { id: 2, name: "product 2", price: 200.0 },
    { id: 3, name: "product 3", price: 300.0 },
    { id: 4, name: "product 4", price: 400.0 },
    { id: 5, name: "product 5", price: 500.0 },
    { id: 6, name: "product 6", price: 600.0 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      break;
    case TYPES.REMOVE_ONE_FROM_CART:
      break;

    case TYPES.REMOVE_ALL_FROM_CART:
      break;

    case TYPES.CLEAR_CART:
      break;

    default:
      break;
  }
}
