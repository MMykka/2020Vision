'use client'

import Image from 'next/image'
import { Nav, About, Hero, Footer, Products,BestSeller, BestSellerTwo, BestSellerThree, End, EndTwo } from '@/components'
import CardProvider from '@/context/CardContext'
import { NewArrival } from '@/components/constants'
import { useEffect, useState } from 'react'
import Loader from '@/components/loader/loader'


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }

    fakeDataFetch();
  }, [])
  

  return (
    isLoading ? <Loader /> : <section className='relative z-0 w-full h-full mx-auto overflow-hidden bg-[#eee]'>
    <Nav />
    <Hero/>
    <BestSellerThree/>
    <End/>
    <BestSeller/>
    <EndTwo/>
  </section>
  )
}
