import { useEffect, useState } from "react";
function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect (() => {
    fetch("https://dummyjson.com/products/category/womens-dresses").then((response) => {
      if(!response.ok){
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((data) => {
      const sarees = [
        {
          id: 1,
          title: "Kanchipuram Silk Saree",
          price: 12999,
          image: "/Kanchipuram.png",
          category: "Kanchipuram",
        },
        {
          id: 2,
          title: "Mysore Silk Saree",
          price: 9999,
          image: "/Mysore.png",
          category: "Mysore",
        },
        {
          id: 3,
          title: "Dharmavaram Silk Saree",
          price: 10999,
          image: "/Dharmavaram.png",
          category: "Dharmavaram",
        },
      ];
      setProducts(sarees);
      setLoading(false);
    })
    .catch ((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);
  return{
    products,
    loading,
    error,
  };
}
export default useProducts;