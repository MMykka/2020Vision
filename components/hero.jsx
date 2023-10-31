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

const HeroSwiper = () => (
  <div className="w-full ">
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 2300,
        disableOnInteraction: false,
      }}
    >
      {newProducts.map((product) => (
        <SwiperSlide>
          <NewArrivals product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const Hero = () => {
  
  return (
    <motion.div 
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className="">
      <section
      
      className="relative max-w-[100%] mx-auto bg-[#000]">
      <motion.div 
      variants={fadeIn("up","spring", 0.3, 1)}
      className="h-[100vh] w-full flex flex-col bg-hero bg-cover justify-center items-center">
        <motion.div
        variants={fadeIn("up", "spring",0.5, 1)}
        className=" w-[400px]">
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
        className="w-full px-10 sm:ml-10 xl:ml-20 mx-auto  text-white">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 200,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1000: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 0.5, 0.5)}
              className=" w-full sm:w-[160px] px-10 sm:p-0 h-[130px] flex ">
                <img src="andy2.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 1, 0.5)}
              className=" w-full sm:w-[100px] p-10 sm:p-0 h-[130px] flex items-center" >
                <img src="dita2.png"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 1.5, 0.5)}
              className=" w-full sm:w-[100px] px-10 sm:p-0 h-[130px] flex justify-center items-center">
                <img src="nikon2.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2, 0.5)}
              className="w-full sm:w-[180px] h-[130px]  flex items-center ">
                <img src="PD.png" className="w-full h-full lg:-translate-x-10"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="w-full sm:w-[130px] h-[130px] p-5 sm:p-0 sm:py-10 flex items-center">
                <img src="RayBan.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="w-full sm:w-[100px] h-[130px] p-5   sm:py-10 flex items-center object-center">
                <img src="okley.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
    </motion.div>
 

  );
};

export default Hero;