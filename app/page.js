import Image from 'next/image'
import { Nav, About, Hero, Footer, Products,BestSeller, BestSellerTwo, BestSellerThree, End } from '@/components'
import CardProvider from '@/context/CardContext'
import { NewArrival } from '@/components/constants'


export default function Home() {

  return (
    <section className='relative z-0 w-full h-full mx-auto  overflow'>
     
      <Hero/>
      <BestSeller/>
      <Products/>
      <BestSellerTwo/>
      <About/>
      <BestSellerThree/>
      <End/>
     
    </section>
  )
}
