// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Home from "./Components/HomeComponent/Home/Home.jsx";
// import AboutUs from "./Components/AboutUsComponent/AboutUs/AboutUs.jsx";
// import Sell from "./Components/Sell/Sell.jsx";
// import Contact from "./Components/Contactsomponent/Contact.jsx";
// import Shop from "./Components/Shop/Shop.jsx";
// import Page404 from "./Components/ERROR/Page404.jsx";
// import Success from "./Components/Success.jsx";
// import LoginSignup from "./Components/LoginSignup.jsx";
// import Shoping from "./Components/Shop/Shoping.jsx";
// import { store } from "./redux/store.js";
// import { Provider } from "react-redux";
// import ContactSubmit from "./Components/ContactSubmit.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="" element={<Home />} />
//       <Route path="about-us" element={<AboutUs />} />
//       <Route path="shop" element={<Shop />} />
//       <Route path="sell" element={<Sell />} />
//       <Route path="contact-us" element={<Contact />} />
//       <Route path="Success" element={<Success />} />
//       <Route path="ContactSubmitted" element={<ContactSubmit />} />
//       <Route path="register" element={<LoginSignup />} />
//       <Route path="shoping" element={<Shoping />} />
//       <Route path="*" element={<Page404 />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CartProvider } from "./CartContext"; // Import CartProvider
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Home from "./Components/HomeComponent/Home/Home.jsx";
import AboutUs from "./Components/AboutUsComponent/AboutUs/AboutUs.jsx";
import Sell from "./Components/Sell/Sell.jsx";
import Contact from "./Components/Contactsomponent/Contact.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Page404 from "./Components/ERROR/Page404.jsx";
import Success from "./Components/Success.jsx";
import LoginSignup from "./Components/LoginSignup.jsx";
import Shoping from "./Components/Shop/Shoping.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import AddressForm from "./Components/Address/AddressForm.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="shop" element={<Shop />} />
      <Route path="sell" element={<Sell />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="Success" element={<Success />} />
      <Route path="ContactSubmitted" element={<Success />} />
      <Route path="register" element={<LoginSignup />} />
      <Route path="shoping" element={<Shoping />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/address" element={<AddressForm />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
