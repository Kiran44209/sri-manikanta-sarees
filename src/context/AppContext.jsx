import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((currentWishlist) => {
      const exists = currentWishlist.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentWishlist;
      }

      return [...currentWishlist, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((currentWishlist) =>
      currentWishlist.filter((item) => item.id !== productId)
    );
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;