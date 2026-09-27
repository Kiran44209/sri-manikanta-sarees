import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import ManageProducts from "./pages/ManageProducts";

import Kanchipuram from "./categories/Kanchipuram";
import Mysore from "./categories/Mysore";
import Dharmavaram from "./categories/Dharmavaram";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/categories" element={<Categories />} >
        <Route path="kanchipuram" element={<Kanchipuram />} />
        <Route path="mysore" element={<Mysore/>} />
        <Route path="dharmavaram" element={<Dharmavaram/>} />
        </Route>
        <Route path="/manage-products" element={<ManageProducts/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;

