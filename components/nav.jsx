"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { navLinks } from "./constants";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import { fadeIn, navVariants, slideIn, staggerContainer } from "./utils/motion";
import { CardContext } from "@/context/CardContext";
import CartProducts from "./CartProducts";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const { cart, clearCart, total } = useContext(CardContext);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  if (typeof window !== "undefined") {
  window.addEventListener("scroll", changeColor);
}
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`w-full py-2 sm:px-16 px-6 overflow-hidden fixed top-0 left-0 z-10 transition-all duration-500 ${
        color ? "bg-black py-0" : "bg-once"
      }`}
    >
      <div className=" w-full flex justify-between lg:justify-center lg:p-5 items-center  mx-auto  duration-300 text-white ">
        
        <ul className="list-none hidden lg:flex flex-row text-[15px] gap-[60px] font-[500] ">
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div
          className={` lg:hidden w-[28px] h-[28px]  object-contain cursor-pointer duration-300 text-[#fff] ${
            toggle && "hidden"
          }`}
          onClick={() => setToggle(!toggle)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>
        <Link
          href="/"
          className="duration-300 lg:hidden block"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img alt="logo" src={"logo3.png"} width={70} height={20} />
        </Link>
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="overflow-hidden w-full lg:hidden flex flex-1 justify-start gap-x-20 items-center pr-2  sm:mr-[4rem] mr-0 text-[#000]"
      >
        <motion.div
          variants={slideIn("left", "spring", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          className={`${
            !toggle ? "hidden" : "flex"
          }  p-3 fixed top-0 text-[#fff] right-0 w-full h-screen bg-[#fff] z-10 flex flex-col justify-center items-center opacity-1`}
        >
          {/* inside mobile nav bar */}
          <div className="flex absolute top-5 right-0 px-5 text-[#000] justify-between w-full">
            <img
              src={toggle ? "close.svg" : "menu.svg"}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <ul className="list-none flex justify-end items-start flex-col gap-20">
            {navLinks.map((Link, index) => (
              <li
                key={Link.id}
                className={`text-[#111] font-poppins font-medium cursor-pointer text-[36px]`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* cart */}

      <motion.div
        variants={slideIn("right", "spring", 0.1, 0.8)}
        initial="hidden"
        whileInView="show"
        className={`${
          !toggleCart ? "hidden" : "block"
        }  p-6 fixed top-0 text-[#000] right-0  w-full lg:w-[500px] h-screen bg-[#fff] z-10  opacity-1`}
      >
        {/* inside mobile nav bar */}
        <div className="flex absolute top-5 right-0 px-5 text-[#000] justify-between w-full border-b-2 pb-4 ">
          <p className="text-[#111] font-poppins font-medium cursor-pointer text-[20px]">
            Shopping Cart
          </p>
          <img
            src={toggleCart ? "close.svg" : "menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggleCart(!toggleCart)}
          />
        </div>
        <div className="mt-10 flex flex-col gap-y-2 h-[420px] lg:h-[540px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => (
            <CartProducts item={item} key={item.id} />
          ))}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4 ">
          <div className="flex w-full justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span>$ {total}
            </div>
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 text-black w-12 h-12 flex justify-center items-center text-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>
          </div>
          <button className="w-full h-auto px-10 py-5 blue rounded-2xl font-medium">
            CHECKOUT
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
