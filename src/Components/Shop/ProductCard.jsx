import React from 'react';

const ProductCard = ({ item }) => {
  const { name, price, category, image } = item;

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${name} to cart`);
  };

  const handleBuyNow = () => {
    // Implement your buy now logic here
    console.log(`Buying ${name} now`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Price: ${price}</p>
        <p className="text-gray-700 text-base">Category: {category}</p>
      </div>
      <div className="px-6 py-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
