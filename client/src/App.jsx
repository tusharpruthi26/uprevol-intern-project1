import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FireExtinguishers from "./pages/Productsitems/FireExtinguishers";
import FireHydrant from "./pages/Productsitems/FireHydrant";
import SprinklerSystem from "./pages/Productsitems/SprinklerSystem";
import IndustrialFireSafety from "./pages/Productsitems/IndustrialFireSafety";
import ElectricalFireSafety from "./pages/Productsitems/ElectricalFireSafety";

import { DropdownItem } from "flowbite-react";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/FireExtinguishers" element={<FireExtinguishers />} />
        <Route path="/FireHydrant" element={<FireHydrant />} />
        <Route path="/SprinklerSystem" element={<SprinklerSystem />} />
        <Route
          path="/IndustrialFireSafety"
          element={<IndustrialFireSafety />}
        />
        <Route
          path="/ElectricalFireSafety"
          element={<ElectricalFireSafety />}
        />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
