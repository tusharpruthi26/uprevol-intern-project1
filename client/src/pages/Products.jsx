import React from "react";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { CardList } from "../Card";
export default function Products() {
  return (
    <div>
      <section>
        <div className="relative">
          <img
            className="w-full h-96 shadow-2xl"
            src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
            alt="Product"
          />
          <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/3">
            <h1 className="text-7xl font-bold text-black">Product</h1>
            <br />
            <br />

            <Link
              to="/"
              className="inline-block  text-black border border-red-600 border-2  hover:bg-red-600 px-7 py-2 "
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="flex py-20 px-20 bg-gray-100">
          {/* Card 1 */}

          <div className="bg-white mx-2 flex-1 shadow-2xl rounded-2xl hover:bg-gray-200">
            <div className="px-2 py-3 ">
              <FaCar className="text-red-600 text-4xl" />
              <div className="font-bold text-2xl mb-2">Quality Assurance</div>
              <p className="text-gray-700 text-base">
                Our products are not only ISI-approved, but they also undergo
                rigorous testing and quality control measures to ensure that
                they meet the highest industry standards.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white mx-2 flex-1 shadow-2xl rounded-2xl hover:bg-gray-200">
            <div className="px-6 py-4 ">
              <FaCar className="text-red-600 text-4xl" />
              <div className="font-bold text-2xl mb-2">Durability</div>
              <p className="text-gray-700 text-base">
                Our safety equipment products are made from high-quality
                materials that are designed to last, even in the toughest of
                conditions.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white mx-2 flex-1 shadow-2xl rounded-2xl hover:bg-gray-200">
            <div className="px-6 py-4">
              <FaCar className="text-red-600 text-4xl" />
              <div className="font-bold text-2xl mb-2">ISI Approved</div>
              <p className="text-gray-700 text-base">
                Our safety equipment products are ISI (Indian Standards
                Institute) approved, which means that they meet the stringent
                quality and safety requirements set by the Indian government.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white mx-2 flex-1 shadow-2xl rounded-2xl hover:bg-gray-200">
            <div className="px-6 py-4">
              <FaCar className="text-red-600 text-4xl" />
              <div className="font-bold text-2xl mb-2">Customization</div>
              <p className="text-gray-700 text-base">
                We understand that every customer has unique safety
                requirements, which is why we offer a wide range of customizable
                safety equipment products to meet the needs of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex md:flex-row items-center p-24">
          <div>
            <img
              src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
              alt="fire Brigade"
              className="rounded-3xl mr-44"
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">FIRE HYDRANT SERVICES</h1>
            <br />
            <p className="text-gray-600">
              A fire hydrant system is a crucial component of any building’s
              fire safety infrastructure. It comprises a network of pipes and
              valves that are connected to a pressurized water source, such as a
              water tank or municipal water supply. In the event of a fire, the
              hydrant system allows firefighters to quickly and easily access a
              large volume of water, helping to extinguish flames and prevent
              the spread of fire.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-28 py-24">
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">FIRE EXTINGUISHERS</h1>
            <br />
            <p className="text-gray-600">
              Fire extinguishers are an essential component of any fire safety
              plan. They are designed to quickly and effectively extinguish
              small fires, preventing them from spreading and causing extensive
              damage. We offer a range of fire extinguisher services to help you
              keep your building safe and compliant with local fire codes and
              regulations.
            </p>
          </div>
          <div>
            <img
              src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
              alt="fire Brigade"
              className="rounded-3xl ml-24 h-80 "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-44 py-24">
          <div>
            <img
              src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
              alt="fire Brigade"
              className="rounded-3xl h-80 "
            />
          </div>
          <div className="max-w-lg ml-14">
            <h1 className="text-4xl font-serif">SPRINKLE SYSTEM</h1>
            <br />
            <p className="text-gray-600">
              A sprinkler system is a critical component of any building’s fire
              safety plan. It consists of a network of pipes and sprinkler heads
              that are installed throughout the building and connected to a
              pressurized water supply. When a fire is detected, the sprinkler
              system activates and sprays water onto the flames, helping to
              extinguish the fire and prevent it from spreading.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-28 py-24">
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">FOAM POURER SYSTEM</h1>
            <br />
            <p className="text-gray-600">
              When it comes to fire protection, traditional water-based
              sprinkler systems may not always be the best choice. Certain types
              of fires, such as those involving flammable liquids or gases, can
              actually be spread and made more dangerous by the use of water.
              That’s where foam pourer systems come in – they are a highly
              effective alternative to traditional sprinkler systems that can
              suppress these types of fires more efficiently.
            </p>
          </div>
          <div>
            <img
              src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
              alt="fire Brigade"
              className="rounded-3xl ml-20  h-80     "
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center px-44 py-24">
          <div>
            <img
              src="https://imgs.search.brave.com/-1uUuGEoE3q_S0siodb1c03LB2Pt28aQK_HUPTVQzhc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODk3ODk2OTIyNDgt/MTVhZmJmMmRjZGEx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OFpt/bHlaU1V5TUcxaGJu/eGxibnd3Zkh3d2ZI/eDhNQT09"
              alt="fire Brigade"
              className="rounded-3xl mr-44 w-96 h-80 "
            />
          </div>
          <div className="max-w-lg ">
            <h1 className="text-4xl font-serif">
              INDUSTRIAL FIRE SAFETY EQUIPMENTS
            </h1>
            <br />
            <p className="text-gray-600">
              Industrial fire safety equipment is essential for protecting both
              personnel and property in industrial environments where there is a
              high risk of fire. We offer a wide range of industrial fire safety
              equipment to help you prevent, detect, and extinguish fires in
              your facility.
            </p>
          </div>
        </div>
      </section>
      <section className="p-10">
        <h1 className="text-6xl text-center">All Products</h1>
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </section>
    </div>
  );
}
