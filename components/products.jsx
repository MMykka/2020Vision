'use client'

import React from 'react'
import { Sections } from './constants'
import Image from 'next/image'

import {Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

const Products = () => {

  return (
    <section className='w-full relative flex justify-center mx-auto bg-black'>
        <div className=' w-full lg:max-w-6xl text-white'>
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
            600:{
              slidesPerView: 3,
              spaceBetween: 200,
            },
            1000:{
              slidesPerView: 4,
              spaceBetween: 150,
            },
            1200:{
              slidesPerView: 5,
              spaceBetween: 100,
            },
            
          }}
          >
            <SwiperSlide >
              <div className='w-[130px] h-[130px]'>
              <img src='logo3.png'/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[130px] h-[130px]'>
              <img src='logo3.png'/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[130px] h-[130px]'>
              <img src='logo3.png'/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[130px] h-[130px]'>
              <img src='logo3.png'/>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='w-[130px] h-[130px]'>
              <img src='logo3.png'/>
              </div>
            </SwiperSlide>
    
          </Swiper>
        </div>
    </section>
  )
}

export default Products