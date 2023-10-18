'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { HO,LO } from './images';
import { fadeIn } from './utils/motion';
import { motion } from "framer-motion";
import { EffectFade, Autoplay,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';




const SliderTab = ({name, price,image}) => {
  return (
    <div>
      <div className='flex gap-x-20 lg:flex-row flex-col w-full items-center bg-[#eaeaea] bg-hero  lg:bg-cover bg-contain mt-10'>
          <div className=' w-full lg:w-[40%] flex flex-col gap-4'>
            <h1 className='text-[30px] sm:text-[50px] font-bold text-center sm:text-left'>{name}</h1>
            <p className='font-medium w-full text-center sm:text-left text-[13px] sm:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit impedit ratione repellendus illo et ipsam cupiditate eius vero nulla Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, consequuntur.</p>
            <p className='font-medium text-[17px] text-center sm:text-left'>$ {price}</p>
            <div className='flex gap-x-4 sm:justify-start justify-center'>
            <button  className="px-6 py-3 bg-black text-white font-bold rounded-xl ">
            EXPLORE
            </button>
            </div>
          </div>
          <div className='flex w-full  lg:w-[60%] opacity-80'>
            <img src={image} alt="" className='w-full'/>
          </div>
        </div>
    </div>
  )
}


const Hero = () => {
  return (
    <section className='relative max-w-[2000px] mx-auto bg-[#eaeaea] rounded-xl'>
      <div className='h-screen lg:h-[85vh] mx-auto max-w-[1500px] px-7 lg:px-20 flex items-center'>
        <Swiper
        slidesPerView={1}
        modules={[Autoplay, EffectFade, Pagination]}
        pagination={{ clickable: true, dynamicBullets: true, }}
        effect='fade'
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        >
        <SwiperSlide>
          <SliderTab name="sunglasses" price="200" image="glasses4.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderTab name="sunglasses2" price="100" image="glasses3.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderTab name="sunglasses3" price="300" image="glasses5.png"/>
        </SwiperSlide>
        </Swiper>
      </div>


    </section>
  )
}

export default Hero