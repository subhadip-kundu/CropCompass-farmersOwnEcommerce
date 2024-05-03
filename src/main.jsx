import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/HomeComponent/Home/Home.jsx'
import AboutUs from './Components/AboutUsComponent/AboutUs/AboutUs.jsx'
import Sell from './Components/Sell/Sell.jsx'
import Contact from './Components/Contactsomponent/Contact.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Page404 from './Components/ERROR/Page404.jsx'
import Success from './Components/Success.jsx'
import LoginSignup from './Components/LoginSignup.jsx'
import Shoping from './Components/Shop/Shoping.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about-us' element={<AboutUs />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sell' element={<Sell />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='Success' element={<Success />} />
      <Route path='register' element={<LoginSignup />} />
      <Route path='shoping' element={<Shoping />} />
      <Route path='*' element={<Page404 />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
