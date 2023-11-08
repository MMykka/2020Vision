'use client'

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "./utils/motion";

const end = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className=" py-16 relative w-full bg-[#eee]">
      <motion.div
      variants={fadeIn("up","spring", 0.5, 1)}
      className="flex lg:flex-row flex-col justify-center items-center max-w-6xl mx-auto ">
        <motion.div
        variants={slideIn("left","spring", 0.5, 1.5)}
        className="flex-col w-full text-center lg:text-left p-5">
          <h1 className="text-[45px]">
            Best selection of <br />
            <span className={`font-medium border-b-4 border-[#dfdfdf]`}>
              High Quality
            </span>{" "}
            lenses.
          </h1>
          <p className=" text-gray-500 mt-5  mx-auto lg:mx-0">
            Sit tellus lobortis sed senectus vivamus molestie.Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet{" "}
          </p>

          <div className="flex mt-10 gap-5 justify-center lg:justify-start">
            <button
              type="button"
              className="px-5 py-3 bg-black rounded-xl  text-[15px] text-white font-bold  "
            >
              CONTACT US
            </button>
            <button
              type="button"
              className="px-7 py-3 border-2 rounded-xl font-medium"
            >
              CLICK ME
            </button>
          </div>
        </motion.div>

        <motion.div
        variants={slideIn("right","spring", 0.5, 1.5)}
        className="w-full flex gap-5 justify-center p-10 lg:p-0">
          {/* <img className=" w-[40%] xl:w-[50%] " src="glass1.png" alt="photo" />
          <img
            className=" w-[40%] xl:w-[50%]"
            src="glass2.png"
            alt="photo"
          /> */}
          <img src="img22.jpg" alt="image" className="w-full "/>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default end;
