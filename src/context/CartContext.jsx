import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prev) => {
      const qty = prev[item.name]?.qty || 0;
      return {
        ...prev,
        [item.name]: { ...item, qty: qty + 1 },
      };
    });
  };

  const removeFromCart = (item) => {
    setCart((prev) => {
      const qty = prev[item.name]?.qty || 0;
      if (qty <= 1) {
        const { [item.name]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [item.name]: { ...item, qty: qty - 1 },
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
} 