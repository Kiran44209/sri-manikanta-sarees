import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
function Products() {
  const { products, loading, error } = useProducts();
  const searchRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFromUrl = searchParams.get("search") || "";
  const [search, setSearch] = useState(searchFromUrl);
  useEffect(() => {
  if (!loading && searchRef.current) {
    searchRef.current.focus();
  }
}, [loading]);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    return (
      <div className="page">
        <h1>Our Products</h1>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="page">
        <h1>Our Products</h1>
        <p>Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="page">
      <h1>Our Products</h1>
      <input ref={searchRef} type="text" placeholder="Search sarees..." value={search} onChange={ (e) => {
        const value = e.target.value;
        setSearch(value);
        setSearchParams(value ? { search: value} : {});
      }}
       className="product-searchh" />
       <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No sarees found.</p>
        )}
       </div>
    </div>
  );
}
export default Products;