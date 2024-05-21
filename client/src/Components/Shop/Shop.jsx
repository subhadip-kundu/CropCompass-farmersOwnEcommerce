import React from "react";
import FoodGrid from "./FoodGrid";
import { useSelector } from "react-redux";
import { CartProvider } from "../../CartContext"; // Import CartProvider

const CenteredMessage = () => {
  return (
    <div className="flex items-center justify-center h-screen font-Rubik">
      <h1 className="text-8xl font-bold leading-loose text-transparent bg-clip-text bg-gradient-to-r from-lime-700 via-cyan-500 to-pink-500 animate-pulse">
      Please login first!
      </h1>
    </div>
  );
};

function Shop() {
  const isLoggedIn = useSelector((state) => state.isLogged.value);
  return (
    <CartProvider> {/* Wrap Shop with CartProvider */}
      {isLoggedIn ? <FoodGrid /> : <CenteredMessage />}
    </CartProvider>
  );
}

export default Shop;
