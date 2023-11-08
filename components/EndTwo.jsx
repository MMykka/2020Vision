'use client'

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./utils/motion";

const EndTwo = () => {
  return (
    <motion.section 
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className="py-16 px-10 relative w-full bg-loc bg-cover lg:h-screen flex justify-center items-center flex-col">

      <motion.div
        variants={fadeIn("up","spring", 0.5, 1)}
      className="w-full text-[15px] sm:text-[20px] lp:text-[30px] dp:text-[40px] text-white text-center p-5 font-medium">
        <h1>VISIT US TO GET A FREE EYE TEST</h1>
        <h1>AND TO TAKE A LOOK AT OWN VAST COLLECTION OF GLASSES</h1>
      </motion.div> 
      <motion.div 
      variants={fadeIn("up","spring", 0.8, 1)}
      className="flex flex-wrap sm:flex-row dp:flex-wrap justify-center items-center gap-5 lp:gap-10 ">
        <motion.div
        variants={fadeIn("right","spring", 0.5, 0.5)}
        className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] res3:w-[250px] res3:h-[250px] lp:w-[300px] lp:h-[300px] dp:w-[400px] dp:h-[400px] rounded-[100px] shadow-card2">
          <a href={"https://maps.app.goo.gl/4XpWzancWPGoBA627"}>
            <img src={"mapss2.jpg"} alt="" className="w-full h-full rounded-[100px] transition-all duration-500 hover:scale-110" />
          </a>
        </motion.div>

        <motion.div
        variants={fadeIn("right","spring", 0.5, 0.5)}
        className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] res3:w-[250px] res3:h-[250px] lp:w-[300px] lp:h-[300px] dp:w-[400px] dp:h-[400px] rounded-[100px] shadow-card2 transition-all duration-500 hover:scale-110">
          <a href={"https://maps.app.goo.gl/89gQ2jNCzeM8Jzbj6"}>
            <img src={"mapss1.jpg"} alt="" className="w-full h-full rounded-[100px]" />
          </a>
        </motion.div>

        <motion.div
        variants={fadeIn("right","spring", 0.5, 0.5)}
        className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] res3:w-[250px] res3:h-[250px] lp:w-[300px] lp:h-[300px] dp:w-[400px] dp:h-[400px] rounded-[100px] shadow-card2 transition-all duration-500 hover:scale-110">
          <a href={"https://maps.app.goo.gl/7jcTSdCYo48F54189"}>
            <img src={"mapss3.jpg"} alt="" className="w-full h-full rounded-[100px]" />
          </a>
        </motion.div>
      </motion.div>
      <motion.a 
      href="tel:70482482"
      variants={fadeIn("up","spring", 0.5, 1)}
      className="px-5 py-3 bg-black text-white rounded-2xl text-[13px] sm:text-[20px] font-medium my-5">CALL TO ACTION</motion.a>
    </motion.section>
  );
};

export default EndTwo;
