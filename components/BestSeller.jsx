"use client";

import React from "react";
import { useState } from "react";
import { NewArrival, EyeGlasse, SunGlasse } from "./constants";
import { EyeGlasses, NewArrivals, SunGlasses } from ".";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";


const newProducts = NewArrival;
const eyeProducts = EyeGlasse;
const SunProducts = SunGlasse;


const FeaturedGlasses = () => (
  <div>
    <div className="relative w-full h-[230px] bg-white">
      <img src={'glasses4.png'} alt={'glasses'} className="w-full h-full object-contain rounded-lg"/>
    </div>
    <div className="text-white flex flex-col">

        <div className="">
        <h1 className="text-[23px] mt-5">Full Rim EyeGlasses</h1>
          <p className="text-[12px] font-bold mt-2">SIZE</p>
          <div className="flex gap-2 ">
          <button className="font-medium border-1 border p-1">SMALL</button>
          <button className="font-medium border-1 border p-1">MEDIUM</button>
          </div>
          <p className="w-full text-left mt-5">$29.99</p>
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
)

const BestSeller = () => {
  return (
    <section className="w-full mx-auto relative px-10 sm:px-16 xl:px-0 py-10 bg-black">
      <div className="max-w-7xl flex xl:flex-row flex-col mx-auto justify-center items-center">
        <div className="text-white  p-3 sm:p-10  w-full xl:w-1/2 flex flex-col items-start justify-center">
          <h1 className="text-[40px] font-bold">Specks Which your Love to wear</h1>
          <p className="font-medium mt-4">Eyeglasses are the most common form of eyewear used to correct or improve many types of vision problems. They are a frame that holds two pieces of glass or plastic, which have been ground into lenses to correct refractive errors.</p>
          <div className=" px-3 py-2 border flex gap-10 justify-between mt-5">
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
        <div className="w-full xl:w-1/2 lg:p-10 xl:p-0">
          <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        breakpoints={{
          450:{
            slidesPerView: 2,
          },
          700:{
            slidesPerView: 3,
          },
        }}
          >
            <SwiperSlide>
            <FeaturedGlasses/>
            </SwiperSlide>
            <SwiperSlide>
            <FeaturedGlasses/>
            </SwiperSlide>
            <SwiperSlide>
            <FeaturedGlasses/>
            </SwiperSlide>
            <SwiperSlide>
            <FeaturedGlasses/>
            </SwiperSlide>
            <SwiperSlide>
            <FeaturedGlasses/>
            </SwiperSlide>
            <SwiperSlide>
            <FeaturedGlasses/>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
