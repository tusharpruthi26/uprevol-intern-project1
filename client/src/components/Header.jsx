import React, { useState } from "react";
import Dropdown from "../Dropdown";

import {
  Navbar,
  NavbarBrand,
  NavbarLink,
  DropdownItem,
  NavbarToggle,
} from "flowbite-react";
import logo from "./logoo.png";

export default function Header() {
  const products = [
    { label: "Fire Extinguishers", href: "/Fireextinguishers" },
    { label: "Fire Hydrant Services", href: "" },
    { label: "Sprinkler-System", href: "" },
    { label: "Industrial fire Safety Equuipments", href: "" },
  ];

  const productsApplication = [
    { label: "Application 1", href: "#" },
    { label: "Application 2", href: "#" },
    { label: "Application 3", href: "#" },
  ];
  return (
    <Navbar className="bg-black h-28">
      <NavbarBrand>
        <img src={logo} className="h-20 pl-4 pt-2" alt="Flowbite React Logo" />
      </NavbarBrand>

      <div className="h-20 flex space-x-8">
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/services" active>
          Services
        </NavbarLink>

        {/* Dropdown */}
        <Dropdown title="products" items={products} />
        <Dropdown title="products" items={productsApplication} />
        <NavbarLink href="/about" active>
          About
        </NavbarLink>
        <NavbarLink href="/contact" active>
          Contact
        </NavbarLink>
      </div>
    </Navbar>
  );
}
