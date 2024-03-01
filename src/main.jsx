import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/HomeComponent/Home/Home.jsx'
import AboutUs from './Components/AboutUsComponent/AboutUs/AboutUs.jsx'
import Sell from './Components/SellComponent/Sell.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home />}/>
      <Route path='about-us' element={<AboutUs/>}/>
      <Route path='shop' element={<AboutUs/>}/>
      <Route path='sell' element={<Sell/>}/>
      <Route path='contact-us' element={<AboutUs/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
