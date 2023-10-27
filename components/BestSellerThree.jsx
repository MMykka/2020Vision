"use client";

import React from "react";
import { useState } from "react";
import { NewArrival, EyeGlasse, SunGlasse } from "./constants";
import { EyeGlasses, NewArrivals, SunGlasses } from ".";

const newProducts = NewArrival;
const eyeProducts = EyeGlasse;
const SunProducts = SunGlasse;

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "swiper/css/autoplay";



const BestSellerThree = () => {
  const swiper = useSwiper();

  const handlePrevButtonClick = () => {
    console.log('Previous button clicked');
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="max-w-[100%] mx-auto relative bg-black">
      <div className="relative w-full px-5 res1:px-0  flex justify-center items-center py-20 transitio-all duration-125 ">
        <Swiper
        spaceBetween={0}
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}   
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            
          },
          800: {
            slidesPerView: 3,
            
          },
          1024:{
            slidesPerView: 4,

          },
          1300:{
            slidesPerView: 5,
          }
          
          

        }}
        >
          {SunProducts.map((product) => (
                <SwiperSlide key={product.name} className="transition-all duration-125">
                   {({ isActive }) => (
                      <SunGlasses product={product} isActive={isActive}/>
                    )}
                </SwiperSlide>
              ))}
              
        </Swiper>
            
        
      </div>
    </section>
  );
};

export default BestSellerThree;