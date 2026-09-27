import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/cartSlice";
function Cart() {
  const dispatch = useDispatch ();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0 );
    if(cartItems.length === 0) {
      return (
        <div className="page">
          <h1>Shopping Cart</h1>
          <p>Your cart is currently empty.</p>
        </div>
      );
    }
    return(
      <div className="page">
        <h1>Shopping Cart</h1>
        <div className="cart-container">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}> - </button>
                  <span>{item.quantity}</span>
                  <button onClick={ () => dispatch(increaseQuantity(item.id))}> + </button>
                </div>
                <button className="remove-button" onClick={ () => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Total: ₹{totalPrice}</h2>
          <button onClick={ () => dispatch(clearCart())}>Clear Cart</button>
        </div>
      </div>
    );
}
export default Cart;
