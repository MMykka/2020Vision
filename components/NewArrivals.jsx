import React from 'react'

const NewArrivals = ({name,description,price}) => {
  return (
    <div className="p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px] sm:scale-125 scale-100">
              <img src={"FerrariGlasses.png"} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          </div>
          
          <div className="mt-1 ">
            <h3 className="text-black text-center font-bold text=[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] text-center">{description}</p>
            <p className="mt-2 text-secondary text-[14px] text-center">{price}</p>
          </div>

        </div>
  )
}

export default NewArrivals