import React from 'react';
import { LazyMotion, m } from 'framer-motion';
import { FaHome } from 'react-icons/fa';
import {
  AiOutlineOrderedList,
  AiFillFolderOpen,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import Link from 'next/link';

interface Props {
  activeSection: string;
}

export default function Navbar({ activeSection }: Props) {
  const loadFeatures = () => import('./features').then((res) => res.default);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <LazyMotion strict features={loadFeatures}>
        <div className='w-full shadow-navBarShadow h-20 lg:h-[7vh]  sticky top-0 z-50 bg-bodyColor px-4 flex justify-between items-center '>
          <div className='flex items-center text-lg cursor-pointer'>
            <Link href='#about' onClick={handleScroll}>
              <h1 className='overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing'>
                Alan Lipschutz
              </h1>
              <h2 className='font-mono'>Fullstack developer</h2>
            </Link>
          </div>
          <nav className='lg:block'>
            <m.ul
              className='hidden lg:inline-flex items-center gap-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <m.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.02, delay: 0.01 }}
              >
                <Link
                  href={'#about'}
                  onClick={handleScroll}
                  className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                    activeSection === 'about' || '' ? 'text-blue-500' : ''
                  } `}
                >
                  About
                </Link>
              </m.li>
              <m.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.02, delay: 0.02 }}
              >
                <Link
                  href={'#skills'}
                  onClick={handleScroll}
                  className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                    activeSection === 'skills' ? 'text-blue-500' : ''
                  } `}
                >
                  Skills
                </Link>
              </m.li>
              <m.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.02, delay: 0.03 }}
              >
                <Link
                  href={'#projects'}
                  onClick={handleScroll}
                  className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                    activeSection === 'projects' ? 'text-blue-500' : ''
                  } `}
                >
                  Projects
                </Link>
              </m.li>
              <m.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.02, delay: 0.04 }}
              >
                <Link
                  onClick={handleScroll}
                  href={'#contact'}
                  className={`mx-4 font-mono font-bold text-lg hover:text-blue-500 duration-200 ${
                    activeSection === 'contact' ? 'text-blue-500' : ''
                  } `}
                >
                  Contact
                </Link>
              </m.li>
              <m.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.02, delay: 0.05 }}
              >
                <a
                  href='https://www.linkedin.com/in/alanlipschutz/'
                  target='_blank'
                  className='bg-hoverColor hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'
                >
                  <AiFillLinkedin className='text-3xl hover:-translate-y-2 transition-all duration-100' />
                </a>
              </m.li>
              <m.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.02, delay: 0.06 }}
              >
                <a
                  href='https://github.com/alanlipschutz/'
                  target='_blank2'
                  className='bg-hoverColor hover:text-textGreen cursor-pointer '
                >
                  <AiOutlineGithub className='text-3xl hover:-translate-y-2 transition-all duration-100' />
                </a>
              </m.li>
              <a
                rel='preload'
                href='/assets/Alan_Lipschutz_CV.pdf'
                target='_blank'
              >
                <m.button
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.05, delay: 0.07 }}
                  className='rounded-md text-textGreen text-[1rem] border border-textGreen hover:bg-hoverColor duration-200 font-mono px-3'
                >
                  Resume
                </m.button>
              </a>
            </m.ul>
          </nav>
        </div>
      </LazyMotion>
      <div className='lg:hidden bg-gray-700 p-4 rounded-xl absolute z-10 bottom-[0px] min-w-[325px] left-[50%] transform -translate-x-1/2 right-0 flex justify-between gap-5 items-center'>
        <a
          href={'#about'}
          className={`hover:bg-gray-500 p-2 rounded-full duration-200 ${
            activeSection === 'about' || '' ? 'bg-gray-500' : ''
          }`}
          onClick={handleScroll}
        >
          <FaHome className='text-lg ' />
        </a>
        <a
          href={'#skills'}
          className={`hover:bg-gray-500 p-2 rounded-full duration-200 ${
            activeSection === 'skills' ? 'bg-gray-500' : ''
          }`}
          onClick={handleScroll}
        >
          <AiOutlineOrderedList className='text-lg  ' />
        </a>

        <a
          href={'#projects'}
          className={`hover:bg-gray-500 p-2 rounded-full duration-200 ${
            activeSection === 'projects' ? 'bg-gray-500' : ''
          }`}
          onClick={handleScroll}
        >
          <AiFillFolderOpen className='text-lg ' />
        </a>
        <a
          href={'#contact'}
          className={`hover:bg-gray-500 p-2 rounded-full duration-200 ${
            activeSection === 'contact' ? 'bg-gray-500' : ''
          }`}
          onClick={handleScroll}
        >
          <AiOutlineMail className='text-lg ' />
        </a>
        <a
          href='https://www.linkedin.com/in/alanlipschutz/'
          target='_blank'
          className='hover:bg-gray-500 p-2 rounded-full duration-200'
        >
          <AiFillLinkedin className='text-lg' />
        </a>
        <a
          href='https://github.com/alanlipschutz/'
          target='_blank'
          className='hover:bg-gray-500 p-2 rounded-full duration-200'
        >
          <AiOutlineGithub className='text-lg' />
        </a>
      </div>
    </>
  );
}
