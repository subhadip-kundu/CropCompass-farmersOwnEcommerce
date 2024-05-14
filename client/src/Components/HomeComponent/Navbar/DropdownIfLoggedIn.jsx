// DropdownIfLoggedOut.js
import React, { useState } from "react";
const axios = require('axios');

function DropdownIfLoggedIn({ onLogout }) {
  const [profile, setProfile] = useState(false);
  const onProfileClick = () => {
    setProfile(!profile);
  };

  


  return profile ? (
    <div className="absolute right-5 top-14 w-48 bg-white rounded-md shadow-lg z-20 border-2 border-blue-100 text-center font-medium">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="p-5 w-fit min-w-48">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {'username'}
            </div>
            <p className="mt-2.5 text-gray-500">{'email'}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="absolute right-1 mt-8 w-48 bg-white rounded-md shadow-lg z-10 border-2 border-blue-100 text-center font-medium">
      <p
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
        onClick={onProfileClick}
      >
        Profile
      </p>
      <a
        href="#"
        className="block  px-4 py-2 text-gray-800 hover:bg-gray-100"
        onClick={onLogout}
      >
        Log Out
      </a>
    </div>
  );
}

export default DropdownIfLoggedIn;
