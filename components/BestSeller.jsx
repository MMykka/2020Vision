'use client'

import React from 'react'
import { useState } from 'react'
import { NewArrival, EyeGlasse, SunGlasse } from './constants'
import { EyeGlasses, NewArrivals, SunGlasses } from '.'

const BestSeller = () => {
  const [active, setActive] = useState("first")
  return (
    <section className='max-w-7xl mx-auto relative flex justify-center px-16 py-10 flex-col'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-[30px]'>Bestseller Products</h1>
            <p className='text-[18px] font-medium text-gray-500'>There are many variations of passages of lorem</p>
        </div>

          <div className='flex justify-center gap-[2rem] mt-5 text-[18px] font-medium text-gray-500' >
            <button onClick={() => setActive("first")}>NEW ARRIVALS</button>
            <button onClick={() => setActive("second")}>EYEGLASSES</button>
            <button onClick={() => setActive("third")}>SUNGLASSES</button>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-3 mx-auto'>
              {active === "first" && NewArrival.map((New) => (
                <NewArrivals name={New.name} description={New.description} price={New.price}/>
              ))}
              {active === "second" && EyeGlasse.map((eye) => (
                <EyeGlasses name={eye.name} description={eye.description} price={eye.price}/>
              ))}
              {active === "third" && SunGlasse.map((sun) => (
                <SunGlasses name={sun.name} description={sun.description} price={sun.price}/>
              ))}
          </div>

        
    </section>
  )
}

export default BestSeller