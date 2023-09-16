import React, { useContext } from 'react'
import { CardContext } from '@/context/CardContext'

const NewArrivals = ({ product }) => {
  const {name,description,price,id,image} = product;
  const {addToCart} = useContext(CardContext);
  return (
    <div className="p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px] sm:scale-125 scale-100">
              <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          </div>
          
          <div className="mt-1 text-center">
            <h3 className="text-black text-center font-bold text=[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] text-center">{description}</p>
            <p className="mt-2 text-secondary text-[14px] text-center">{price}</p>
            <button onClick={() => addToCart(product, id)}>Add</button>
          </div>

        </div>
  )
}

export default NewArrivals