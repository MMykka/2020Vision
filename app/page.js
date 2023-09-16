import Image from 'next/image'
import { Nav, About, Hero, Footer, Products,BestSeller, } from '@/components'
import CardProvider from '@/context/CardContext'
import { NewArrival } from '@/components/constants'


export default function Home() {

  return (
    <section className='relative z-0 w-full  mx-auto overflow-hidden'>
     
      <Hero/>
      <Products/>
      <BestSeller/>
      <About/>
     
     
    </section>
  )
}
