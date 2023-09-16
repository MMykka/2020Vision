'use client'

import React from 'react'
import { useState } from 'react'
import { NewArrival, EyeGlasse, SunGlasse } from './constants'
import { EyeGlasses, NewArrivals, SunGlasses } from '.'

const newProducts = NewArrival;
const eyeProducts = EyeGlasse;
const SunProducts = SunGlasse;

const BestSeller = () => {
  const [active, setActive] = useState("first")

  return (
    <section className='max-w-7xl mx-auto relative flex justify-center px-16 py-10 flex-col border-b-2 border-t-2'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-[30px]'>Bestseller Products</h1>
            <p className='text-[18px] font-medium text-gray-500 text-center sm:text-left'>There are many variations of passages of lorem</p>
        </div>

          <div className='flex justify-center gap-[2rem] mt-5 text-[16px] font-[400] text-gray-500 ' >
            <button onClick={() => setActive("first")} className={`${
              active === "first"
              ? " text-black border-solid border-b-2 border-black font-[500]"
              :" text-gray-500 "
            } `}>NEW ARRIVALS</button>
            <button onClick={() => setActive("second")} className={`${
              active === "second"
              ? " text-black border-solid border-b-2 border-black font-[500]"
              :" text-gray-500 "
            } `}>EYEGLASSES</button>
            <button onClick={() => setActive("third")} className={`${
              active === "third"
              ? " text-black border-solid border-b-2 border-black font-[500]"
              :" text-gray-500 "
            } `}>SUNGLASSES</button>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-3 mx-auto'>
              {active === "first" && newProducts.map((product) => (
                <NewArrivals product={product}/>
              ))}
              {active === "second" && eyeProducts.map((product) => (
                <EyeGlasses product={product}/>
              ))}
              {active === "third" && SunProducts.map((product) => (
                <SunGlasses product={product}/>
              ))}
          </div>   

          
    </section>
  )
}

export default BestSeller