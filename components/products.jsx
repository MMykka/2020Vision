import React from 'react'
import { Sections } from './constants'
import Image from 'next/image'
import { glasses, sunglasses, Man, Woman} from './images'

const Products = () => {

  const Sectioncards = ({image,name,title,color}) => (
    <div className={`mx-auto flex justify-between px-2  ${color}`} >
        <div className='w-1/2 flex flex-col gap-3 items-start justify-center p-2'>
          <p>{title}</p>
          <h1 className='text-[40px]'>{name}</h1>
          <button className='text-start'>View more</button>
        </div>
        <div className="w-1/2 h-full object-cover">
          <Image src={image} objectFit='contain' className='object-cover h-full'/>
        </div>
    </div>  
  )

   
  return (
    <section className='w-full relative flex flex-col justify-center px-16 py-6 mx-auto'>
        <div className='flex mx-auto gap-4 sm:flex-row flex-col'>
          {Sections.map((card) => (
            <Sectioncards key={card.name} {...card}/>
          ))}
        </div>
    </section>
  )
}

export default Products