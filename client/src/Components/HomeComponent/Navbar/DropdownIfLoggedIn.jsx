// DropdownIfLoggedOut.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function DropdownIfLoggedIn({ onLogout }) {
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState("");
  const onProfileClick = () => {
    setProfile(!profile);
  };

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    // const SERVER_URL = "https://cropcompass-farmersownecommerce-1.onrender.com";
    const SERVER_URL = "http://localhost:5000";
    try {
      const response = await axios({
        method: "get",
        url: `${SERVER_URL}/api/auth/user`,
        withCredentials: true,
      });
  
      if (response.data.success) {
        setUserData(response.data.data);
      }
    } catch (error) {
      // Check if error.response.data.success exists and print it
      if (error.response && error.response.data) {
        console.log('ERROR ON USER RENDERING :: '+ error.response.data.message);
      } else {
        console.log("An error occurred while getting user data:", error);
      }
    }
  }
  
  return profile ? (
    <div className="absolute right-1 top-14  bg-white rounded-md shadow-lg z-20 border-2 border-blue-100 text-center font-medium">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="p-5  min-w-56">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {userData.name}
            </div>
            <p className="mt-2.5 text-gray-500">{userData.email}</p>
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
