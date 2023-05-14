import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import {
  AiOutlineOrderedList,
  AiFillFolderOpen,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

interface Props {
  moveToSection: (section: string) => void;
  activeSection: string;
}

export default function Navbar({ moveToSection, activeSection }: Props) {
  return (
    <>
      <div className='w-full shadow-navBarShadow h-20 lg:h-[7vh]  sticky top-0 z-50 bg-bodyColor px-4 flex justify-between items-center '>
        <div className='flex items-center text-lg cursor-pointer'>
          <a href='#home' onClick={() => moveToSection('about')}>
            <h1 className='overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing'>
              Alan Lipschutz
            </h1>
            <h2 className='font-mono'>Fullstack developer</h2>
          </a>
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
              <a
                href='#about'
                className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                  activeSection === 'about' || '' ? 'text-blue-500' : ''
                } `}
                onClick={() => moveToSection('about')}
              >
                About
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              <a
                href='#skills'
                className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                  activeSection === 'skills' ? 'text-blue-500' : ''
                } `}
                onClick={() => moveToSection('skills')}
              >
                Skills
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.3 }}
            >
              <a
                href='#projects'
                className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                  activeSection === 'projects' ? 'text-blue-500' : ''
                } `}
                onClick={() => moveToSection('projects')}
              >
                Projects
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.4 }}
            >
              <a
                href='#contact'
                className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                  activeSection === 'contact' ? 'text-blue-500' : ''
                } `}
                onClick={() => moveToSection('contact')}
              >
                Contact
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.5 }}
            >
              <a
                href='https://www.linkedin.com/in/alanlipschutz/'
                target='_blank'
                className='bg-hoverColor hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'
              >
                <AiFillLinkedin className='text-3xl hover:-translate-y-2 transition-all duration-100' />
              </a>
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.6 }}
            >
              <a
                href='https://github.com/alanlipschutz/'
                target='_blank2'
                className='bg-hoverColor hover:text-textGreen cursor-pointer '
              >
                <AiOutlineGithub className='text-3xl hover:-translate-y-2 transition-all duration-100' />
              </a>
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
      <div className='lg:hidden bg-gray-700 p-4 rounded-xl absolute z-10 bottom-[0px] min-w-[325px] left-[50%] transform -translate-x-1/2 right-0 flex justify-between gap-5 items-center'>
        <a
          href={'#about'}
          onClick={() => moveToSection('about')}
          className='hover:bg-gray-500 p-2 rounded-full duration-200'
        >
          <FaHome className='text-lg ' />
        </a>
        <a href={'#skills'} onClick={() => moveToSection('skills')}>
          <AiOutlineOrderedList className='text-lg  ' />
        </a>

        <a href={'#projects'} onClick={() => moveToSection('projects')}>
          <AiFillFolderOpen className='text-lg ' />
        </a>
        <a href={'#Contact'} onClick={() => moveToSection('contact')}>
          <AiOutlineMail className='text-lg ' />
        </a>
        <a href='https://www.linkedin.com/in/alanlipschutz/' target='_blank'>
          <AiFillLinkedin className='text-lg' />
        </a>
        <a href='https://github.com/alanlipschutz/' target='_blank2'>
          <AiOutlineGithub className='text-lg' />
        </a>
      </div>
    </>
  );
}
