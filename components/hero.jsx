import Image from 'next/image';
import React from 'react';
import { HO,LO } from './images';


const Hero = () => {
  return (
    <section className='relative w-full pb-10 mx-auto'>
      <div className='bg-[#eeebe2] h-[70vh] w-full relative mx-auto flex justify-center '>
      <Image src={LO} className='top-0 left-0 w-[500px] h-[100%] object-contain ' />
      <div className='flex flex-col absolute inset-0 items-center text-center'>
        <div className='absolute top-20'>
          {/* <p className='font-semibold text-[#918570]'>POLARIZED SUNGLASSES</p>
          <h1 className='font-normal text-[50px]'>Sandstorm Sunglasses</h1> */}
        </div>
        <div className='flex absolute bottom-10 gap-5 justify-center'>
            <button className='px-5 py-2 text-white font-bold bg-[#ccba99] text-[13px]'>OPEN SHOP</button>
            <button className='border-solid border-b-2 font-medium text-[#555353] border-[#ccba99]'>View more</button>
          </div>
      </div>
      </div>


    </section>
  )
}

export default Hero