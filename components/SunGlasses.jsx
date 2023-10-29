'use client'

import { CardContext } from "@/context/CardContext";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion";

const SunGlasses = ({ product, isActive }) => {
  const { name, description, price, id, image } = product;
  const { addToCart } = useContext(CardContext);
  return (
    <div
    className={`p-7 bg-[#222] rounded-2xl w-full  sm:w-[300px] transitio-all duration-125 ${isActive? "transitio-all duration-125 shadow-card" : "transitio-opacity duration-125 opacity-90"}`}>
    <div className="relative w-full h-[200px] bg-white">
      <img src={'glasses4.png'} alt={'glasses'} className="w-full h-full object-contain rounded-lg"/>
    </div>
    <div className="text-white flex flex-col">

        <div className="">
        <h1 className="text-[23px] mt-5">Full Rim EyeGlasses</h1>
          <p className="text-[12px] font-bold mt-2">SIZE</p>
          <div className="flex gap-2 ">
          <button className="font-medium border-1 border px-2 py-1">SMALL</button>
          <button className="font-medium border-1 border px-2 py-1">MEDIUM</button>
          </div>
          <p className="w-full text-left font-medium mt-5">$29.99</p>
        </div>
        <div className="px-3 py-2 border flex justify-between mt-5">
          <button className=" font-medium">
            Explore
          </button>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>

          </div>
        </div>
      </div>
          
  </div>
  );
};

export default SunGlasses;
