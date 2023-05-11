import { pet_adoption } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  interface ITProjects {
    title: string;
    description: string;
    technologies: string[];
  }
  const projects: ITProjects[] = [
    {
      title: 'Pet Adoption App',
      description:
        'Final full stack project did in ITC. View pets to adopt, save and return (hopefully not)',
      technologies: ['React', 'Boostrap', 'Nodejs', 'Express', 'Mongo DB'],
    },
    {
      title: 'Madshop',
      description:
        'full stack project to buy technologic products in a crazy shop.',
      technologies: [
        'React',
        'Redux',
        'Boostrap',
        'Nodejs',
        'Express',
        'Mongo DB',
      ],
    },
    {
      title: 'Budget Tracker',
      description:
        'An app to add your budget and expenses. It was my first project using Next.js with Typescript.',
      technologies: [
        'Nextjs',
        'Typescript',
        'useContext api',
        'MUI',
        'Nodejs',
        'Express',
        'Mongo DB',
      ],
    },
    {
      title: 'Weather app',
      description:
        "A weather application that involves only front end. I've used weather api and geolocation of the user.",
      technologies: ['React', 'Typescript', 'MUI', 'useContext api'],
    },
  ];
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
            <h3 className='font-mono text-3xl font-bold'>Pet adoption app</h3>
            <p className='bg-[#112240] font-mono text-start text-xl md:text-base p-2 md:p-6 rounded-md'>
              Final full stack project did in ITC. View pets to adopt, save and
              return (hopefully not)
            </p>
            <ul className='flex justify-between text-lg font-mono tracking-wide gap-2 md:gap-5 text-textLight'>
              <li>Next js</li>
              <li>React</li>
              <li>mongo</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
