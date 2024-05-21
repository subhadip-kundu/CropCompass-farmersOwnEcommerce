import React from "react";
import { useCart } from "../../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * 1, 0);
  };

  const handlePlaceOrder = () => {
    // Handle place order functionality here
    console.log("Order placed:", cart);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto my-4 p-4 border rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2">Item Name</th>
                  <th className="py-2">Price (₹)</th>
                  <th className="py-2">Quantity (kg)</th>
                  <th className="py-2">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 px-4">{item.itemName}</td>
                    <td className="py-2 px-4">₹{item.price}</td>
                    <td className="py-2 px-4">{item.quantity} kg</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => removeFromCart(item.itemName)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
              <h3 className="text-xl font-bold">
                Total: ₹{calculateTotal()}/-
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
