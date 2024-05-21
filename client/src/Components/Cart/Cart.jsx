import React from 'react';
import { useCart } from '../../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    // Handle place order functionality here
    console.log('Order placed:', cart);
    alert('Order placed successfully!');
  };

  return (
    <div className="max-w-md mx-auto my-4 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-lg font-semibold">{item.itemName}</p>
                  <p className="text-gray-700">Price: ₹{item.price}/-</p>
                  <p className="text-gray-700">Quantity: {item.quantity} kg</p>
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeFromCart(item.itemName)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: ₹{calculateTotal()}/-</h3>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
