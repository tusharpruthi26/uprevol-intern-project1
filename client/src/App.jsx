import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Products from "./pages/products";
import ProductsApplication from "./pages/ProductsApplication";
import About from "./pages/about";
import Contact from "./pages/contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Productsitem1 from "./pages/Productsitems/Productsitem1";
import { DropdownItem } from "flowbite-react";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsitem1" element={<Productsitem1 />} />
        <Route path="/productsapplication" element={<ProductsApplication />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
