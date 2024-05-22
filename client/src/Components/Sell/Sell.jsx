import React from "react";
import FarmerInputForm from "./FarmarInputForm";
import { useSelector } from "react-redux";
import PleaseLogin from "../PleaseLogin";


function Sell() {
  const isLoggedIn = useSelector((state) => state.isLogged.value);
  return !isLoggedIn ? (
    <PleaseLogin />
  ) : (
    <div className="min-h-[90vh] flex justify-center items-center w-[75%] mx-auto">
      <FarmerInputForm />
    </div>
  );
}

export default Sell;
