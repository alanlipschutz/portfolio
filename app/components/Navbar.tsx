import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import {
  AiOutlineUser,
  AiOutlineOrderedList,
  AiFillFolderOpen,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

export default function Navbar() {
  return (
    <>
      <div className='w-full shadow-navBarShadow h-20 lg:h-[7vh]  sticky top-0 z-50 bg-bodyColor px-4 flex justify-between items-center '>
        <div className='flex items-center text-lg cursor-pointer'>
          <Link href='#home'>
            <h1 className='overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing'>
              Alan Lipschutz
            </h1>
            <h2 className='font-mono'>Fullstack developer</h2>
          </Link>
        </div>
        <nav className='lg:block'>
          <motion.ul
            className='hidden lg:inline-flex items-center gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.01, delay: 0.01 }}
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
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <Link
                href='https://www.linkedin.com/in/alanlipschutz/'
                target='_blank'
                className='bg-hoverColor hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'
              >
                <AiFillLinkedin className='text-3xl hover:-translate-y-2 transition-all duration-100' />
              </Link>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.6 }}
            >
              <Link
                href='https://github.com/alanlipschutz/'
                target='_blank2'
                className='bg-hoverColor hover:text-textGreen cursor-pointer '
              >
                <AiOutlineGithub className='text-3xl hover:-translate-y-2 transition-all duration-100' />
              </Link>
            </motion.li>
            <a
              rel='preload'
              href='/assets/Alan_Lipschutz_CV.pdf'
              target='_blank'
            >
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
      <div className='lg:hidden bg-gray-700 p-4 rounded-xl absolute bottom-[0px] min-w-[325px] left-[50%] transform -translate-x-1/2 right-0 flex justify-between gap-5 items-center'>
        <Link href={'#home'}>
          <FaHome className='text-lg ' />
        </Link>
        <Link href={'#about'}>
          <AiOutlineUser className='text-lg ' />
        </Link>
        <Link href={'#skills'}>
          <AiOutlineOrderedList className='text-lg  ' />
        </Link>

        <Link href={'#portfolio'}>
          <AiFillFolderOpen className='text-lg ' />
        </Link>
        <Link href={'#Contact'}>
          <AiOutlineMail className='text-lg ' />
        </Link>
        <Link href='https://www.linkedin.com/in/alanlipschutz/' target='_blank'>
          <AiFillLinkedin className='text-lg' />
        </Link>
        <Link href='https://github.com/alanlipschutz/' target='_blank2'>
          <AiOutlineGithub className='text-lg' />
        </Link>
      </div>
    </>
  );
}
