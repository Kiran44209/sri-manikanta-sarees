import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function ProductCard ({ product}) {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(AppContext);
  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(ProductCard.id);
    } else {
      addToWishlist(product);
    }
  };
  return(
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <Link to={`/products/${product.id}`}><button>View Product</button></Link>
      <button onClick={handleWishlist} className="wishlist-button">{isWishlisted ? "❤️ Remove Wishlist" : "♡ Add to Wishlist"} </button>
    </div>
  );
}
export default ProductCard;