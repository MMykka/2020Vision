import React from 'react'
import { Sections } from './constants'
import Image from 'next/image'
import { glasses, sunglasses, Man, Woman} from './images'

const Products = () => {

  const Sectioncard1 = () => (
    <div className='w-full xl:w-[500px] h-[500px] bg-prod1 bg-cover rounded-xl'>
        <div className='flex flex-col items-start justify-end h-full w-full text-[35px] text-white font-medium p-5 px-10 tracking-wider'>
          <p>How Clear Can Glasses Be?</p>
          <button className='bg-black mt-4 py-2 px-10 text-white font-bold text-[17px] rounded-xl'>Explore</button>
        </div>
    </div>  
  )
  const Sectioncard2 = () => (
    <div className=' w-full xl:w-[500px] h-[500px] bg-prod2 bg-cover rounded-xl'>
        <div className='flex flex-col items-start justify-end h-full w-full text-[35px] text-white font-medium p-5 px-10 tracking-wider'>
          <p>Is Glasses For The <br className='hidden sm:block'/> Best?</p>
          <button className='bg-black mt-4 py-2 px-10 text-white font-bold text-[17px] rounded-xl'>Explore</button>
        </div>
    </div>  
  )

   
  return (
    <section className='w-full relative flex flex-col justify-center px-5 sm:px-16 py-16 mx-auto'>
        <div className='flex mx-auto gap-[55px] lg:flex-row flex-col'>
            <Sectioncard1/>
            <Sectioncard2/>
        </div>
    </section>
  )
}

export default Products