'use client'

import React from 'react'
import { useState } from 'react'
import { NewArrival, EyeGlasse, SunGlasse } from './constants'
import { EyeGlasses, NewArrivals, SunGlasses } from '.'

const newProducts = NewArrival;
const eyeProducts = EyeGlasse;
const SunProducts = SunGlasse;

const BestSellerTwo = () => {

  return (
    <section className=' mx-auto relative flex justify-center px-10 sm:px-16 py-20  flex-col'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center text-[26px] border-b-2 font-medium'>Featured</h1>
        </div>

      
          <div className='flex flex-wrap justify-center items-center gap-10 mx-auto mt-10'>
              {SunProducts.map((product) => (
                <SunGlasses product={product}/>
              ))}
          </div>   

          
    </section>
  )
}

export default BestSellerTwo