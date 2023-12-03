import React from 'react'
import companyLogo from '../../../assets/AgroConnectBazaar.png'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className="flex justify-between w-full bg-green-50 pl-10 p-2 pr-10 align-middle ">
        <section className="logo">
          <img src={companyLogo} alt="Logo_image" className='w-44 cursor-pointer' />
        </section>
        <section className="pt-6">
          <ul>
            <li className='flex justify-center gap-6 font-bold font-Rubik '>
              <NavLink to="/" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-gray-800"}
              `}>Home</NavLink>
              <NavLink to="/about-us" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-gray-800"}
              `}>About Us</NavLink>
              <NavLink to="/services" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-gray-800"}
              `}>Services</NavLink>
              <NavLink to="/shop" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-gray-800"}
              `}>Shop</NavLink>
              <NavLink to="/blog" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-gray-800"}
              `}>Blog</NavLink>
              <NavLink to="/contact-us" className={({ isActive }) => `
                  text-lg duration-150  ${isActive ? "text-red-600 border-b-2 border-red-600 -mt-1" : "text-gray-800"}
              `}>Contact Us</NavLink>
            </li>
          </ul>
        </section>
        <section className="flex gap-8 pt-6">
          <i className="fa-regular fa-user cursor-pointer hover:scale-105 duration-200"></i>
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:scale-105 duration-200"></i>
        </section>
      </nav>
    </div>
  )
}

export default Navbar;
