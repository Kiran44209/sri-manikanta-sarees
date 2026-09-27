import { useReducer } from "react";
const initialState = {
  orders: [],
}
function orderReducer (state, action) {
  switch(action.type) {
    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
      case "CANCEL_ORDER":
        return {
          ...state,
          orders: state.orders.filter(
            (order) => order.id !== action.payload
          ),
        };
        default:
          return state;
  }
}
function Orders() {
  const [state, dispatch] = useReducer (
    orderReducer,
    initialState
  );
  const placeSampleOrder = () => {
    const newOrder = {
      id: Date.now(),
      name: "Kanchipuram Silk Saree",
      price: 12999,
      status: "Placed",
    };
    dispatch ({
      type: "ADD_ORDER",
      payload: newOrder,
    });
  };
  return (
    <div className="page">
      <h1>My Orders</h1>
      <button onClick={placeSampleOrder}>Place Sample Order</button>
      {state.orders.length === 0 ? ( <p>No Orders yet.</p>
      ) : (
        <div>
          {state.orders.map((order) => (
            <div className="cart-item" key={order.id}>
              <div className="cart-item-info">
                <h3>{order.name}</h3>
                <p>₹{order.price}</p>
                <p>Status: {order.status}</p>
                <button className="remove-button" onClick={ () => dispatch ({ type: "CANCEL_ORDER", payload: order.id,})}>Cancel Order</button>
              </div>
            </div>
          ))}
        </div>
     )}
   </div>
  );
}
export default Orders;