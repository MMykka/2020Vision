'use client'

import React, { useContext, useState } from 'react'
import Link from "next/link";
import { navLinks } from './constants';
import { visionlogo } from './images';
import Image from 'next/image';
import { motion } from "framer-motion";

import { fadeIn, navVariants, slideIn, staggerContainer } from "./utils/motion";
import { CardContext } from '@/context/CardContext';
import CartProducts from './CartProducts';

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);
    const {cart} = useContext(CardContext);
    


  return (
    <nav
     className="w-full flex items-center py-4 sm:px-16 px-6 "
    >
    <div
    className='overflow-hidden w-full flex justify-between items-center  mx-auto  duration-300'
    >
        <Link 
        href='/' 
        className="duration-300 hidden lg:block"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
            <Image alt='logo' src={visionlogo} width={70} height={20}/> 
        </Link>
        <ul className='list-none hidden lg:flex flex-row mr-[13rem] gap-8'>
          {navLinks.map((link) => (
            <li 
            key={link.id}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>

          ))}
        </ul>

        
            {/* mobile nav */}
        <div
        className='relative lg:hidden flex flex-1 justify-start items-center pr-2  sm:mr-[4rem] mr-0 text-[#111]'>
          <div 
          className={`w-[28px] h-[28px]  object-contain cursor-pointer duration-300 text-[#000]`}
           onClick={() => setToggle(!toggle)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
        

          </div>
          
        </div>

        <Link 
        href='/' 
        className="duration-300 lg:hidden block"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
            <Image alt='logo' src={visionlogo} width={50} height={20}/> 
        </Link>

          {/* cart */}

        <div className='flex gap-4 lg:justify-start text-[#272727]'>
            <p>LOGIN/REGISTER</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <div className='flex gap-2' onClick={() => setToggleCart(!toggleCart)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p>0.00</p>
        </div>
        </div>
    </div>
    </nav>
  )
}

//                <div className='mt-10'>
//                   {cart.map((item) => (
//                    <CartProducts item={item} key={item.id}/>
//                   ))}
//                 </div>

export default Nav