import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DropdownIfLoggedIn from "./DropdownIfLoggedIn";
import companyLogo from "../../../assets/cropcompass.png";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "../../../redux/logged/loggedSlice";
import axios from "axios";

function Navbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLogged.value);

  const toggleDropdown = () => {
    if (isLoggedIn) {
      setShowDropdown(!showDropdown);
    }
  };

  const handleLogin = () => {
    // Add your login logic here
    if (!isLoggedIn) {
      const reg = `register`;
      navigate(reg);
    }
  };

  const handleLogout = async () => {
    // const SERVER_URL = "https://cropcompass-farmersownecommerce-1.onrender.com";
    const SERVER_URL = "http://localhost:5000";
    try {
      const response = await axios({
        method: "get",
        url: `${SERVER_URL}/api/auth/logout`,
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(isLogged(false));
        setShowDropdown(false);
      }
    } catch (error) {
      // Check if error.response.data.success exists and print it
      if (error.response && error.response.data && error.response.data.success) {
        console.log(error.response.data.message);
      } else {
        console.log("An error occurred while logging out:", error);
      }
    }
  };
  

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click occurred outside of the dropdown, close the dropdown
      setShowDropdown(false);
    }
  };

  const toHome = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div>
      <nav className="flex justify-between w-full bg-[#EBEAEA] pl-10  pr-10 items-center p-2.5">
        <section className="logo">
          <img
            src={companyLogo}
            alt="Logo_image"
            className=" h-9 cursor-pointer"
            onClick={toHome}
          />
        </section>
        <section className="p-3">
          <ul>
            <li className="flex justify-center gap-6 font-bold font-Rubik ">
              <NavLink
                to="/"
                className={({ isActive }) => `
                  text-lg duration-150  ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 -mt-1"
                      : "text-black"
                  }
              `}
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) => `
                  text-lg duration-150  ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 -mt-1"
                      : "text-black"
                  }
              `}
              >
                About Us
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) => `
                  text-lg duration-150  ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 -mt-1"
                      : "text-black"
                  }
              `}
              >
                Shop
              </NavLink>
              <NavLink
                to="/sell"
                className={({ isActive }) => `
                  text-lg duration-150  ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 -mt-1"
                      : "text-black"
                  }
              `}
              >
                Sell
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => `
                  text-lg duration-150  ${
                    isActive
                      ? "text-red-600 border-b-2 border-red-600 -mt-1"
                      : "text-black"
                  }
              `}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </section>
        <section className="gap-8 px-3 flex items-center justify-center" ref={dropdownRef}>
          {isLoggedIn ? (
            <>
              <i
                className="fa-regular fa-user cursor-pointer hover:scale-105 duration-200"
                onClick={toggleDropdown}
              ></i>
              {showDropdown && <DropdownIfLoggedIn onLogout={handleLogout} />}
            </>
          ) : (
            <>
              <i
                className="fa-regular fa-user cursor-pointer hover:scale-105 duration-200"
                onClick={handleLogin}
              ></i>
              {showDropdown && <DropdownIfLoggedIn />}
            </>
          )}
          <NavLink to="/cart">
            <i className="fa-solid fa-cart-shopping cursor-pointer hover:scale-105 duration-200"></i>
          </NavLink>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
