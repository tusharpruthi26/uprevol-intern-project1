import React from "react";

import companyLogo from "../components/logoo.png";
export default function Footer() {
  return (
    <div className="bg-black text-white ">
      <div className="container text-center">
        <div className="flex justify-around py-10 ">
          <div className=" w-1/4">
            <div className="text-sm">
              {/*image */}
              <img className="mr-3 h-6 sm:h-20" src={companyLogo}></img>
            </div>
            <p className="text-sm  py-3 text-justify ">
              Safety equipment includes a range of tools and devices that are
              designed to help prevent fires, detect them early, and extinguish
              them quickly.
            </p>
            <div className="icons-container flex space-x-3 ">
              <div className="cursor-pointer px-3 py-3 w-8 h-8  rounded-lg   flex justify-center items-center">
                <i className="fa-brands fa-facebook  text-xl"></i>
              </div>
              <div className=" cursor-pointer px-3 py-4 w-8 h-8 rounded-lg  flex justify-center items-center">
                <i className="fa-brands fa-square-instagram text-xl "></i>
              </div>
              <div className=" cursor-pointer px-3 py-4 w-8 h-8  rounded-lg  flex justify-center items-center">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </div>
            </div>
          </div>
          <div className="text-justify">
            <h1>Services</h1>
            <div className="py-4 text-justify">
              <h2>FIRE BRIGADE</h2>
              <h2>MANPOWER SUPPLIER</h2>
              <h2>FIREFIGHTING TRAINING</h2>
              <h2>FIRE SAFETY EDUCATIONAL COURSES</h2>
              <h2>CONSTRUCTION PROJECT LIAISONING</h2>
            </div>
          </div>
          <div className="text-justify">
            <h1>Company</h1>
            <div className="py-4 text-justify">
              <h2>About Us</h2>
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="w-1/4 text-justify">
            <h1>Address</h1>
            <div className=" py-4 text-justify ">
              <p>
                {" "}
                Plot No. 1107, First Floor, Sector 47, Sohna Road, Near ILD
                Mall, Gurgaon
              </p>
              <h2>monolithsafetyexperts@gmail.com</h2>
              <h2>+91 9354318440</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-6">
          <div className="flex justify-around">
            <div className="col">
              <h2>@Copyright 2023 - Monolith Safety Experts</h2>
            </div>
            <div className="col">
              <h2>Design & Development By UpRevol Technologies</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
