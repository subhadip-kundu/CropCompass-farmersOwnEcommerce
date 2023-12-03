import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/HomeComponent/Navbar/Navbar';
import Footer from './Components/HomeComponent/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
