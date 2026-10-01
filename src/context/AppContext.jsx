import { createContext, useState } from "react";
import Products from "../pages/Products";
import { current } from "@reduxjs/toolkit";
export const AppContext = createContext();
function AppContextProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const addToWishlist = (Product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some((item) => item.id ===Product.id);
      if (exists) {
        return currentWishlist;
      }
      return [...currentWishlist, Product];
    });
  };
   const removeFromWishlist = (productId) => {
    setWishlist((currentWishlist) => 
    currentWishlist.filter((item) => item.id !==productId)
    );
   };
   return (
    <AppContext.Provider value={{wishlist, addToWishlist, removeFromWishlist,}}>{children}</AppContext.Provider>
   );
}
export default AppContextProvider;