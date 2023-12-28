import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import { addToCart, clearCart, deleteFromCart } from "../actions/shoppingCartActions";

const ShoppingCart = () => {
  // const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { products, cart } = state.shoppingCart;

  return (
    <div>
      <h2>Shopping Car</h2>
      <h3>Products</h3>
      <article className="box grid-responsive">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              data={product}
              addToCart={() => dispatch(addToCart(product.id))}
            />
          );
        })}
      </article>
      <h3>Cart</h3>
      <article className="box">

        <button
          onClick={() => dispatch(clearCart())}
          style={{ margin: "1rem" }}
        >
          Clear Cart
        </button>

        {cart.map((item, index) => {
          return (
            <CartItem
              key={index}
              data={item}
              deleteOneFromCart={() => dispatch(deleteFromCart(item.id))} 
              deleteAllFromCart={() => dispatch(deleteFromCart(item.id, true))} 
            />
          );
        })}
      </article>
    </div>
  );
};

export default ShoppingCart;
