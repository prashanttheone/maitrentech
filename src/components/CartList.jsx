import React from 'react';
import { useCart } from '../context/CartContext';
import {useNavigate } from 'react-router-dom'

function CartList({ onClose }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const items = Object.values(cart);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
     
      navigate('/checkout');
      onClose();
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 relative">
        <button
          className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        {items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="mb-6">
            {items.map((item) => (
              <div key={item.name} className="flex items-center justify-between mb-4">
                <span className="text-gray-700 text-lg w-32">{item.name} :</span>
                <span className="text-gray-700 text-lg w-8 text-center">{item.qty}</span>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 disabled:opacity-50"
                    onClick={() => removeFromCart(item)}
                    disabled={item.qty === 0}
                  >
                    –
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between mt-6 border-t pt-4">
              <span className="text-lg font-semibold text-gray-800">Total (INR) :</span>
              <span className="text-lg font-semibold text-gray-800">{total}</span>
            </div>
          </div>
        )}
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="bg-blue-800 text-white px-6 py-2 rounded font-semibold hover:bg-blue-900 shadow"
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
       SAVE AND CHECKOUT
            {/* <Link to="/checkout">SAVE AND CHECKOUT</Link> */}
          </button>
          <button
            className="text-blue-800 font-semibold px-4 py-2 rounded hover:underline"
            onClick={onClose}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList; 
