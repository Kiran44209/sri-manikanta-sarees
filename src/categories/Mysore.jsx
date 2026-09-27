import { Link } from "react-router-dom";
function Mysore() {
  return(
    <div className="category-page">
      <div className="category-hero">
        <img src="/Mysore.png" alt="Mysore Silk Saree" />
        <div className="category-content">
          <h1>Mysore Silk Sarees</h1>
          <p>Explore our elegant Mysore silk sarees with a smooth finish, beautiful zari work and traditional designs.</p>
          <h2>Starting from ₹9999</h2>
          <Link to="/products" className="shop-button">View All Sarees →</Link>
        </div>
      </div>
    </div>
  );
}
export default Mysore;