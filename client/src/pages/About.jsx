import React from "react";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import about from "./images/about.jpg";

export default function About() {
  return (
    <div>
      <section>
        <div className="relative">
          <img className="w-full h-80 shadow-2xl" src={about} alt="services" />
          <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/3">
            <h1 className="text-7xl font-bold">ABOUT US</h1>
            <br />
            <br />
            <Link
              to="/contact"
              className="inline-block  hover:text-white border border-gray-800 border-2  hover:bg-gray-800 px-7 py-2 "
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section>
        <div className=" px-40 py-44 bg-gray-200 shadow-2xl rounded-3xl mx-9">
          <div className="container text-center">
            <div className=" flex justify-around">
              <div className=" text-justify  w-1/3">
                <h2 className="text-4xl font-bold">
                  Who We Are and What We Do?
                </h2>
              </div>
              <div className=" text-justify  w-1/3 text-sm">
                <p>
                  Monolith Safety Experts Pvt. Ltd. is a dynamic and innovative
                  platform that connects clients from every category to a wide
                  range of safety solutions under one roof. Despite being only a
                  year old, we have established ourselves as a reliable and
                  trustworthy provider of tailor-made services that cater to the
                  diverse needs of our clients.
                </p>
              </div>
            </div>
            <hr />
            <div className="py-10 row flex justify-around">
              <div className="col">
                <div className="text-6xl">
                  <span>5</span>
                  <span>+</span>
                </div>
                <div>Years in Business</div>
              </div>
              <div className="col">
                <div className="text-6xl">
                  <span>500</span>
                  <span>+</span>
                </div>
                <div>Happy Customers</div>
              </div>
              <div className="col">
                <div className="text-6xl">
                  <span>5</span>
                </div>
                <div>Licensed Officer</div>
              </div>
              <div className="col">
                <div className="text-6xl">
                  <span>500</span>
                  <span>+</span>
                </div>
                <div>Assets Protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      {/* why monolith */}
      {/* <section>
        <div className="py-20 px-40 ">
          <h1 className="text-4xl text-center font-bold"> Why Monolith?</h1>
          <br />
          <br />
          <div className="container  py-10">
            <div className="space-x-5  flex justify-around ">
              <div className=" border bg-gray-300 hover:bg-red-500  px-10 rounded-2xl shadow-2xl">
                <div className="py-5">
                  <div className="px-20">
                    <img
                      className="h-20 border bg-white px-1 py-1"
                      src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
                    ></img>
                    <h1 className="font-bold">Expertise</h1>
                  </div>
                  <div>
                    <p className="text-sm py-5">
                      Monolith Services has a team of highly experienced
                      professionals who are experts in their respective fields,
                      including security, risk management, and compliance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border  bg-gray-300 hover:bg-red-500  px-10 rounded-2xl shadow-2xl">
                <div className="py-5 ">
                  <div className="px-20">
                    <img
                      className="h-20 border bg-white px-1 py-1 "
                      src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
                    ></img>
                    <h1 className="font-bold">Customization</h1>
                  </div>
                  <div>
                    <p className="text-sm py-3">
                      Monolith Services offers customized solutions that are
                      tailored to your specific requirements. They take the time
                      to understand your business, your goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border bg-gray-300   hover:bg-red-500  px-10 rounded-2xl shadow-2xl">
                <div className="py-5">
                  <div className="px-20">
                    {" "}
                    <img
                      className="h-20 border bg-white px-1 py-1"
                      src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
                    ></img>
                    <h1 className="font-bold">Quality</h1>
                  </div>
                  <div>
                    <p className="text-sm py-5">
                      Monolith Services is committed to delivering high-quality
                      services that meet the highest standards of excellence. It
                      has latest technology and best practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border bg-gray-300   hover:bg-red-500  px-10 rounded-2xl shadow-2xl">
                <div className="py-5">
                  <div className="px-20">
                    {" "}
                    <img
                      className="h-20 border bg-white px-1 py-1"
                      src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
                    ></img>
                    <h1 className="font-bold">Flexibility</h1>
                  </div>
                  <div>
                    <p className="text-sm py-5">
                      Monolith Services understands that businesses and
                      individuals have different needs and requirements, and
                      they are flexible in their approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section> */}
      <section>
        <div className="px-20 py-20 rounded-3xl shadow-2xl bg-gray-200 mx-10 my-10">
          <div className="container text-center relative">
            <div className="flex ">
              <div className=" bg-gray-800  px-10 rounded-2xl">
                <div className="text-5xl text-white py-10">
                  <h1 className="font-mono">Our Mission</h1>
                </div>
                <div className="py-5  text-white w-full">
                  <ul className="text-left">
                    <li className=" list-disc">
                      At Monolith Safety Experts, our mission is to provide the
                      best safety solutions to our clients, ensuring their
                      safety and minimizing risk in their workplaces. We are
                      committed to delivering the highest quality safety
                      services and products, using the latest technology and
                      industry best practices. We strive to exceed our client’s
                      expectations and build long-lasting relationships with
                      them.
                    </li>
                    <li className=" list-disc">
                      We aim to disrupt the safety industry by offering
                      innovative and customized safety solutions that meet our
                      client’s unique needs. We understand that safety is not a
                      one-size-fits-all solution, and we take the time to listen
                      to our clients and understand their specific safety
                      challenges.
                    </li>
                    <li className=" list-disc">
                      Our services include safety assessments, safety training,
                      safety product sales and installations, safety program
                      development, and safety consulting. We provide a
                      comprehensive range of safety solutions that cover
                      everything from hazard identification to safety program
                      implementation.
                    </li>
                    <li className=" list-disc">
                      Our goal is to be the go-to safety experts for businesses
                      of all sizes,providing them with the peace of mind that
                      their safety is in good hands.
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" py-5  relative">
                <div className=" px-20 ">
                  <div className="text-6xl py-5  text-gray-900">
                    <h1 className="font-mono">Our Vision</h1>
                  </div>
                  <div className="py-10  text-gray-900">
                    <ul className=" text-left ">
                      <li className="list-disc">
                        In this Era of highly endured information with paced up
                        technological advancements the factors contributing to
                        the risk laden businesses of almost every field are
                        rising rapidly. Which is why at this point of witnessing
                        numerous amounts of accidents & fatalities we at
                        MONOLITH SAFETY EXPERTS, chose to dive in the deep
                        waters of ever expanding areas of safety with a vision
                        of providing such a platform which is just not limited
                        to providing safety from common hazard like fire or
                        explosions but also industrial, commercial & residential
                        hazards with utmost care.
                      </li>
                      <li className="list-disc">
                        As the amount of risks causing incidents resulting in
                        accidents are at their peak in almost every industry,
                        therefore we make sure that all our clients get the best
                        of the planned safety systems according to their
                        business’s requirements and within their financial
                        limits too.
                      </li>
                      <li className="list-disc">
                        All in all we want to envision a safe working
                        environment for each individual through our collective
                        safety monitoring system that is still undergoing a
                        rigorous process of health safety environment agenda
                        that should be a protocol to follow by every human on
                        this planet in the coming time.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-6xl flex justify-center text-gray-900">
          <h3>------</h3>
        </div>
        <br />
      </section>
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
                      Tailored Solutions
                    </h1>
                    <p className="py-1 text-sm text-justify text-white">
                      We believe in a personalized approach to every project. By
                      understanding your business objectives and target
                      audience, we develop custom strategies that align with
                      your vision and objectives.
                    </p>
                  </div>
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                    <div className="text-left">
                      <i className="fa-solid fa-car text-red-600 text-2xl"></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Creativity
                    </h1>
                    <p className="py-1 text-justify text-sm text-white">
                      Creativity is at the heart of everything we do. Whether
                      it's designing a stunning website, crafting engaging
                      content, or conceptualizing captivating visuals, we infuse
                      creativity into every aspect of our work to make your
                      brand stand out.
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
                      Client-Centric Approach
                    </h1>
                    <p className="py-1 mb-3 text-justify text-white text-sm">
                      we prioritize the needs and goals of our clients above all
                      else. We believe in building long-lasting relationships
                      based on trust, respect, and mutual success. Our dedicated
                      team takes the time to listen to your concerns, understand
                      your challenges, and tailor solutions that address your
                      specific requirements. Your satisfaction is our top
                      priority, and we're committed to delivering results that
                      exceed your expectations.
                    </p>
                  </div>
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                    <div className="text-left">
                      <i className="fa-solid fa-laptop-house text-red-600 text-2xl"></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Creativity
                    </h1>
                    <p className="py-1 mb-3 text-justify text-white text-sm">
                      Creativity is at the heart of everything we do. Whether
                      it's designing a stunning website, crafting engaging
                      content, or conceptualizing captivating visuals, we infuse
                      creativity into every aspect of our work to make your
                      brand stand out.
                    </p>
                  </div>
                  <div className="  w-1/3 px-5 py-5 border border-gray-500 ">
                    <div className="text-left">
                      <i className="fa-solid fa-user-tie text-red-600 text-2xl"></i>
                    </div>
                    <FaCar className="text-red-600 text-3xl" />
                    <h1 className="text-2xl text-white font-bold text-justify">
                      Transparency
                    </h1>
                    <p className="py-1 mb-3 text-justify text-white text-sm">
                      We believe in open communication and transparency
                      throughout the entire process. From project kickoff to
                      delivery, you'll be kept informed every step of the way,
                      ensuring a smooth and collaborative experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-20 py-10">
          <div className="container">
            <div className="px-10 row flex">
              <div className=" w-2/3 py-10">
                <div className="text-5xl font-bold">
                  <h1> Perfection Anytime</h1>
                </div>
                <div className=" text-left py-5">
                  <p>
                    It is about setting high standards for oneself and embracing
                    the journey of growth, rather than fixating on end result it
                    can lead to personal and professional development, increased
                    confidence, and a sense of fulfillment.
                  </p>
                </div>
              </div>
              <div className="w-1/2 px-10 ">
                <div className="">
                  <a href="/about">
                    <img className=" rounded-3xl shadow-2xl" src={about}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-20 py-20">
          <div className="container">
            <div className=" row flex">
              <div className=" ">
                <div className="">
                  <a href="/about">
                    <img
                      className="h-96 rounded-3xl shadow-2xl"
                      src={about}
                    ></img>
                  </a>
                </div>
              </div>
              <div className=" w-2/3 px-10 py-5">
                <div className="text-5xl font-bold">
                  <h1>Tailored Solutions</h1>
                </div>
                <div className=" text-left py-5">
                  <p>
                    We believe in a personalized approach to every project. By
                    understanding your business objectives and target audience,
                    we develop custom strategies that align with your vision and
                    objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-20 py-10">
          <div className="container">
            <div className="px-10 row flex">
              <div className=" w-2/3 py-10">
                <div className="text-5xl font-bold">
                  <h1> Perfection Anytime</h1>
                </div>
                <div className=" text-left py-5">
                  <p>
                    It is about setting high standards for oneself and embracing
                    the journey of growth, rather than fixating on end result it
                    can lead to personal and professional development, increased
                    confidence, and a sense of fulfillment.
                  </p>
                </div>
              </div>
              <div className="w-1/2 px-10 ">
                <div className="">
                  <a href="/about">
                    <img className=" rounded-3xl shadow-2xl" src={about}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" px-20 py-20">
          <div className="container">
            <div className=" row flex">
              <div className=" ">
                <div className="">
                  <a href="/about">
                    <img
                      className="h-96 rounded-3xl shadow-2xl"
                      src={about}
                    ></img>
                  </a>
                </div>
              </div>
              <div className=" w-2/3 px-10 py-5">
                <div className="text-5xl font-bold">
                  <h1>Tailored Solutions</h1>
                </div>
                <div className=" text-left py-5">
                  <p>
                    We believe in a personalized approach to every project. By
                    understanding your business objectives and target audience,
                    we develop custom strategies that align with your vision and
                    objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10 bg-gray-100">
        <div className=" flex justify-center text-2xl font-bold">
          <h1>OUR ASSOCIATE BRANDS</h1>
        </div>
        <div className="flex justify-center py-10 ">
          <img
            src="https://imgs.search.brave.com/8PdwdGM0gCHKrjpxWOpxPwj5AbGabdKHbuKgJNmKSSg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAy/NTQzMzA1Mi9waG90/by9icmFuZHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVdl/SV9KZWx3ZnZaUDNT/NGdESHYtWFpuQ0dh/SXU5QmlsMF90aU9f/TnNCbms9"
            className="shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
