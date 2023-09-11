import React from 'react'

export const EyeGlasses = ({name,description,price}) => {
  return (
    <div className="p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
              <img src={"https://images.pexels.com/photos/131018/pexels-photo-131018.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={name} className="w-full h-full object-cover rounded-2xl"/>
          </div>
          
          <div className="mt-1 ">
            <h3 className="text-black text-center font-bold text=[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px] text-center">{description}</p>
            <p className="mt-2 text-secondary text-[14px] text-center">{price}</p>
          </div>

        </div>
  )
}
