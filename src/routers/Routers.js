import { Routes, Route, Navigate } from "react-router-dom";



import Home from "../pages/Home";
import Shop from "../pages/Shop";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";



const Routers = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

    </Routes>
  );
};

export default Routers;
