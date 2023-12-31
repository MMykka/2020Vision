import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className='w-full h-screen mx-auto fixed bg-black z-50 text-white flex justify-center items-center'>
     <motion.div
        className=" w-[100px] sm:w-[200px]">
          <img src="gif.gif" className="w-full h-full" />
        </motion.div>
    </div>
  )
}

export default Loader