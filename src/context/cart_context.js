import * as React from "react";

export const CartContext = React.createContext(null);

function CartContextProvider({ children }) {
  const [cart, setCart] = React.useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
