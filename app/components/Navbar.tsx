'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
      <div className='w-full shadow-navBarShadow h-20 lg:h-[7vh]  sticky top-0 z-50 bg-bodyColor px-4 flex justify-between items-center '>
        <div className='flex items-center text-lg cursor-pointer'>
          <Link href='/'>
            <h1 className='overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing'>
              Alan Lipschutz
            </h1>
            {/* <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">Hello World</h1> */}
            <h2 className='font-mono'>Fullstack developer</h2>
          </Link>
        </div>
        <nav className='lg:block'>
          <motion.ul
            className='hidden lg:inline-flex items-center gap-7'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.1 }}
            >
              <Link
                href='#about'
                className='mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200'
              >
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <Link
                href='#skills'
                className='mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200'
              >
                Skills
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <Link
                href='#portfolio'
                className='mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200'
              >
                Portfolio
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <Link
                href='#contact'
                className='mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200'
              >
                Contact
              </Link>
            </motion.li>
            <a href='/assets/Alan_Lipschutz_CV.pdf' target='_blank'>
              <motion.button
                className='rounded-md text-textGreen text-[1rem] border border-textGreen hover:bg-hoverColor duration-200 font-mono px-3'
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Resume
              </motion.button>
            </a>
          </motion.ul>
        </nav>
      </div>
      <div
        style={{
          backgroundColor: 'red',
          padding: '1rem',
          width: '40%',
          borderRadius: '16px',
          position: 'absolute',
          bottom: '50px',
          left: '25%',
          right: 0,
        }}
      >
        <FaHome />
      </div>
    </>
  );
}
