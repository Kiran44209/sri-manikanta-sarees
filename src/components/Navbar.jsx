import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Sri Manikanta Sarees</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/manage-products">Manage Products</Link>
                <Link to="/categories">Categories</Link>
                <Link to="Wishlist">Wishlist</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/orders">Orders</Link>
                <Link to="contact">Contact</Link>
            </div>
        </nav>
    );
}
export default Navbar;