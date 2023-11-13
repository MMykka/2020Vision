"use client";

import Image from "next/image";
import React, { useState,useRef } from "react";
import { HO, LO } from "./images";
import { fadeIn, slideIn, staggerContainer } from "./utils/motion";
import { motion, useScroll } from "framer-motion";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NewArrival, EyeGlasse, SunGlasse } from "./constants";
import { EyeGlasses, NewArrivals, SunGlasses } from ".";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const newProducts = NewArrival;

const Hero = () => {
  
  return (
    <motion.div 
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className="">
      <section
      
      className="relative max-w-[100%] mx-auto bg-[#000] h-screen">
      <motion.div 
      variants={fadeIn("up","spring", 0.3, 1)}
      className="h-screen w-full flex flex-col bg-hero bg-cover justify-center items-center">
        <motion.div
        variants={fadeIn("up", "spring",0.5, 1)}
        className=" w-[400px] mb-5">
          <motion.div
          animate={{
            y: [0, 20, 0]
          }}
          transition={{
            duration:3.5,
            repeat: Infinity,
            repeatType: 'loop'
            }}
          >
              <img src="logos2.png" className="w-full h-full" />
          </motion.div>
        </motion.div>
        <motion.div 
          variants={fadeIn("up", "spring",0.8, 1)}
        className="slider">
              <div className="slider-track">
                <div className="slide">
                  <img src="okley.png" alt="" height={"100px"} width={"250px"}/>
                </div>
                <div className="slide">
                  <img src="nikon2.png" alt="" height={"100px"} width={"250px"}/>
                </div>
                <div className=" w-[300px] h-[100px] translate-y-8">
                  <img src="andy.png" alt="" height={"100px"} width={"300px"}/>
                </div>
                <div className="slide translate-y-4">
                  <img src="dita2 .png" alt="" height={"100px"} width={"250px"}/>
                </div>
                <div className="w-[450px] h-[100px] translate-y-3">
                  <img src="PD.png" alt="" height={"100px"} width={"450px"}/>
                </div>
                <div className="slide">
                  <img src="rayban2.png" alt="" height={"100px"} width={"250px"}/>
                </div>
                <div className="slide">
                  <img src="okley.png" alt="" height={"100px"} width={"250px"}/>
                </div>
                <div className="slide">
                  <img src="nikon2.png" alt="" height={"100px"} width={"250px"}/>
                </div>
                <div className=" w-[300px] h-[100px] translate-y-8">
                  <img src="andy.png" alt="" height={"100px"} width={"300px"}/>
                </div>
                <div className="slide translate-y-4">
                  <img src="dita2.png" alt="" height={"100px"} width={"250px"}/>
                </div>
                <div className="w-[450px] h-[100px] translate-y-3">
                  <img src="PD.png" alt="" height={"100px"} width={"450px"}/>
                </div>
                <div className="slide">
                  <img src="rayban2.png" alt="" height={"100px"} width={"250px"}/>
                </div>
            </div>

        </motion.div>
      </motion.div>
    </section>
    </motion.div>
 

  );
};

export default Hero;