import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className='w-full h-screen fixed bg-black z-50 text-white flex justify-center items-center'>
     <motion.div
        animate={{
          y: [0, 20, 0]
        }}
        transition={{
          duration:1.5,
          repeat: Infinity,
          repeatType: 'loop'
          }}
        className=" w-full sm:w-[400px]">
          <img src="logos2.png" className="w-full h-full" />
        </motion.div>
    </div>
  )
}

export default Loader