import { Link } from "react-router-dom";
function Kanchipuram() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <img src="/Kanchipuram.png" alt="Kanchipuram Silk Saree" />
        <div className="category-content">
          <h1>Kanchipuram Silk Sarees</h1>
          <p>Discover our beautiful collection of traditional Kanchipuram silk sarees, known for rich zari work,elegant designs and timeless craftsmanship.</p>
          <h2>Starting from ₹12,999</h2>
          <Link to="/products" className="shop-button">View All Sarees →</Link>
        </div>
      </div>
    </div>
  );
}
export default Kanchipuram;