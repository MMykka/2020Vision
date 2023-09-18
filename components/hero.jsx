'use client'

import Image from 'next/image';
import React from 'react';
import { HO,LO } from './images';
import { fadeIn } from './utils/motion';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className='relative w-full pb-10 mx-auto'>
      <div className='bg-[#e4d9b962] h-screen lg:h-[60vh] w-full relative mx-auto flex justify-center items-center bg-hero bg-contain'>
      <div className='flex flex-col items-center justify-center text-center w-full  h-full'>
        <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        variants={fadeIn("up", "spring", 0.5, 0.9)}
        className=' flex flex-col items-center justify-center'>
          <p className='font-semibold text-[14px] sm:text-[15px] text-[#b6a381]'>POLARIZED SUNGLASSES</p>
          <h1 className='font-normal text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px]'>Sandstorm Sunglasses</h1>
         <div className='w-full h-[200px] lg:h-[250px] mt-2 object-center'>
         <img src="glasses4.png" alt="" className='w-full h-full object-cover opacity-80' />
         </div>
        </motion.div>
        <motion.div 
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "spring", 0.6, 0.8)}
        viewport={{once: true, amount: 0.25}}
        className='flex  gap-5 justify-center mt-20 lg:mt-5 '>
            <button className='px-5 py-2 text-white font-bold bg-[#ccba99] text-[13px]'>OPEN SHOP</button>
            <button className='border-solid border-b-2 font-medium text-[#555353] border-[#ccba99]'>View more</button>
          </motion.div>
      </div>
      </div>


    </section>
  )
}

export default Hero