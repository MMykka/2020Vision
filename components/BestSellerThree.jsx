"use client";

import React from "react";
import { useState,useRef } from "react";
import { NewArrival, EyeGlasse, SunGlasse } from "./constants";
import { EyeGlasses, NewArrivals, SunGlasses } from ".";
import { motion,useScroll } from "framer-motion";

const newProducts = NewArrival;
const eyeProducts = EyeGlasse;
const SunProducts = SunGlasse;

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const BestSellerThree = () => {
  const ref = useRef(null);
  const {scrollYProgress}= useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  })

  return (

    <motion.div
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    ref={ref}>
      <section className="max-w-[100%] mx-auto relative bg-[#eee}">
      <div className="relative bottom-[40px] w-full px-5 res1:px-0  flex justify-center items-center transitio-all duration-125 ">
        <Swiper
          spaceBetween={0}
          effect={"coverflow"}
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
            1024: {
              slidesPerView: 4,
            },
            1300: {
              slidesPerView: 5,
            },
          }}
        >
          {SunProducts.map((product, index) => (
            <SwiperSlide
              key={product.id}
              className="transition-all duration-125"
            >
              {({ isActive }) => (
                <SunGlasses product={product} isActive={isActive} index={index}/>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </motion.div>
  );
};

export default BestSellerThree;
