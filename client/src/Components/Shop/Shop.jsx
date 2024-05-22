import React from "react";
import FoodGrid from "./FoodGrid";
// import { useSelector } from "react-redux";
import { CartProvider } from "../../CartContext"; // Import CartProvider
import PleaseLogin from "../PleaseLogin";

function Shop() {
  // const isLoggedIn = useSelector((state) => state.isLogged.value);
  return (
    <CartProvider>
      <FoodGrid />
    </CartProvider>
  );
}

export default Shop;
