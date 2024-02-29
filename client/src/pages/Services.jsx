import React from "react";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import about from "./images/about.jpg";
import { IoLogoReact } from "react-icons/io5";

export default function Services() {
  return (
    <div className="bg-gray-100">
      <section>
        <div className="relative">
          <img className="w-full h-96 shadow-2xl" src={about} alt="services" />
          <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/3">
            <h1 className="text-7xl font-bold">SERVICES</h1>
            <br />
            <br />

            <Link
              to="/"
              className="inline-block  text-white border border-gray-800 border-2  hover:bg-gray-800 px-7 py-2 "
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="flex py-36 px-10 space-x-4 ">
          {/* Card 1 */}

          <div className="max-w-md shadow-xl rounded-2xl hover:bg-gray-200 hover:scale-110 duration-150">
            <div className="px-6 py-4">
              {/* <FaCar className="text-red-600 text-3xl" /> */}
              <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-32" />
              <div className="font-bold text-2xl mb-2">Service 1</div>
              <p className="text-gray-700 text-base">
                Fire brigades are emergency services that respond to fires and
                other disasters, providing rescue, firefighting, and medical
                services to communities.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-md shadow-xl rounded-2xl hover:bg-gray-200 hover:scale-110 duration-150">
            <div className="px-6 py-4">
              {/* <FaCar className="text-red-600 text-3xl" /> */}
              <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-32" />
              <div className="font-bold text-2xl mb-2">Service 2</div>
              <p className="text-gray-700 text-base">
                Manpower suppliers provide staffing solutions to companies by
                sourcing and placing candidates for various roles and positions.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="max-w-md shadow-xl rounded-2xl hover:bg-gray-200 hover:scale-110 duration-150">
            <div className="px-6 py-4">
              {/* <FaCar className="text-red-600 text-3xl" /> */}
              <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-32" />
              <div className="font-bold text-2xl mb-2">Service 3 </div>
              <p className="text-gray-700 text-base">
                Fire safety educational courses provide essential knowledge and
                skills to prevent and respond to fires effectively, reducing the
                risk of injury and property damage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-44 py-24">
          <div>
            <img
              src={about}
              alt="fire Brigade"
              className="rounded-xl h-72 mr-10 shadow-2xl"
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">Web Design and Development:</h1>
            <br />
            <p>
              We provide an essential service to communities and industries,
              offering specialized equipment and expertise to prevent and
              respond to fire incidents. Fire brigade rentals offer a
              cost-effective solution for companies and events that require
              temporary fire protection, while fire brigade manufacturing
              provides customized fire trucks, pumps, and other fire suppression
              equipment tailored to specific needs.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-28 py-24">
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">Digital Marketing:</h1>
            <br />
            <p>
              A manpower supplier in the fire and security industry typically
              provides personnel for fire and security-related jobs such as
              Firewatch, fire suppression system installation, security guard
              services, and alarm monitoring. These suppliers recruit and hire
              qualified individuals who can fulfill the needs of their clients
              in terms of providing safety and security services. such as their
              reputation, experience, qualifications of their staff, and their
              ability to meet your specific needs.
            </p>
          </div>
          <div>
            <img
              src={about}
              alt="fire Brigade"
              className="rounded-xl ml-20 h-72 shadow-2xl "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-44 py-24">
          <div>
            <img
              src={about}
              alt="fire Brigade"
              className="rounded-xl mr-44 h-56 w-96 shadow-2xl"
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">Graphic Design:</h1>
            <br />
            <p>
              Firefighting training is a critical aspect of ensuring public
              safety and minimizing property damage in the event of a fire. The
              following are some important tips to consider when training for
              Fire Fighting. It is essential to know how to operate fire
              extinguishers, hoses, and other firefighting equipment.
              Familiarize yourself with the location and proper use of this
              equipment.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-28 py-24">
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">
              Content Writing and Copywriting:
            </h1>
            <br />
            <p>
              Fire safety education is a crucial aspect of ensuring that
              individuals and organizations are prepared to prevent and respond
              to fires. In today's world, it is essential that websites offering
              fire safety educational courses stand out and offer unique and
              expensive options to clients. One way to make fire safety
              educational courses unique is to incorporate the latest technology
              and interactive features.
            </p>
          </div>
          <div>
            <img
              src={about}
              alt="fire Brigade"
              className="rounded-xl ml-20 h-64 w-full shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-44 py-24">
          <div>
            <img
              src={about}
              alt="fire Brigade"
              className="rounded-xl h-72 mr-10 shadow-2xl"
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">Service 5</h1>
            <br />
            <p>
              Construction project liaisoning refers to the process of
              facilitating communication and collaboration between various
              stakeholders involved in a construction project, such as
              architects, contractors, engineers, government authorities, and
              other relevant parties. The liasoning process involves
              coordinating and managing all aspects of the project, including
              the planning, design, procurement, construction, and delivery
              phases.
            </p>
          </div>
        </div>
      </section>
      {/* Quote Now */}
      <div className="text-center pb-14">
        <Link
          to="/contact"
          className="text-gray-800 border border-gray-800 border-2  hover:bg-gray-800 hover:text-white px-7 py-2 shadow-xl "
        >
          QUOTE NOW
        </Link>
      </div>

      <section>
        <div className="px-10 py-32 bg-gray-200 ">
          <div className="container text-center ">
            <div className="justify-around flex">
              <div className=" px-10  py-10 w-1/3">
                <h2 className="text-4xl text-justify text-black font-bold leading-7">
                  Top-rated Services For Our Website
                </h2>
                <p className="py-10 text-justify text-lg">
                  These services cater to various aspects of building and
                  promoting an online presence, making them essential for
                  businesses and individuals looking to establish or improve
                  their digital footprint.
                  <br />
                  <br />
                  These services cater to various aspects of building and
                  promoting an online presence,
                  <br /> making them essential for businesses and individuals
                  looking to establish or improve their digital footprint.
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
              <section>
                <div className="py-10 ">
                  <div className="container">
                    <div className="grid grid-cols-2">
                      <div className="w-80 mr-4 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl hover:scale-110 duration-150">
                        {/* <img
                          src="https://imgs.search.brave.com/RalHD8cB_iWHFxbNWoWeR0FVFgmnSlr0yVp9ya92bRs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTc2/ODc1NDQ2L3Bob3Rv/L21lbGJvdXJuZS1m/aXJlLWJyaWdhZGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS0wRlV1Y09wNEky/Z0JBR2RzLV95Sm9F/bzlLQzlhYldXa25t/ZFJrZmNVa3c9"
                          className="w-20 h-20"
                        ></img> */}
                        <IoLogoReact className="text-gray-800 h-16 w-20 mt-8" />
                        <div className="text-sm font-bold text-justify">
                          <h3>Web Design and Development: </h3>
                        </div>
                        <p className="w-3/4 py-3 text-justify text-sm">
                          Offer professional web design and development services
                          tailored to client's needs, including creating
                          responsive and visually appealing websites.
                        </p>
                        <div className="text-orange-600 flex text-sm">
                          <a href="/power-plant" className="">
                            <span>Learn More</span>
                            <i className="fa-solid fa-chevron-right px-1"></i>
                          </a>
                        </div>
                      </div>
                      <div className="w-80 ml-4 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl hover:scale-110 duration-150">
                        {/* <img
                          src="https://imgs.search.brave.com/1Qgb-q8swaYo_Cm-7BmUAfXEYL1z6xpgrZN7PwjV-p0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idWls/ZGVleS5jb20vdXBs/b2Fkcy9nYWxsZXJ5/L3VuaXR5LWZpcmUt/YW5kLXNhZmV0eS1z/ZXJ2aWNlcy1sbGMv/ZmlyZS1maWdodC53/ZWJw"
                          className="w-20 h-20"
                        ></img> */}
                        <IoLogoReact className="text-gray-800 h-16 w-20 mt-8" />
                        <div className="text-sm font-bold text-justify justify-start">
                          <h3>Digital Marketing:</h3>
                        </div>
                        <p className="w-3/4 py-3 text-justify text-sm">
                          Provide digital marketing services to help businesses
                          promote their products or services online and reach
                          their target audience effectively.
                        </p>
                        <div className="text-orange-600 flex text-sm">
                          <a href="/power-plant" className="">
                            <span>Learn More</span>
                            <i className="fa-solid fa-chevron-right px-1"></i>
                          </a>
                        </div>
                      </div>
                      <div className="w-80 mt-8 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl hover:scale-110 duration-150">
                        {/* <img
                          src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
                          className="w-20 h-20"
                        ></img> */}
                        <IoLogoReact className="text-gray-800 h-16 w-20 mt-8" />
                        <div className="text-sm font-bold text-justify justify-start">
                          <h3>Graphic Design:</h3>
                        </div>
                        <p className="w-3/4 py-3 text-justify text-sm">
                          Offer creative graphic design services to help
                          businesses enhance their brand identity and visual
                          communication materials.
                        </p>
                        <div className="text-orange-600 flex text-sm">
                          <a href="/power-plant" className="">
                            <span>Learn More</span>
                            <i className="fa-solid fa-chevron-right px-1"></i>
                          </a>
                        </div>
                      </div>
                      <div className="w-80 mt-8 ml-4 shadow-2xl bg-gray-300 hover:bg-gray-400 rounded-2xl hover:scale-110 duration-150">
                        {/* <img
                          src="https://imgs.search.brave.com/D4cXgQzmomr6qvdTbbRbB4ZkWGjrMBIoVicoEPrZdfk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dmZzZmlyZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDYvaVN0b2NrLTEx/ODY3MDA4ODYtMTgw/eDE4MC5qcGc"
                          className="w-20 h-20"
                        ></img> */}
                        <IoLogoReact className="text-gray-800 h-16 w-20 mt-8" />

                        <div className="text-sm font-bold text-justify justify-start">
                          <h3>Content Writing and Copywriting:</h3>
                        </div>
                        <p className="w-3/4 py-3 text-justify text-sm">
                          Provide high-quality content writing and copywriting
                          services to businesses looking to engage their
                          audience with compelling and informative content.
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
              </section>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative">
          <img
            src={about}
            alt="Fire Security Training"
            className="w-full h-96 opacity-80 shadow-2xl"
          />
          <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/3 ">
            <p className="text-black font-semibold">JOIN US</p>
            <br />

            <h3 className="text-black text-4xl font-semibold ">
              FIRE SECURITY TRAINING
            </h3>
            <br />
            <p className="text-black">
              Empower your team with the unparalleled expertise of our exclusive
              fire security training program, crafted to safeguard your assets
              and personnel against the most critical fire hazards with the
              latest cutting-edge techniques and equipment, ensuring optimal
              protection that money can’t buy.
            </p>
            <Link
              to="/contact"
              className="inline-block  text-gray-800 hover:text-white border border-gray-800 border-2 hover:bg-gray-800 px-7 py-2 "
            >
              REGISTER YOURSELF
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-center py-32">
        {/* Card 1 */}

        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center shadow-xl hover:scale-110 duration-150">
          <div className="px-6 py-4">
            {/* <FaCar className="text-red-600 text-6xl mt-8 ml-32" /> */}
            <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-28" />
            <div className="font-bold text-xl mb-4">Identify Fire Hazards</div>
            <p className="text-gray-700 text-base">
              The first step in developing a fire security training program is
              to identify potential fire hazards in the workplace.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center shadow-xl hover:scale-110 duration-150">
          <div className="px-6 py-4">
            {/* <FaCar className="text-red-600 text-6xl mt-8 ml-32" /> */}
            <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-28" />
            <div className="font-bold text-xl mb-4">
              Develop Emergency Response Procedures
            </div>
            <p className="text-gray-700 text-base">
              Once potential fire hazards have been identified, it's important
              to develop emergency response procedures.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center shadow-xl hover:scale-110 duration-150">
          <div className="px-6 py-4">
            {/* <FaCar className="text-red-600 text-6xl mt-8 ml-32" /> */}
            <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-28" />
            <div className="font-bold text-xl mb-4">Train Employees</div>
            <p className="text-gray-700 text-base">
              Providing employees with the knowledge and skills needed to
              prevent fires and respond in case of an emergency is crucial.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center shadow-xl hover:scale-110 duration-150">
          <div className="px-6 py-4">
            {/* <FaCar className="text-red-600 text-6xl mt-8 ml-32" /> */}
            <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-28" />
            <div className="font-bold text-xl mb-4">
              Maintain Fire Safety Equipment
            </div>
            <p className="text-gray-700 text-base">
              Fire safety equipment, such as fire extinguishers and smoke
              detectors, must be properly maintained.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center shadow-xl hover:scale-110 duration-150">
          <div className="px-6 py-4">
            {/* <FaCar className="text-red-600 text-6xl mt-8 ml-32" /> */}
            <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-28" />
            <div className="font-bold text-xl mb-4">
              Complains With Regulation
            </div>
            <p className="text-gray-700 text-base">
              Many jurisdictions require to provide fire safety training to
              their employees to comply with fire safety regulations
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-96  bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center shadow-xl hover:scale-110 duration-150">
          <div className="px-6 py-4 ">
            {/* <FaCar className="text-red-600 text-6xl mt-8 ml-32" /> */}
            <IoLogoReact className="text-gray-800 h-16 w-20 mt-8 ml-28" />

            <div className="font-bold text-xl mb-4">
              Update Security Training Program
            </div>
            <p className="text-gray-700 text-base">
              security training programs should be reviewed and updated to
              ensure they remain effective.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
