import React from 'react'

const CartProducts = ({ item }) => {
  const {id, name, image, price, amount } = item;
  return (
    
      <div className='flex'>
        <div className='w-full min-h-[150px] flex items-center gap-x-4'>
          <img src={image} alt={name} className='max-w-[80px]'/>
          <div>
            <div>
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default CartProducts