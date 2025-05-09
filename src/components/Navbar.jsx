import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartList from './CartList';


function Navbar() {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);
  // Total items in cart (sum of all quantities)
  const totalItems = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-blue-700 shadow text-white relative">
      <div className="flex items-center gap-2">
        <span className="text-6xl">
          <img src="/restaurant_48px.svg" alt="Cart" className="w-8 h-8 text-white" />
        </span>
        <span className="text-xl font-bold">Food's Restaurant</span>
      </div>
      <button
        className="relative"
        onClick={() => setShowCart(true)}
        aria-label="View cart">
        <img src="/icons8-cart-24.png" alt="Cart" className="w-8 h-8" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full px-2 text-xs font-bold">
            {totalItems}
          </span>
        )}
      </button>
      {showCart && <CartList onClose={() => setShowCart(false)} />}
    </nav>
  );
}

export default Navbar; 