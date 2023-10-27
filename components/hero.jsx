'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { HO,LO } from './images';
import { fadeIn } from './utils/motion';
import { motion } from "framer-motion";
import { EffectFade, Autoplay,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NewArrival, EyeGlasse, SunGlasse } from "./constants";
import { EyeGlasses, NewArrivals, SunGlasses } from ".";

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


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
)


const Hero = () => {
  return (
    <section className='relative max-w-[100%] mx-auto bg-[#000]'>
      <div className='h-screen w-full flex '>
        <div className='pr-10 pl-5 xl:flex flex-col justify-center hidden'>
            <h1 className='leading-10 text-left text-white text-[40px]'>Featured <br/> <span className='font-bold '>Collection</span></h1>
          <div className='mt-10'>
    <div className="relative h-[300px] w-[300px] bg-white">
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
        </div>
        <div className='flex-1 flex flex-col justify-end items-start bg-hero bg-cover py-10 px-5 sm:p-20 w-full'>
          <h1 className=' text-[25px] sm:text-[40px] lg:text-[50px] font-[500]'>Modern and timeless glasses <br className='hidden lg:block'/> from the best actress.</h1>
          <div className="px-5 py-2 border-2 border-black flex gap-5 justify-between mt-5">
          <button className="font-[500]">
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
    </section>
  )
}

export default Hero