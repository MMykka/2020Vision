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
          <img src="logos2.png" className="w-full h-full" />
        </motion.div>
        <motion.div 
          variants={fadeIn("up", "spring",0.8, 1)}
        className=" w-full lg:max-w-6xl text-white">
          <Swiper
            slidesPerView={2}
            spaceBetween={100}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2300,
              disableOnInteraction: false,
            }}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: 200,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 200,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 150,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 100,
              },
            }}
          >
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 0.5, 0.5)}
              className="w-[160px] h-[160px]">
                <img src="AndyWolff.png" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 1, 0.5)}
              className="w-[160px] h-[160px]" >
                <img src="Dita.png" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 1.5, 0.5)}
              className="w-[160px] h-[160px] object-fill">
                <img src="Nikon.png" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2, 0.5)}
              className="w-[160px] h-[160px]">
                <img src="PD.png" />
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="w-[160px] h-[160px]">
                <img src="RayBan.png" className="object-cover"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="w-[130px] h-[130px]">
                <img src="Oakley.png" />
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
