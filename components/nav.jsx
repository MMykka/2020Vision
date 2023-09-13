'use client'

import React, { useState } from 'react'
import Link from "next/link";
import { navLinks } from './constants';
import { visionlogo } from './images';
import Image from 'next/image';

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState(" ");


  return (
    <nav
     className="w-full flex items-center py-4 sm:px-16 px-6 "
    >
    <div
    className='w-full flex justify-between items-center  mx-auto  first-letter:duration-300'
    >
        <Link 
        href='/' 
        className="duration-300"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <Image src={visionlogo} alt='logo' width={50} height={15} className='object-contain'/>
        </Link>
        <ul className='list-none hidden lg:flex flex-row mr-[13rem] gap-8'>
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className={`${
              active === link.title
              ? " "
              :" "
            } `}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>

          ))}
        </ul>

        <div className='flex gap-4 lg:justify-start text-[#272727]'>
            <p>Login/register</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <div className='flex gap-2'>
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

export default Nav