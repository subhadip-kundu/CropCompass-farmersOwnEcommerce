import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-4 border-b-4 border-b-red-500 border-transparent rounded-full animate-spin-reverse"></div>
        <div className="absolute inset-0 border-4 border-t-4 border-t-green-500 border-transparent rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
