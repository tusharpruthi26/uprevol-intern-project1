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
            src={image}
            alt="fire brigade image"
            className="h-100 shadow-2xl"
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
            <button className="px-8 py-3 text-red-600 hover:bg-red-600 hover:text-white border border-red-600 duration-300">
              Quote Now!
            </button>
            <hr className="my-11 border-gray-600"></hr>
            <FaPhone className="text-white bg-red-600 text-6xl p-3 rounded-full" />
            <p className="text-gray-800 text-lg font-bold">Call Us Today:</p>
            <h3 className="text-white font-semibold text-4xl">
              +91 9354318440
            </h3>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto flex flex-col items-center py-10 md:flex-row py-20">
          <div className="w-full md:w-2/3 flex items-center justify-center">
            <div className="w-full md:w-1/2 space-y-2">
              <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
                Equip yourself for safety emergencies: The latest and most
                reliable safety equipments
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

          <div className="bg-red-600 text-white items-center p-5 md:p-20 w-full md:w-1/2 mt-10 md:mt-0">
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
      {/* <section className="">
        <div className="container flex items-center py-20">
          <div className=" w-full flex items-center justify-center">
            <div className=" w-1/2 space-y-2 ms-20">
              <h1 className="text-4xl font-bold">
                Equip yourself for safety emergencies: The latest and most
                reliable safety equipments
              </h1>
              <p>
                This help to emphasizes the importance of having the right
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
              <a href="/about" className="text-orange-500">
                About us<i className="fa-solid fa-arrow-right ms-1"></i>
              </a>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>

          <div className=" bg-red-600 text-white items-center px-20 w-2/3 p-28">
            <div>
              <h1 className="py-10">Lets Talk our Expertise</h1>
              <div className="flex">
                <div className="flex">
                  <h1 className="text-5xl">
                    5+<i className="fa-solid fa-plus"></i>
                  </h1>
                  <h1 className="text-5xl ms-48">
                    500+<i className="fa-solid fa-plus"></i>
                  </h1>
                </div>
              </div>
              <div className="flex">
                <h1>Years In Business</h1>
                <h1 className="ms-32">Happy Customers</h1>
              </div>
              <br />
              <br />
              <br />
              <div className="flex">
                <div className="flex">
                  <h1 className="text-5xl">
                    5<i></i>
                  </h1>
                  <h1 className="text-5xl ms-52">
                    200+<i className="fa-solid fa-plus"></i>
                  </h1>
                </div>
              </div>
              <div className="flex">
                <h1>Licensed Officer</h1>
                <h1 className="ms-32">Assets Protected</h1>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container mx-auto px-4">
          <div className="">
            <CardList />
          </div>
        </div>
      </section>

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
        <div className="bg-gray-800">
          <div className=" text-center px-20 py-20">
            <h4 className="text-white">WHY CHOOSE US</h4>
            <h1 className="text-4xl text-white py-5">What Sets Us Apart</h1>

            <div className="px-10 py-5">
              <div className="container ">
                <div className="flex">
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
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
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
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
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
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
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
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
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
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
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
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

      <div className="px-10 py-32 bg-gray-200 ">
        <div className="container text-center ">
          <div className="justify-around flex">
            <div className=" px-10  py-10 w-1/3">
              <h2 className="text-4xl text-justify text-black font-bold leading-7">
                Top-rated Services For Our Safety Equipments
              </h2>
              <p className="py-10 text-justify text-lg">
                Safety equipment services are designed to help businesses and
                organizations maintain safe working environments. These services
                typically include the installation, maintenance, and repair of
                safety equipment such as fire alarms, sprinkler systems,
                emergency lighting, and security systems.
              </p>
              <div className="py-5 text-left text-sm">
                <a
                  href="/services"
                  className="border border-orange-500 px-1 py-1 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Check All Services
                  <i className="fa-solid fa-chevron-right px-1"></i>
                </a>
              </div>
            </div>
            <div className="py-10 ">
              <div className="container text-center ">
                <div className="grid grid-cols-2 ">
                  <div className="w-80 mr-4 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl">
                    <img
                      src="https://imgs.search.brave.com/RalHD8cB_iWHFxbNWoWeR0FVFgmnSlr0yVp9ya92bRs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTc2/ODc1NDQ2L3Bob3Rv/L21lbGJvdXJuZS1m/aXJlLWJyaWdhZGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS0wRlV1Y09wNEky/Z0JBR2RzLV95Sm9F/bzlLQzlhYldXa25t/ZFJrZmNVa3c9"
                      className="w-20 h-20"
                    ></img>
                    <div className="text-sm font-bold text-justify">
                      <h3>FIRE BRIGADE </h3>
                      <h3>(RENTALS/MANUFACTURING)</h3>
                    </div>
                    <p className="w-3/4 py-3 text-justify text-sm">
                      We provide an essential service to communities and
                      industries, offering specialized equipment and expertise
                      to prevent and respond to fire incidents.
                    </p>
                    <div className="text-orange-600 flex text-sm">
                      <a href="/power-plant" className="">
                        <span>Learn More</span>
                        <i className="fa-solid fa-chevron-right px-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="w-80 ml-4 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl">
                    <img
                      src="https://imgs.search.brave.com/1Qgb-q8swaYo_Cm-7BmUAfXEYL1z6xpgrZN7PwjV-p0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWls/ZGVleS5jb20vdXBs/b2Fkcy9nYWxsZXJ5/L3VuaXR5LWZpcmUt/YW5kLXNhZmV0eS1z/ZXJ2aWNlcy1sbGMv/ZmlyZS1maWdodC53/ZWJw"
                      className="w-20 h-20"
                    ></img>
                    <div className="text-sm font-bold text-justify justify-start">
                      <h3>MANPOWER SUPPLIER</h3>
                      <h3>(FIRE/SECURITY)</h3>
                    </div>
                    <p className="w-3/4 py-3 text-justify text-sm">
                      A manpower supplier in the fire and security industry
                      typically provides personnel for fire and security-related
                      jobs.
                    </p>
                    <div className="text-orange-600 flex text-sm">
                      <a href="/power-plant" className="">
                        <span>Learn More</span>
                        <i className="fa-solid fa-chevron-right px-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="w-80 mt-8 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl">
                    <img
                      src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
                      className="w-20 h-20"
                    ></img>
                    <div className="text-sm font-bold text-justify justify-start">
                      <h3>FIREFIGHTING TRAINING</h3>
                    </div>
                    <p className="w-3/4 py-3 text-justify text-sm">
                      Firefighting training is a critical aspect of ensuring
                      public safety and minimizing property damage in the event
                      of a fire.
                    </p>
                    <div className="text-orange-600 flex text-sm">
                      <a href="/power-plant" className="">
                        <span>Learn More</span>
                        <i className="fa-solid fa-chevron-right px-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="w-80 mt-8 ml-4 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl">
                    <img
                      src="https://imgs.search.brave.com/D4cXgQzmomr6qvdTbbRbB4ZkWGjrMBIoVicoEPrZdfk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmZzZmlyZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDYvaVN0b2NrLTEx/ODY3MDA4ODYtMTgw/eDE4MC5qcGc"
                      className="w-20 h-20"
                    ></img>
                    <div className="text-sm font-bold text-justify justify-start">
                      <h3>FIRE SAFETY EDUCATIONAL COURSES</h3>
                    </div>
                    <p className="w-3/4 py-3 text-justify text-sm">
                      Fire safety educational courses are designed to teach
                      individuals about the principles and practices of fire
                      safety.
                    </p>
                    <div className="text-orange-600 flex text-sm">
                      <a href="/power-plant" className="">
                        <span>Learn More</span>
                        <i className="fa-solid fa-chevron-right px-1"></i>
                      </a>
                    </div>
                  </div>
                  {/* <div className="w-80  border border-gray-700 border-2">
                    <img
                      src="https://imgs.search.brave.com/wbRIUGMlAtqnBgTLMy8vkENj1ji8GWfp2tEmUzhfeMA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsZXJzLmNv/bS9pdy1pbWFnZXMv/cmVzb3VyY2VzL0J1/c2luZXNzL1NtYWxs/L2J1c2luZXNzLWlu/ZHVzdHJpZXMvY29u/c3RydWN0aW9uL2Nv/bnN0cnVjdGlvbi1u/ZXctaGlyZS1vcmll/bnRhdGlvbi1zbWFs/bC5qcGc"
                      className="w-20 h-20"
                    ></img>
                    <div className="text-sm font-bold text-justify justify-start">
                      <h3>CONSTRUCTION PROJECT LIAISONING</h3>
                    </div>
                    <p className="w-3/4 py-3 text-justify text-sm">
                      Construction project liaisoning refers to the process of
                      facilitating communication and collaboration between
                      various stakeholders involved in a construction project.
                    </p>
                    <div className="text-orange-600 flex text-sm">
                      <a href="/power-plant" className="">
                        <span>Learn More</span>
                        <i className="fa-solid fa-chevron-right px-1"></i>
                      </a>
                    </div>
                  </div>
                  <div className="w-80  border border-gray-700 border-2">
                    <img
                      src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
                      className="w-20 h-20"
                    ></img>
                    <div className="text-sm font-bold text-justify justify-start">
                      <h3>CONSTRUCTION PROJECT LIAISONING</h3>
                    </div>
                    <p className="w-3/4 py-3 text-justify text-sm">
                      Construction project liaisoning refers to the process of
                      facilitating communication and collaboration between
                      various stakeholders involved in a construction project.
                    </p>
                    <div className="text-orange-600 flex text-sm">
                      <a href="/power-plant" className="">
                        <span>Learn More</span>
                        <i className="fa-solid fa-chevron-right px-1"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mx-20 my-20">
          <div className=" text-gray-700 items-center">
            <div className=" flex py-10">
              <div className=" px-20 py-10 w-1/2">
                <h1 className="text-6xl font-bold font-mono">Contact Info</h1>
                <div className="font-semibold">
                  <p className="py-5 text-2xl">
                    Be prepared, stay safe – trust in fire equipment
                  </p>

                  <p>Mobile: +91 9354318440</p>
                  <br />
                  <p>Email Us: monolithsafetyexperts@gmail.com</p>
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
                      className=" bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded "
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
