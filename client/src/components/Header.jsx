import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarLink,
  Dropdown,
  DropdownItem,
  NavbarToggle,
} from "flowbite-react";
import logo from "./logoo.png";

export default function Header() {
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
        <Dropdown label="Products" href="/products" style={{ border: "none" }}>
          <DropdownItem href="#">Fire Extinguishers</DropdownItem>
          <DropdownItem href="#">Fire Hydrant Services</DropdownItem>
          <DropdownItem href="#">Sprinkler-System</DropdownItem>
          <DropdownItem href="#">
            Industrial fire Safety Equipments
          </DropdownItem>
          <DropdownItem href="#">Electrical Fire Safety Panels</DropdownItem>
        </Dropdown>
        <Dropdown
          label="Products application"
          href="/productsapplication"
          style={{ border: "none" }}
        >
          <DropdownItem href="#">Power Plants</DropdownItem>
          <DropdownItem href="#">Building & Construction</DropdownItem>
          <DropdownItem href="#">Restaurants & Server Room</DropdownItem>
          <DropdownItem href="#">Hangars, Dockyards & Airport</DropdownItem>
          <DropdownItem href="#">Residential Areas</DropdownItem>
          <DropdownItem href="#">Oil Refineries</DropdownItem>
        </Dropdown>
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
