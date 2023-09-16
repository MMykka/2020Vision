import Image from 'next/image';
import React from 'react';
import { HO,LO } from './images';


const Hero = () => {
  return (
    <section className='relative w-full pb-10 mx-auto'>
      <div className='bg-[#e4d9b962z] h-[60vh]  w-full relative mx-auto flex justify-center items-center'>
      <Image alt='logo' src={LO} className='top-0 left-0 w-[700px]  h-[100%] object-cover ' />
      <div className='flex flex-col absolute inset-0 items-center text-center'>
        <div className='absolute top-[70px]  flex flex-col items-center justify-center'>
          <p className='font-semibold text-[14px] sm:text-[15px] text-[#b6a381]'>POLARIZED SUNGLASSES</p>
          <h1 className='font-normal text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[60px]'>Sandstorm Sunglasses</h1>
         <div className='w-[300px] sm:w-[500px] xl:w-[600px] 2xl:w-[700px]   h-[180px] mt-2 object-center'>
         <img src="FerrariGlasses.png" alt="" className='w-full h-full object-cover opacity-80' />
         </div>
        </div>
        <div className='flex absolute bottom-[50px] sm:bottom-[80px] lg:bottom-[60px] xl:bottom-[110px]  gap-5 justify-center'>
            <button className='px-5 py-2 text-white font-bold bg-[#ccba99] text-[13px]'>OPEN SHOP</button>
            <button className='border-solid border-b-2 font-medium text-[#555353] border-[#ccba99]'>View more</button>
          </div>
      </div>
      </div>


    </section>
  )
}

export default Hero