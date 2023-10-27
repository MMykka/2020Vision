import React from "react";
import { LO, background, Woman } from "./images";
import Image from "next/image";

const About = () => {
  return <section className="relative px-5 sm:px-16 py-20 w-full">
    <div className="relative bg-[#dfdfdf] w-full h-[60vh] bg-hold bg-cover rounded-xl">
      <div className="w-full h-full flex flex-col justify-center  text-[20px] text-center sm:text-[30px] font-medium gap-y-10">
        <p>We Can Take care Of Your Eyes!</p>
        <p className="text-[15px] px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque!</p>
      <div className="w-full flex justify-center items-center rounded-xl">
        <a href="Tel:76174234" className="bg-black py-3 sm:py-4 sm:px-8 px-4 text-white font-bold text-[15px] sm:text-[17px] rounded-xl">Call To Action</a>
      </div>
      </div>
    </div>
  </section>;
};

export default About;
