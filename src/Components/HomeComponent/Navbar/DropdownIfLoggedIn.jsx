// DropdownIfLoggedIn.js
import React from 'react';

function DropdownIfLoggedIn() {
  return (
    <div className="absolute right-1 mt-8 w-48 bg-white rounded-md shadow-lg z-10 border-2 border-blue-100 text-center font-medium">
      <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Log In</a>
    </div>
  );
}

export default DropdownIfLoggedIn;
