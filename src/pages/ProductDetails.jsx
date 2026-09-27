import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const products = [
    {
      id: "1",
      name: "Kanchipuram Silk Saree",
      price: 12999,
      image: "/Kanchipuram.png",
      description: "A beautiful traditional Kanchipuram silk saree with rich zari work and elegant designs.",
    },
    {
      id: "2",
      name: "Mysore Silk Saree",
      price: 9999,
      image: "/Mysore.png",
      description: "An elegant Mysore silk saree with a smooth finish and beautiful traditional zari work.",
    },
    {
      id: "3",
      name: "Dharmavaram Silk Saree",
      price: 10999,
      image: "/Dharmavaram.png",
      description: "A vibrant Dharmavaram silk saree featuring traditional patterns and rich colors.",
    },
  ];
  const product = products.find((item) => item.id == id);
  if (!product){
    return (
      <div className="page">
        <h1>Product Not Found</h1>
        <Link to="/products">← Back to Products</Link>
      </div>
    );
  }
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setMessage("Saree added to cart successfully!");
  };
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <h2>₹{product.price}</h2>
        <p>{product.description}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {message && (
          <p className="success-message">{message}</p>
        )}
        <br />
        <br />
        <Link to="/products">  ← Back to Products</Link>
      </div>
    </div>
  );
}
export default ProductDetails;