import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DropdownIfLoggedIn from './DropdownIfLoggedIn';
import DropdownIfLoggedOut from './DropdownIfLoggedOut';
import companyLogo from '../../../assets/cropcompass.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Add your login logic here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here
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

  let navigate = useNavigate(); 
  const toHome = () =>{ 
    let path = `/`; 
    navigate(path);
  }

  return (
    <div>
      <nav className="flex justify-between w-full bg-gray-50 pl-10  pr-10 align-middle ">
        <section className="logo">
          <img src={companyLogo} alt="Logo_image" className='w-24 cursor-pointer' onClick={toHome}/>
        </section>
        <section className="pt-6">
          <ul>
            <li className='flex justify-center gap-6 font-bold font-Rubik '>
              <NavLink to="/" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-black"}
              `}>Home</NavLink>
              <NavLink to="/about-us" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-black"}
              `}>About Us</NavLink>
              <NavLink to="/shop" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-black"}
              `}>Shop</NavLink>
              <NavLink to="/sell" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-black"}
              `}>Sell</NavLink>
              <NavLink to="/contact-us" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-black"}
              `}>Contact Us</NavLink>
            </li>
          </ul>
        </section>
        <section className="flex gap-8 pt-6" ref={dropdownRef}>
          {isLoggedIn ? (
            <React.Fragment>
              <i className="fa-regular fa-user cursor-pointer hover:scale-105 duration-200" onClick={toggleDropdown}></i>
              {showDropdown && <DropdownIfLoggedOut onLogout={handleLogout} />}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <i className="fa-regular fa-user cursor-pointer hover:scale-105 duration-200" onClick={handleLogin}></i>
              {showDropdown && <DropdownIfLoggedIn />}
            </React.Fragment>
          )}
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:scale-105 duration-200"></i>
        </section>
      </nav>
    </div>
  )
}

export default Navbar;
