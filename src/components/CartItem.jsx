const CartItem = ({ data, deleteOneFromCart, deleteAllFromCart }) => {
  let { id, name, price, quantity } = data;
  return (
    <div style={{borderBottom: "thin solid gray", paddingBottom: ".5rem"}}>
      <h4> { name } </h4>
      <h5> { price }.00 x { quantity } = {price * quantity} </h5>
      <button onClick={() => deleteOneFromCart(id)} style={{marginRight: ".5rem"}}> Delete One </button>
      <button onClick={() => deleteAllFromCart(id, true)} > Delete All </button>
    </div>
  )
}

export default CartItem;