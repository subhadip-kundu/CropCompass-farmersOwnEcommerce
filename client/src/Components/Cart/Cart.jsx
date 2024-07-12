import React, { useState } from "react";
import { useCart } from "../../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import LoadingSpinner from "../LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const isAddress = useSelector((state) => state.address.value);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (!isAddress?.data?.street) {
      alert("Please add your address to proceed with the purchase.");
      let path = `/address`;
      navigate(path);
      return;
    }

    setLoading(true);

    const templateParams = {
      order_id: cart[0]?.id || "N/A",
      items: cart
        .map((item) => `${item.itemName} (${item.quantity} kg)`)
        .join(", "),
      total: calculateTotal().toFixed(2),
    };

    emailjs
      .send(
        "service_39w69rp",
        "template_q8gvj25",
        templateParams,
        "GyIxGuJKszHiA5GgB"
      )
      .then((response) => {
        console.log(
          "Order placed and email sent successfully!",
          response.status,
          response.text
        );
        setLoading(false);
        alert("Order placed and confirmation email sent successfully!");
        clearCart(); // Clear the cart after successful order placement
      })
      .catch((error) => {
        console.error("Failed to send email", error);
        alert("Order placed but failed to send confirmation email.");
        setLoading(false);
      });

    // Additional order handling logic
  };

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="min-h-screen w-4/6 mx-auto font-Rubik">
      <div className="max-w-4xl mx-auto my-4 p-4 border rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center border-b-2 border-gray-700">
          Cart
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty.</p>
        ) : (
          <>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 text-left px-2.5">Item Name</th>
                  <th className="py-2 text-left px-2.5">Price (₹)</th>
                  <th className="py-2 text-left px-2.5">Quantity (kg)</th>
                  <th className="py-2 text-center">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-t text-left">
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
            <div className="flex justify-between items-center mt-4 ml-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
              <h3 className="text-xl font-bold">
                Total: ₹{calculateTotal().toFixed(2)}/-
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
