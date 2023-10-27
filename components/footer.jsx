import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { visionlogo } from './images'

import { footerLinks } from './constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-white relative top-[60px] bg-black'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
            <img src={'logo3.png'} alt='logo' width={90} height={18} className='object-contain'/>
            <p className='text-base text-white'>2020 Vision<br/> ALL RIGHT RESERVED &copy;</p>
            <p>Phone Number: xx xxx xxx</p>
            <p>Address: xx xxx xxx</p>
            <p>Email: xx xxx xxx</p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div
            key={link.title}
            className="footer__link">
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                key={item.title}
                href={item.url}
                className='text-white'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
          </div>
        </div>
        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p>2020Vision 2023. All rights reserved &copy;</p>
                <div className='footer__copyrights-link'>
                  <Link href={'/'} className='text-gray-500'>
                    Privacy Policy
                  </Link>
                  <Link href={'/'} className='text-gray-500'>
                    Terms Of Service
                  </Link>
              </div>
        </div>
    </footer>
  )
}

export default Footer