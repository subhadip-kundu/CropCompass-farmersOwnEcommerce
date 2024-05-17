import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBolt } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ item }) => {
  let [addCart, setAddCart] = useState([]);
  const { itemName, price, block, imageUrl, quantity } = item;
  const itemSlice = { name: itemName, pri: price, area: block };

  const handleAddToCart = () => {
    // console.log(`Added ${itemName} to cart`);
    setAddCart((addCart) => [...addCart, itemSlice]);
  };

  const handleBuyNow = () => {
    console.log(itemName);
  };

  useEffect(() => {
    addCart.map((e) => console.log(e));
  }, [addCart]);

  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg border-2 border-cyan-100 h-fit font-Rubik  bg-white">
      <img
        src={imageUrl}
        alt={itemName}
        className="w-full h-52 border-b-2 border-cyan-100"
      />
      <div className="px-4 py-3">
        <div className="font-medium text-xl mb-2 capitalize">{itemName}</div>
        <p className="text-gray-700 text-base">Price: ₹{price}/-</p>
        <p className="text-gray-700 text-base">Area: {block}</p>
        <p className="text-gray-700 text-base">Quantity: {quantity} kg</p>
      </div>
      <div className="w-full flex items-center justify-around pb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded mr-2 flex gap-2 items-center justify-center"
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-semibold text-sm py-2 px-4 rounded flex gap-2 items-center justify-center"
          onClick={handleBuyNow}
        >
          {" "}
          <FontAwesomeIcon icon={faBolt} /> Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
