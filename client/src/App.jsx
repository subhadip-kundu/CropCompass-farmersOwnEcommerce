import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/HomeComponent/Navbar/Navbar';
import Copyright from './Components/HomeComponent/Footer/Copyright';
import { CartProvider } from './CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider> 
      <Navbar />
      <Outlet />
      <Copyright />
    </CartProvider>
  )
}

export default App
