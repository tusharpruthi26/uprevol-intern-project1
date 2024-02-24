import React from "react";

export default function FireHydrant() {
  return (
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
            A fire hydrant system is a crucial component of any building’s fire
            safety infrastructure. It comprises a network of pipes and valves
            that are connected to a pressurized water source, such as a water
            tank or municipal water supply. In the event of a fire, the hydrant
            system allows firefighters to quickly and easily access a large
            volume of water, helping to extinguish flames and prevent the spread
            of fire.
          </p>
        </div>
      </div>
    </section>
  );
}
