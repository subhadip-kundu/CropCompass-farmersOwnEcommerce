import React from "react";
import FarmerInputForm from "./FarmarInputForm";
import { useSelector } from "react-redux";

const CenteredMessage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-8xl font-bold leading-loose text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse">
      Please login first!
      </h1>
    </div>
  );
};

function Sell() {
  const isLoggedIn = useSelector((state) => state.isLogged.value);
  return !isLoggedIn ? (
    <CenteredMessage />
  ) : (
    <div className="min-h-[90vh] flex justify-center items-center w-[75%] mx-auto">
      <FarmerInputForm />
    </div>
  );
}

export default Sell;
