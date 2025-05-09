import React from 'react'
import { useCart } from '../context/CartContext'

const data = [
  {
    name: 'Hamburger',
    price: 200,
    image: '/burger.jpeg',
  },
  {
    name: 'Fries',
    price: 100,
    image: '/fries.jpeg',
  },
  {
    name: 'Coke',
    price: 50,
    image: '/coke.jpeg',
  },
  {
    name: 'Pepsi',
    price: 50,
    image: '/pepsi.jpeg',
  },
]

function Item() {
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <div className="flex flex-wrap gap-8 justify-center mt-8">
      {data.map((item) => {
        const qty = cart[item.name]?.qty || 0;
        const cost = qty * item.price;
        return (
          <div
            key={item.name}
            className="bg-white rounded-lg shadow-md w-72 mb-8"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="mb-2 text-gray-700">Price: {item.price}</p>
              {qty > 0 && (
                <>
                  <p className="text-gray-700">Total: {qty}</p>
                  <p className="text-gray-700 mb-2">Cost (INR): {cost}</p>
                </>
              )}
              <div className="flex gap-2">
                <button
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  className={`px-4 py-2 rounded text-white ${qty > 0 ? 'bg-pink-600 hover:bg-pink-700' : 'bg-gray-200 text-gray-700'} disabled:opacity-50`}
                  onClick={() => removeFromCart(item)}
                  disabled={!qty}
                >
                  –
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Item