import React, { useState } from "react";

import image from "./images/homeimage.jpg";
import { FaPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import Card, { CardList } from "../Card";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success
        console.log("Quote submitted successfully");
        // Clear form data
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        // Show confirmation message
        setSubmitted(true);
      } else {
        // Handle error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  //       //Handle success, e.g., show a success message to the user
  //       console.log("Form submitted successfully");
  //     } else {
  //       //Handle error, e.g., show an error message to the user
  //       console.error("Form submission failed");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   }
  // };

  return (
    <div>
      <section>
        <div>
          <img
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D"
            alt="fire brigade image"
            className="h-full w-full shadow-2xl"
          />

          <div className=" md:absolute top-1/2 left-1/2 ">
            <p className=" text-white font-bold text-lg ">
              RELIABLE AND TRUSTWORTHY PROVIDER OF TAILOR- <br />
              MADE SERVICES
            </p>

            <br />

            <h1 className="text-white font-bold text-7xl">
              Best Safety <br />
              Services
            </h1>

            <br />

            <p className=" text-white font-bold ">
              Be prepared and stay safe: Your comprehensive safety resource.
            </p>
            <br />
            <button className="px-8 py-3 text-gray-600 hover:bg-gray-800 hover:text-white border border-gray-700 duration-300">
              Quote Now!
            </button>
            <hr className="my-11 border-gray-600"></hr>
            <FaPhone className="text-white bg-gray-700 text-6xl p-3 rounded-full" />
            <p className="text-gray-800 text-lg font-bold">Call Us Today:</p>
            <h3 className="text-white font-semibold text-4xl">
              +91 9354318440
            </h3>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />

      {/* Designing Some of the Finest Projects... */}
      <section>
        <div className="font-mono mx-20 my-20 ">
          <p className="text-gray-400">Architecture & Design</p>
          <br />
          <h1 className="text-gray-800 text-4xl w-3/5">
            Designing Some of the Finest Projects...
          </h1>
        </div>
      </section>
      {/* projects card */}
      <section>
        <div className="flex space-x-20 mx-20">
          <div className="hover:scale-110 duration-150">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fHww"
              alt="image"
              className="hover:opacity-80"
            />
            <br />
            <h1 className="font-bold text-2xl ">Iceland 2005</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
              orci eu dolor vehicula tempus sed vitae odio. Morbi eget ornare
              ipsum. Aliquam erat ante, euismod nec euismod quis, fringilla nec
              lacus.
            </p>
          </div>
          <div className="hover:scale-110 duration-150">
            <img
              src="https://imgs.search.brave.com/O9vHMdQvTg-Q_5xxqtjrQGW2ELBxe4zSUaNROF2Ckn8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cm9qZWN0LW1hbmFn/ZW1lbnQtcGxhbm5p/bmctZGV2ZWxvcG1l/bnQtbWVzc2FnZS1i/b3gtbm90aWZpY2F0/aW9uLWdyYXBoaWNf/NTM4NzYtMTIzOTAy/LmpwZz9zaXplPTYy/NiZleHQ9anBn"
              alt="image"
              className="hover:opacity-80"
            />
            <br />
            <h1 className="font-bold text-2xl">Norway 1999</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
              orci eu dolor vehicula tempus sed vitae odio. Morbi eget ornare
              ipsum. Aliquam erat ante, euismod nec euismod quis, fringilla nec
              lacus.
            </p>
          </div>
          <div className="hover:scale-110 duration-150">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYnxlbnwwfHwwfHx8MA%3D%3D"
              alt="image"
              className="hover:opacity-80"
            />
            <br />
            <h1 className="font-bold text-2xl">Faroe Islands 2010</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
              orci eu dolor vehicula tempus sed vitae odio. Morbi eget ornare
              ipsum. Aliquam erat ante, euismod nec euismod quis, fringilla nec
              lacus.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      {/* contributors */}
      <section>
        <div className="float-right mx-20">
          <div className="flex items-center space-x-2 text-base">
            <h4 className="font-semibold text-slate-900">Contributors</h4>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
              204
            </span>
          </div>
          <div className="mt-3 flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="mt-3 text-sm font-medium">
            <a href="#" className="text-blue-500">
              + 198 others
            </a>
          </div>
        </div>
      </section>

      {/* We have worked with some of the top brands... */}
      <section>
        <div className="flex bg-gray-200 my-40 shadow-2xl rounded-3xl mx-10 hover:scale-105 duration-150">
          <div className="mx-20 my-32 font-mono font-bold text-2xl w-2/5">
            We have worked with some of the top brands...
          </div>
          <div className="flex space-x-10 mx-">
            <img src="https://assets-global.website-files.com/604a43be067258e3cfd48400/604a9c5130b93d0a4fe777ad_logo-2.svg" />
            <img src="https://assets-global.website-files.com/604a43be067258e3cfd48400/604a9c51956929dde7fbf69d_logo-3.svg" />
            <img src="https://assets-global.website-files.com/604a43be067258e3cfd48400/604a9c52929b95917e2b4384_logo-1.svg" />
            <img src="https://assets-global.website-files.com/604a43be067258e3cfd48400/604a9c52fbef19e5eb29e10f_logo-4.svg" />
            <img src="https://assets-global.website-files.com/604a43be067258e3cfd48400/604a9c52b0a8651b898102c9_logo-5.svg" />
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto flex flex-col items-center py-2 md:flex-row py-2">
          <div className="w-full md:w-2/3 flex items-center justify-center">
            <div className="w-full md:w-1/2 space-y-2">
              <h1 className="text-2xl md:text-2xl font-bold text-center md:text-left">
                Equip yourself for emergencies: The latest and most reliable
                safety equipments
              </h1>
              <p className="text-center md:text-left">
                This helps to emphasize the importance of having the right
                safety equipment to protect yourself and your property from fire
                emergencies. It suggests that the equipment being offered is the
                latest and most reliable, which can give potential customers
                confidence in their purchase. The use of the phrase “equip
                yourself” also highlights the proactive approach to fire safety,
                encouraging individuals and businesses to take action before an
                emergency occurs.
              </p>
              <br />
              <br />
              <a
                href="/about"
                className="text-orange-500 text-center md:text-left"
              >
                About us <i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
            </div>
          </div>

          <div className="bg-gray-700 text-white items-center p-5 md:p-20 w-full md:w-1/2 mt-10 md:mt-0 rounded-3xl hover:scale-110 duration-150">
            <h1 className="py-5 text-center md:text-left">
              Let's Talk our Expertise
            </h1>
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl">
                  5+<i className="fa-solid fa-plus"></i>
                </h1>
                <h1>Years In Business</h1>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl">
                  500+<i className="fa-solid fa-plus"></i>
                </h1>
                <h1>Happy Customers</h1>
              </div>
            </div>
            <br />
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl">
                  5<i className="fa-solid fa-plus"></i>
                </h1>
                <h1>Licensed Officer</h1>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl">
                  200+<i className="fa-solid fa-plus"></i>
                </h1>
                <h1>Assets Protected</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <section>
        <div className="container mx-auto px-4">
          <div className="">
            <CardList />
          </div>
        </div>
      </section> */}
      {/* <div className="flex bg-gray-100 px-18 py-20">
          <div className="card w-full px-7 " style={{ width: "30rem" }}>
            <img
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/pendent-type-sprinkler-500x500-2.webp"
              alt="Pendent Type Sprinkler"
              className="rounded-3xl"
            />
            <div>
              <p className="text-gray-400">Safety Equipment</p>
              <p className="font-semibold">Pendent Type Sprinkler</p>
              <p>★ ★ ★ ★ ★</p>

              <p className="text-gray-600 font-semibold">₹215.00</p>
              <button className="text-red-600 hover:bg-red-600 hover:text-white border border-red-600 text-xl px-6 py-2 mt-3">
                ADD TO CART
              </button>
              <button className=" text-white bg-red-600 px-24 mt-3  ">
                ENQUIRY NOW
              </button>
            </div>
          </div>
          <div className="card w-full px-7 " style={{ width: "30rem" }}>
            <img
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/fire-extinguisher-500x500-1-300x300.webp"
              alt="Karam Safety Belts"
              className="rounded-3xl"
            />
            <div>
              <p className="text-gray-400">Safety Equipment</p>
              <p className="font-semibold">Pendent Type Sprinkler</p>
              <p>★ ★ ★ ★ ★</p>
              <p className="text-gray-600 font-semibold">₹1,670.00</p>
              <button className="text-red-600 hover:bg-red-600 hover:text-white border border-red-600 text-xl px-6 py-2 mt-3">
                ADD TO CART
              </button>
              <button className=" text-white bg-red-600 px-24 mt-3  ">
                ENQUIRY NOW
              </button>
            </div>
          </div>
          <div className="card w-full px-7 " style={{ width: "30rem" }}>
            <img
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/fire-hose-reel-500x500-2-300x300.webp"
              alt="Disposable Nitrile Gloves"
              className="rounded-3xl"
            />
            <div>
              <p className="text-gray-400">Safety Equipment</p>
              <p className="font-semibold">Pendent Type Sprinkler</p>
              <p>★ ★ ★ ★ ★</p>
              <p className="text-gray-600 font-semibold">₹210.00</p>
              <button className="text-red-600 hover:bg-red-600 hover:text-white border border-red-600 text-xl px-6 py-2 mt-3">
                ADD TO CART
              </button>
              <button className=" text-white bg-red-600 px-24 mt-3  ">
                ENQUIRY NOW
              </button>
            </div>
          </div>
          <div className="card w-full px-7 " style={{ width: "30rem" }}>
            <img
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2024/01/fire-escape-aluminum-rope-ladder-500x500-1-300x300.webp"
              alt="Fire Escape"
              className="rounded-3xl"
            />
            <div>
              <p className="text-gray-400">Safety Equipment</p>
              <p className="font-semibold">Pendent Type Sprinkler</p>
              <p>★ ★ ★ ★ ★</p>
              <p className="text-gray-600 font-semibold">₹2,500.00</p>
              <button className="text-red-600 hover:bg-red-600 hover:text-white border border-red-600 text-xl px-6 py-2 mt-3">
                ADD TO CART
              </button>
              <button className=" text-white bg-red-600 px-24 mt-3  ">
                ENQUIRY NOW
              </button>
            </div>
          </div>
        </div> */}
      <section>
        <div className="bg-gray-800 ">
          <div className=" text-center px-20 py-20">
            <h4 className="text-white">WHY CHOOSE US</h4>
            <h1 className="text-4xl text-white py-5">What Sets Us Apart</h1>

            <div className="px-10 py-5">
              <div className="container ">
                <div className="flex">
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 hover:scale-110 duration-150">
                    <div className="text-left">
                      <i className="fa-solid fa-clock text-red-600 text-2xl "></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Perfection Anytime
                    </h1>
                    <p className="py-1 text-justify text-white text-sm">
                      It is about setting high standards for oneself and
                      embracing the journey of growth, rather than fixating on
                      end result it can lead to personal and professional
                      development, increased confidence, and a sense of
                      fulfillment.
                    </p>
                  </div>
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 hover:scale-110 duration-150">
                    <div className="text-left">
                      <i className="fa-solid fa-comments text-red-600 text-2xl "></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      24/7 Communication
                    </h1>
                    <p className="py-1 text-sm text-justify text-white">
                      It is important to recognize the potential downsides of
                      constant connectivity, such as the blurring of boundaries
                      between work and personal life, the risk of burnout, and
                      the need for intentional disconnection and rest.
                    </p>
                  </div>
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 hover:scale-110 duration-150">
                    <div className="text-left">
                      <i className="fa-solid fa-car text-red-600 text-2xl"></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Our Fleet
                    </h1>
                    <p className="py-1 text-justify text-sm text-white">
                      It is the backbone of our operations, enabling us to
                      efficiently transport goods and people to their intended
                      destinations. It is crucial to maintain our fleet to the
                      highest standards of safety, reliability, and
                      sustainability,through regular maintenance, upgrades, and
                      responsible driving practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container ">
                <div className="flex">
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 hover:scale-110 duration-150">
                    <div className="text-left">
                      <i className="fa-solid fa-fire-extinguisher text-red-600 text-2xl"></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Emergency Help
                    </h1>
                    <p className="py-1 mb-3 text-justify text-white text-sm">
                      We provide critical support and assistance during times of
                      crisis and can mean the difference between life and death
                      for those in need. To ensure swift and practical
                      assistance, it is essential to have reliable emergency
                      response systems, including trained personnel, effective
                      communication channels, and necessary resources.
                    </p>
                  </div>
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 hover:scale-110 duration-150">
                    <div className="text-left">
                      <i className="fa-solid fa-laptop-house text-red-600 text-2xl"></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Advanced Technology
                    </h1>
                    <p className="py-1 mb-3 text-justify text-white text-sm">
                      Advanced technology has the potential to revolutionize
                      fire safety, by providing early detection and swift
                      response to fire incidents. From intelligent smoke
                      detectors and flame sensors to automated sprinkler systems
                      and fire-resistant materials, technology can play a
                      crucial role in preventing fires, minimizing damages, and
                      saving lives.
                    </p>
                  </div>
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 hover:scale-110 duration-150">
                    <div className="text-left">
                      <i className="fa-solid fa-user-tie text-red-600 text-2xl"></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Licensed Officer
                    </h1>
                    <p className="py-1 mb-3 text-justify text-white text-sm">
                      A licensed officer trained in fire safety plays a crucial
                      role in preventing and responding to fire incidents and
                      ensuring the safety of people and property. With their
                      knowledge of fire prevention and emergency response
                      protocols, licensed officers can conduct regular
                      inspections, identify potential hazards, and implement
                      safety measures to minimize the risk of fires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-20 my-20">
          <div className=" text-gray-700 items-center">
            <div className=" flex py-10">
              <div className=" px-20 py-10 w-1/2">
                <h1 className="text-6xl font-bold font-mono">Contact Info</h1>
                <div className="font-semibold">
                  <p className="py-5 text-2xl">
                    Be prepared, stay safe – trusted website
                  </p>

                  <p>Mobile: +91 9354318440</p>
                  <br />
                  <p>Email Us: demo@gmail.com</p>
                  <br />
                  <p>
                    Address: Plot No. 1107, First Floor, Sector 47, Sohna Road,
                    Near ILD Mall, Gurgaon
                  </p>
                </div>

                <div className="py-10">
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

              <div className="bg-white px-20 py-20">
                <form onSubmit={handleSubmit}>
                  <div className="py-2 text-sm">
                    <label htmlFor="name" className="text-gray-700 ">
                      Name
                    </label>
                    <span className="text-red-500">*</span>
                    <br />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      className="bg-gray-100  text-black text-sm px-1 py-1 w-64 shadow-xl border-none rounded-lg h-10 w-72"
                      placeholder="Full Name"
                      required
                      onChange={handleChange}
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
                      value={formData.email}
                      placeholder="Email Address"
                      className="bg-gray-100 text-black px-1 py-1 w-64 shadow-xl border-none rounded-lg h-10 w-72"
                      required
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                  <div className="py-2 text-sm">
                    <label htmlFor="company" className="text-gray-700">
                      Company
                    </label>
                    <span className="text-red-500">*</span>
                    <br />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      className="bg-gray-100 text-black px-1 py-1 w-64 shadow-xl border-none rounded-lg h-10 w-72"
                      placeholder="Company Name"
                      required
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                  <div className="py-2 text-sm">
                    <label htmlFor="message" className="text-gray-700">
                      Message
                    </label>
                    <span className="text-red-500">*</span>
                    <br />
                    <textarea
                      name="message"
                      value={formData.message}
                      className=" bg-gray-100 text-black px-1 py-2 w-64 shadow-xl border-none rounded-lg w-72"
                      placeholder="Enter Message Here"
                      rows="2"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="py-3 text-center">
                    <button
                      type="submit"
                      className=" bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded "
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {submitted && <p>Contact Form submitted successfully!</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
