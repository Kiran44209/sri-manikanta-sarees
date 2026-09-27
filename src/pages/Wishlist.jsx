import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(AppContext);
  if(wishlist.length ===0) {
    return (
      <div className="page">
        <h1>My Wishlist</h1>
        <p>Your Wishlist is currently empty.</p>
        <Link to="/products">Browse Products</Link>
      </div>
    );
  }
  return (
    <div className="page">
      <h1>My Wishlist</h1>
      <div className="product-grid">
        {wishlist.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <Link to={`/products/${product.id}`}><button>View Product</button></Link>
            <button className="remove-button" onClick={() => removeFromWishlist(product.id) }>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Wishlist;