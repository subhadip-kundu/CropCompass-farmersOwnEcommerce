import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/HomeComponent/Navbar/Navbar';
import Copyright from './Components/HomeComponent/Footer/Copyright';


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Copyright />
    </>
  )
}

export default App
