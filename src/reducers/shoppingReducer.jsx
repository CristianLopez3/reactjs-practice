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
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      // console.log(newItem);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemtoDelete = state.cart.find((item) => item.id === action.payload);
      return itemtoDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
          ...state, 
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
    }

    case TYPES.REMOVE_ALL_FROM_CART: 
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      };

    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    
    default:
      return state;
      
  }
}
