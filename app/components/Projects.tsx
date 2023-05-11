import {
  budget_trucker,
  ecommerce,
  pet_adoption,
  weatherApp,
} from '@/public/assets';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  interface ITProjects {
    title: string;
    description: string;
    technologies: string[];
    src: StaticImageData;
  }
  const projects: ITProjects[] = [
    {
      title: 'Pet Adoption App',
      description:
        'Final full stack project did in ITC. View pets to adopt, save and return (hopefully not)',
      technologies: ['React', 'Boostrap', 'Nodejs', 'Mongo DB'],
      src: pet_adoption,
    },
    {
      title: 'Madshop',
      description:
        'full stack project to buy technologic products in a crazy shop.',
      technologies: ['React', 'Redux', 'Nodejs', 'Mongo DB'],
      src: ecommerce,
    },
    {
      title: 'Budget Tracker',
      description:
        'An app to add your budget and expenses. It was my first project using Next.js with Typescript.',
      technologies: ['Nextjs', 'Typescript', 'Nodejs', 'Mongo DB'],
      src: budget_trucker,
    },
    {
      title: 'Weather app',
      description:
        "A weather application that involves only front end. I've used weather api and geolocation of the user.",
      technologies: ['React', 'Typescript', 'MUI', 'useContext api'],
      src: weatherApp,
    },
  ];
  return (
    <>
      <h3 className='text-textGreen text-3xl text-end font-mono font-bold'>
        Projects
      </h3>
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'
            } gap-6`}
          >
            <Link
              href={'https://github.com/alanlipschutz/petAdoptionITC'}
              target='_blank'
              className='w-full xl:w-1/2 h-auto relative group cursor-pointer'
            >
              <Image
                className='w-full h-full object-contain'
                src={project.src}
                alt={project.title}
              />
            </Link>
            <div
              className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right ${
                index % 2 === 0 ? 'xl:-ml-16' : 'xl:-mr-16'
              } z-10`}
            >
              <h3
                className={`font-mono text-3xl font-bold ${
                  index % 2 === 1 ? 'self-start' : ''
                }`}
              >
                {project.title}
              </h3>
              <p className='bg-[#112240] font-mono text-start text-xl md:text-base p-2 md:p-6 rounded-md'>
                {project.description}
              </p>
              <ul
                className={`flex justify-between text-lg font-mono tracking-wide gap-2 md:gap-5 text-textLight ${
                  index % 2 === 1 ? 'self-start' : ''
                }`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
