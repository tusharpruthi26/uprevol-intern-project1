import React from "react";

export default function SprinklerSystem() {
  return (
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
  );
}
