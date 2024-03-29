import React from "react";

import companyLogo from "../components/logo.png";
import { IoLogoReact } from "react-icons/io5";
export default function Footer() {
  return (
    <div className="bg-black text-white ">
      <div className="container text-center">
        <div className="flex justify-around py-10 ">
          <div className=" w-1/4">
            <div className="text-sm">
              {/*image */}
              {/* <img className="mr-3 h-6 sm:h-20" src={companyLogo}></img> */}
              <IoLogoReact className="text-white h-16 w-20" />
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
            <a href="/services">Services</a>
            <div className="py-4 text-justify">
              <h2>Service 1</h2>
              <h2>Service 2</h2>
              <h2>Service 3</h2>
              <h2>Service 4</h2>
              <h2>Service 5</h2>
            </div>
          </div>
          <div className="text-justify">
            <h1>Company</h1>
            <div className="py-4 text-justify">
              <a href="/about">About us</a>
              <br />
              <a href="/contact">Contact us</a>
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
              <h2>demo@gmail.com</h2>
              <h2>+91 9354318440</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="container py-6">
          <div className="flex justify-around">
            <div className="col">
              <h2>@Copyright 2023 - demo project </h2>
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
