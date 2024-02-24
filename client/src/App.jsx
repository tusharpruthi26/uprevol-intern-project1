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
import FireExtinguishers from "./pages/Productsitems/FireExtinguishers";
import FireHydrant from "./pages/Productsitems/FireHydrant";
import SprinklerSystem from "./pages/Productsitems/SprinklerSystem";
import IndustrialFireSafety from "./pages/Productsitems/IndustrialFireSafety";
import ElectricalFireSafety from "./pages/Productsitems/ElectricalFireSafety";
import App1 from "./pages/ProductsApplication/app1";
import App2 from "./pages/ProductsApplication/App2";
import App3 from "./pages/ProductsApplication/App3";
import App4 from "./pages/ProductsApplication/App4";
import App5 from "./pages/ProductsApplication/app5";
import App6 from "./pages/ProductsApplication/App6";
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
        <Route path="/productsapplication" element={<ProductsApplication />} />
        <Route path="/app1" element={<App1 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/app3" element={<App3 />} />
        <Route path="/app4" element={<App4 />} />
        <Route path="/app5" element={<App5 />} />
        <Route path="/app6" element={<App6 />} />
        <Route path="/productsapplication" element={<ProductsApplication />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
