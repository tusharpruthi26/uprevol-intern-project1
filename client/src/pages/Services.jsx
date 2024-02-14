import React from "react";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";

export default function Services() {
  return (
    <div className="bg-gray-100">
      <section>
        <div className="relative">
          <img
            className="w-full h-96"
            src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
            alt="services"
          />
          <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/3">
            <h1 className="text-7xl font-bold">SERVICES</h1>
            <br />
            <br />

            <Link
              to="/"
              className="inline-block  text-white border border-red-600 border-2 hover:border-white hover:bg-red-600 px-7 py-2 "
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="flex py-20 px-10 ">
          {/* Card 1 */}

          <div className="max-w-md">
            <div className="px-6 py-4">
              <FaCar className="text-red-600 text-3xl" />
              <div className="font-bold text-2xl mb-2">
                FIRE BRIGADE (RENTALS/MANUFACTURING)
              </div>
              <p className="text-gray-700 text-base">
                Fire brigades are emergency services that respond to fires and
                other disasters, providing rescue, firefighting, and medical
                services to communities.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-md">
            <div className="px-6 py-4">
              <FaCar className="text-red-600 text-3xl" />
              <div className="font-bold text-2xl mb-2">
                MANPOWER SUPPLIER <br />
                (FIRE/SECURITY)
              </div>
              <p className="text-gray-700 text-base">
                Manpower suppliers provide staffing solutions to companies by
                sourcing and placing candidates for various roles and positions.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="max-w-md">
            <div className="px-6 py-4">
              <FaCar className="text-red-600 text-3xl" />
              <div className="font-bold text-2xl mb-2">
                FIRE SAFETY EDUCATIONAL
                <br /> COURSES
              </div>
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
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2023/03/OIP-6-2.jpg"
              alt="fire Brigade"
              className="rounded-xl mr-44"
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">
              FIRE BRIGADE (RENTALS/MANUFACTURING)
            </h1>
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
            <h1 className="text-4xl font-serif">
              MANPOWER SUPPLIER (FIRE/SECURITY)
            </h1>
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
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2023/04/fire_safety_1.jpg"
              alt="fire Brigade"
              className="rounded-xl ml-20 h-48 "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-44 py-24">
          <div>
            <img
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2023/03/OIP-8-2.jpg"
              alt="fire Brigade"
              className="rounded-xl mr-44 h-56 w-96"
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">FIREFIGHTING TRAINING</h1>
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
              FIRE SAFETY EDUCATIONAL COURSES
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
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2023/04/R-12-2048x1365.jpg"
              alt="fire Brigade"
              className="rounded-xl ml-20 h-64 w-full "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-44 py-24">
          <div>
            <img
              src="https://www.monolithsafetyexperts.com/wp-content/uploads/2023/03/fire-safety-awareness-1-1.png"
              alt="fire Brigade"
              className="rounded-xl mr-44 h-60 w-96"
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">
              CONSTRUCTION PROJECT LIASONING
            </h1>
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
          className="text-red-600 border border-red-600 border-2  hover:bg-red-600 hover:text-white px-7 py-2 "
        >
          QUOTE NOW
        </Link>
      </div>
      <section>
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
            alt="Fire Security Training"
            className="w-full h-96 opacity-80"
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
              className="inline-block  text-black hover:text-black border border-black border-2 hover:bg-white px-7 py-2 "
            >
              REGISTER YOURSELF
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-center py-32">
        {/* Card 1 */}

        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center">
          <div className="px-6 py-4">
            <FaCar className="text-red-600 text-6xl mt-8 ml-32" />
            <div className="font-bold text-xl mb-4">Identify Fire Hazards</div>
            <p className="text-gray-700 text-base">
              The first step in developing a fire security training program is
              to identify potential fire hazards in the workplace.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center">
          <div className="px-6 py-4">
            <FaCar className="text-red-600 text-6xl mt-8 ml-32" />
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
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center">
          <div className="px-6 py-4">
            <FaCar className="text-red-600 text-6xl mt-8 ml-32" />
            <div className="font-bold text-xl mb-4">Train Employees</div>
            <p className="text-gray-700 text-base">
              Providing employees with the knowledge and skills needed to
              prevent fires and respond in case of an emergency is crucial.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center">
          <div className="px-6 py-4">
            <FaCar className="text-red-600 text-6xl mt-8 ml-32" />
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
        <div className="w-96 bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center">
          <div className="px-6 py-4">
            <FaCar className="text-red-600 text-6xl mt-8 ml-32" />
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
        <div className="w-96  bg-gray-200 hover:bg-white rounded-lg overflow-hidden mx-2 my-4 text-center">
          <div className="px-6 py-4 ">
            <FaCar className="text-red-600 text-6xl mt-8 ml-32" />

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
