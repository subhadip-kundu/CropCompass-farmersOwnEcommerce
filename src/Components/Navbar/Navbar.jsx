import React from 'react'
import companyLogo from '../../assets/AgroConnectBazaar.png'
function Navbar() {
  return (
    <div>
      <div className="flex justify-between w-full bg-green-50 pl-10 p-2 pr-10 align-middle ">
        <section className="logo">
          <img src={companyLogo} alt="Logo_image" className='w-44 cursor-pointer' />
        </section>
        <section className="pt-6">
          <ul>
            <li className='flex justify-center gap-6 font-bold font-Rubik '>
              <a href="#" className=' text-red-600 border-b-2 border-red-600 text-lg -mt-1'>Home</a>
              <a href="#" className=' hover:text-red-600 duration-200'>About Us</a>
              <a href="#" className=' hover:text-red-600 duration-200'>Services</a>
              <a href="#" className=' hover:text-red-600 duration-200'>Shop</a>
              <a href="#" className=' hover:text-red-600 duration-200'>Blog</a>
              <a href="#" className=' hover:text-red-600 duration-200'>Contact Us</a>
            </li>
          </ul>
        </section>
        <section className="flex gap-8 pt-6">
          <i className="fa-regular fa-user cursor-pointer hover:scale-105 duration-200"></i>
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:scale-105 duration-200"></i>
        </section>
      </div>
    </div>
  )
}

export default Navbar;
