import { Link } from "react-router-dom";
function Dharmavaram() {
  return (
    <div className="category-page">
      <div className="category-hero">
        <img src="/Dharmavaram.png" alt="Dharmavaram Silk Saree" />
        <div className="category-content">
          <h1>Dharmavaram Silk Sarees</h1>
          <p>Explore our vibrant Dharmavaram silk sarees with rich traditional designs, beautiful colors and elegant craftsmanship.</p>
          <h2>Strating from ₹10,999 </h2>
          <Link to="/products" className="shop-button">View All Sarees → </Link>
        </div>
      </div>
    </div>
  );
}
export default Dharmavaram;