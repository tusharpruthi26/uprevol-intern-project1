import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="bg-black text-white items-center">
        <div className=" flex px-20 py-20 ">
          <div className=" px-20 py-10 w-1/2">
            <h1 className="text-6xl">Contact</h1>
            <p className="py-5 text-2xl">
              Feel free to contact us for any questions and doubts
            </p>
            <p className="text-md text-justify">
              We offer a plethora of services that cover a wide range of
              industries, including industrial, corporate, civil, and almost
              every important work field safety needs. Our clients can choose
              from a vast number of brands and products according to their
              budget, ensuring that they get the best value for their money.
            </p>
            <div className="py-10">
              <h4>Keep In touch</h4>
              <div className="icons-container flex space-x-3 py-5">
                <div className="cursor-pointer px-3 py-3 w-8 h-8  rounded-lg   flex justify-center items-center">
                  <i className="fa-brands fa-facebook  text-3xl"></i>
                </div>
                <div className=" cursor-pointer px-3 py-4 w-8 h-8  rounded-lg  flex justify-center items-center">
                  <i className="fa-brands fa-square-twitter text-3xl "></i>
                </div>
                <div className=" cursor-pointer px-3 py-4 w-8 h-8  rounded-lg  flex justify-center items-center">
                  <i className="fa-brands fa-linkedin text-3xl"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black px-20 py-20">
            <form>
              <div className="py-2 text-sm">
                <label htmlFor="name" className="text-gray-700">
                  Name
                </label>
                <span className="text-red-500">*</span>
                <br />
                <input
                  type="text"
                  name="name"
                  className="bg-gray-100 text-sm px-1 py-1 w-64"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="py-2 text-sm">
                <label htmlFor="email" className="text-gray-700">
                  Email
                </label>
                <span className="text-red-500">*</span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="bg-gray-100 px-1 py-1 w-64"
                  required
                />
                <br />
              </div>
              <div className="py-2 text-sm">
                <label htmlFor="companyName" className="text-gray-700">
                  Company
                </label>
                <span className="text-red-500">*</span>
                <br />
                <input
                  type="text"
                  name="companyName"
                  className="bg-gray-100 px-1 py-1 w-64"
                  placeholder="Company Name"
                  required
                />
                <br />
              </div>
              <div className="py-2 text-sm">
                <label for="message" className="text-gray-700">
                  Message
                </label>
                <span className="text-red-500">*</span>
                <br />
                <textarea
                  className="bg-gray-100 px-1 py-2 w-64"
                  placeholder="Enter Message Here"
                  rows="2"
                ></textarea>
              </div>
              <div className="py-3">
                <a
                  href=""
                  className="text-red-500 border border-red-500 py-1 px-3 text-sm"
                >
                  Send Me Quote
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      <div className="container px-20 py-20">
        <div className="flex justify-around">
          <div className="w-1/3">
            <i
              aria-hidden="true"
              className="fas fa-map-marker-alt text-red-500"
            ></i>
            <h6 className="">
              <span>Head Office</span>
            </h6>
            <p className="">
              Plot No. 1107, First Floor, Sector 47, Sohna Road, Near ILD Mall,
              Gurgaon
            </p>
          </div>
          <div className="">
            <i aria-hidden="true" className="fas fa-phone text-red-500"></i>
            <div className="">
              <h6 className="">
                <span>Phone</span>
              </h6>
              <p className="">+91 9354318440</p>
            </div>
          </div>
          <div className="">
            <i aria-hidden="true" className="fas fa-envelope text-red-500"></i>
            <div className="elementor-icon-box-content">
              <h6 className="elementor-icon-box-title">
                <span>Email</span>
              </h6>
              <p className="elementor-icon-box-description">
                monolithsafetyexperts@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------- */}
      <div className=" px-20 py-20 border">
        <div className="">
          <iframe
            loading="lazy"
            className="h-96 w-full"
            src="https://maps.google.com/maps?q=Plot%20No.%201107%2C%20First%20Floor%2C%20Sector%2047%2C%20Sohna%20Road%2C%20Near%20ILD%20Mall%2C%20Gurgaon&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
            title="Plot No. 1107, First Floor, Sector 47, Sohna Road, Near ILD Mall, Gurgaon"
            aria-label="Plot No. 1107, First Floor, Sector 47, Sohna Road, Near ILD Mall, Gurgaon"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
