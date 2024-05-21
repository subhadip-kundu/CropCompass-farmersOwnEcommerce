// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus, faBolt, faPhone } from "@fortawesome/free-solid-svg-icons";

// const ProductCard = ({ item }) => {
//   let [addCart, setAddCart] = useState([]);
//   const { itemName, price, block, imageUrl, quantity, number } = item;
//   const [phoneClick, setPhoneClick] = useState(false);

//   const calling = () => {
//     setPhoneClick(!phoneClick);
//   };

//   const handleAddToCart = () => {
//     console.log(`Added ${itemName} to cart`);
//   };

//   const handleBuyNow = () => {
//     console.log(itemName);
//   };

//   return (
//     <div className="max-w-sm  rounded overflow-hidden shadow-lg border-2 border-cyan-100 h-fit font-Rubik  bg-white">
//       <img
//         src={imageUrl}
//         alt={itemName}
//         className="w-full h-52 border-b-2 border-cyan-100"
//       />
//       <div className="px-4 py-3">
//         <div className="flex w-full justify-between pr-4">
//           <div className="font-medium text-xl py-2 mb-1 capitalize">
//             {itemName}
//           </div>
//           <button
//             onClick={calling}
//             className="bg-green-500 hover:bg-green-600 text-white h-fit font-semibold text-sm py-3 px-3 rounded-full flex  items-center justify-center "
//           >
//             {phoneClick ? (
//               <p>
//                 <FontAwesomeIcon className="rotate-45" icon={faPhone}/> &nbsp; +91 {number}
//               </p>
//             ) : (
//               <FontAwesomeIcon icon={faPhone} />
//             )}
//           </button>
//         </div>
//         <p className="text-gray-700 text-base">Price: ₹{price}/-</p>
//         <p className="text-gray-700 text-base">Area: {block}</p>
//         <p className="text-gray-700 text-base">Quantity: {quantity} kg</p>
//       </div>
//       <div className="w-full flex items-center justify-around pb-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded mr-2 flex gap-2 items-center justify-center"
//           onClick={handleAddToCart}
//         >
//           <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
//         </button>
//         <button
//           className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-2 px-4 rounded flex gap-2 items-center justify-center"
//           onClick={handleBuyNow}
//         >
//           {" "}
//           <FontAwesomeIcon icon={faBolt} /> Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBolt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../CartContext";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();
  const { itemName, price, block, imageUrl, quantity, number } = item;
  const [phoneClick, setPhoneClick] = useState(false);

  const calling = () => {
    setPhoneClick(!phoneClick);
  };

  const handleAddToCart = () => {
    addToCart(item);
    console.log(`Added ${itemName} to cart`);
  };

  const handleBuyNow = () => {
    console.log(itemName);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 border-cyan-100 h-fit font-Rubik bg-white">
      <img
        src={imageUrl}
        alt={itemName}
        className="w-full h-52 border-b-2 border-cyan-100"
      />
      <div className="px-4 py-3">
        <div className="flex w-full justify-between pr-4">
          <div className="font-medium text-xl py-2 mb-1 capitalize">
            {itemName}
          </div>
          <button
            onClick={calling}
            className="bg-green-500 hover:bg-green-600 text-white h-fit font-semibold text-sm py-3 px-3 rounded-full flex items-center justify-center"
          >
            {phoneClick ? (
              <p>
                <FontAwesomeIcon className="rotate-45" icon={faPhone} /> &nbsp;
                +91 {number}
              </p>
            ) : (
              <FontAwesomeIcon icon={faPhone} />
            )}
          </button>
        </div>
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
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-2 px-4 rounded flex gap-2 items-center justify-center"
          onClick={handleBuyNow}
        >
          <FontAwesomeIcon icon={faBolt} /> Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
