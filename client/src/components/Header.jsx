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
import { IoLogoReact } from "react-icons/io5";

export default function Header() {
  return (
    <Navbar className="bg-black h-36 flex justify-between items-center">
      <div className="flex items-center">
        <NavbarBrand>
          {/* <img src="" className="h-36 w-64 pl-2 pt-2" alt=" Logo" /> */}
          <IoLogoReact className="text-white h-16 w-20" />
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
          <Dropdown label=<a href="/blogs">Blogs</a> style={{ border: "none" }}>
            {/* Dropdown items */}
            <DropdownItem href="/app1">category1</DropdownItem>
            <DropdownItem href="/app2">category2</DropdownItem>
            <DropdownItem href="/app3">category3</DropdownItem>
            <DropdownItem href="/app4">category4</DropdownItem>
            <DropdownItem href="/app5">category5</DropdownItem>
            <DropdownItem href="/app6">category6</DropdownItem>
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
