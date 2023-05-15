/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function Skills() {
  const client_side_1 = [
    'Javascript (ES6+)',
    'HTML5',
    'CSS3',
    'Typescript',
    'React',
    'Next.js',
    'Storybook',
    'MUI, antD, Bootstrap',
  ];

  const server_side_1 = [
    'Node.js',
    'Express.js',
    'Mongo DB',
    'PostgreSQL',
    'Python',
    'Rest api',
    'Firebase',
    'Docker',
  ];
  return (
    <>
      <h3 className='text-textGreen text-3xl text-start font-mono font-bold'>
        Skills
      </h3>
      <p className='text-lg font-mono text-zinc-300 max-w-[300]'>
        I've been working with the next techonologies
      </p>
      <section className='flex flex-col mdl:flex-row justify-evenly items-center gap-6'>
        <div className='border border-solid border-textGreen rounded-md p-4'>
          <h4 className='text-slate-300 text-xl text-start font-mono'>
            Client side
          </h4>
          <ul className='w-[300px] text-lg font-mono grid grid-cols-2 gap-1 mt-6 h-[200px]'>
            {client_side_1.map((technology) => (
              <li className='flex items-center gap-2' key={technology}>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className='border border-solid border-textGreen rounded-md p-4'>
          <h4 className='text-slate-300 text-xl text-start font-mono mb-2'>
            Server side
          </h4>
          <ul className='w-[300px] text-lg font-mono grid grid-cols-2 gap-1 mt-6 h-[200px]'>
            {server_side_1.map((technology) => (
              <li
                className='flex items-center gap-2 break-all'
                key={technology}
              >
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
