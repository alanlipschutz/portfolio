import { pet_adoption } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  return (
    <>
      <h3 className='text-textGreen text-3xl text-end font-mono font-bold'>
        Projects
      </h3>
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
          <Link
            href={'https://github.com/alanlipschutz/petAdoptionITC'}
            target='_blank'
            className='w-full xl:w-1/2 h-auto relative group'
          >
            <Image
              className='w-full h-full object-contain'
              src={pet_adoption}
              alt='pet adoption'
            />
          </Link>
          <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
            <p className='font-mono text-textGreen text-lg tracking-wide'>
              Featured project
            </p>
            <h3 className='font-mono text-3xl font-bold'>Pet adoption app</h3>
            <p className='bg-[#112240] text-xl md:text-base p-2 md:p-6 rounded-md'>
              Final full stack project did in ITC. View pets to adopt, save and
              return (hopefully not). Used{' '}
              <span className='text-textGreen'>React</span> for front end and{' '}
              <span className='text-textGreen'>Node.js</span> and
              <span className='text-textGreen'>mongoose</span> for backend
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
