import { CardContext } from '@/context/CardContext';
import React, { useContext } from 'react'

export const EyeGlasses = ({product}) => {
  const {name,description,price,id,image} = product;
  const {addToCart} = useContext(CardContext);
  return (
    <div className="p-5 rounded-lg sm:w-[340px] w-full bg-[#eaeaea]">
          <div className="relative w-full h-[280px] scale-100">
              <img src={image} alt={name} className="w-full h-full object-cover rounded-lg"/>
          </div>
          
          <div className="mt-1 ">
        <div className='flex justify-between'>
        <h3 className="text-black text-center font-bold text=[24px]">{name}</h3>
        <p className="text-secondary text-[14px] text-center">${price}</p>
        </div>
        <div className="flex gap-x-4 justify-between mt-3">
          <button
            className="px-10 py-3 bg-black text-white rounded-2xl"
            onClick={() => addToCart(product, id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </button>
          <button className="px-10 py-3 bg-black text-white rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
          </button>
        </div>
      </div>
        </div>
  )
}
