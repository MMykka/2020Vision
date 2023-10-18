import React from "react";
import { LO, background, Woman } from "./images";
import Image from "next/image";

const About = () => {
  return <section className="relative px-5 sm:px-16 py-20 w-full">
    <div className="relative bg-[#dfdfdf] w-full h-[60vh] bg-hold bg-cover rounded-xl py-10">
      <div className="w-full absolute flex justify-center text-[20px] text-center sm:text-[30px] font-medium">
        <p>We Can Take care Of Your Eyes!</p>
      </div>
      <div className="w-full h-full flex justify-center items-center rounded-xl">
        <button className="bg-black py-3 sm:py-4 sm:px-8 px-4 text-white font-bold text-[15px] sm:text-[17px] rounded-xl">Explore Now</button>
      </div>
    </div>
  </section>;
};

export default About;
