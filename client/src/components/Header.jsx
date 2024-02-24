import React, { useState } from "react";
import { Dropdown } from "flowbite-react";

import {
  Navbar,
  NavbarBrand,
  NavbarLink,
  DropdownItem,
  NavbarToggle,
} from "flowbite-react";
import logo from "./logo.png";

export default function Header() {
  return (
    <Navbar className="bg-black h-36 flex justify-between items-center">
      <div className="flex items-center">
        <NavbarBrand>
          <img
            src={logo}
            className="h-36 w-64 pl-2 pt-2"
            alt="Flowbite React Logo"
          />
        </NavbarBrand>
      </div>

      <div className="flex justify-end space-x-8">
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/services" active>
          Services
        </NavbarLink>
        {/* Dropdown */}
        <div className="flex pt-5">
          <Dropdown
            label=<a href="/products">Products</a>
            style={{ border: "none", marginRight: "10px" }}
          >
            {/* Dropdown items */}
            <DropdownItem href="/FireExtinguishers">
              Fire Extinguishers
            </DropdownItem>
            <DropdownItem href="/FireHydrant">
              Fire Hydrant Services
            </DropdownItem>
            <DropdownItem href="/SprinklerSystem">
              Sprinkler-System
            </DropdownItem>
            <DropdownItem href="/IndustrialFireSafety">
              Industrial fire Safety Equipments
            </DropdownItem>
            <DropdownItem href="/ElectricalFireSafety">
              Electrical Fire Safety Panels
            </DropdownItem>
          </Dropdown>
          <Dropdown
            label=<a href="/productsapplication">Products application</a>
            style={{ border: "none" }}
          >
            {/* Dropdown items */}
            <DropdownItem href="/app1">Power Plants</DropdownItem>
            <DropdownItem href="/app2">Building & Construction</DropdownItem>
            <DropdownItem href="/app3">Restaurants & Server Room</DropdownItem>
            <DropdownItem href="/app4">
              Hangars, Dockyards & Airport
            </DropdownItem>
            <DropdownItem href="/app5">Residential Areas</DropdownItem>
            <DropdownItem href="/app6">Oil Refineries</DropdownItem>
          </Dropdown>
        </div>
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
