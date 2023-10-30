import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className='w-full h-screen fixed bg-black z-50 text-white flex justify-center items-center'>
     <motion.div
        className=" w-full sm:w-[200px]">
          <img src="gif.gif" className="w-full h-full" />
        </motion.div>
    </div>
  )
}

export default Loader