import { Link, Outlet } from "react-router-dom";
function Categories() {
  return (
    <div className="page">
      <h1>Saree Categories</h1>
      <div className="category-links">
        <Link to="kanchipuram">Kanchipuram Silk</Link>
        <Link to="mysore">Mysore Silk</Link>
        <Link to="dharmavaram">Dharmavaram Silk</Link>
      </div>
      <Outlet />
    </div>
  );
}
export default Categories;