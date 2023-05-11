/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import React from 'react';

const timeline = [
  { year: '2015-2016', title: 'Analyst - BH' },
  { year: '2016-2018', title: 'Market risk analyst - BH' },
  { year: '2018-2022', title: 'EM sales trader - BH' },
  { year: '2022-2022', title: 'ITC full stack developer bootcamp, Israel' },
  { year: '04/01/2023', title: 'Made Aliyah' },
  { year: '2022-2023', title: 'Fullstack developer, Synamedia' },
];

export default function About() {
  return (
    <div className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg font-mono tracking-wide text-textGreen'
      >
        Hello, my name is{' '}
        <p className='text-5xl text-slate-200	'>Alan Lipschutz</p>
        <p className='text-4xl text-slate-400'>I'm a full stack developer</p>
      </motion.h3>
      <motion.article
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mdl:max-w-[600px] text-xl font-mono tracking-wide text-slate-200	'
      >
        I'm an oleh chadash from Argentina who decided to come to Israel to
        change his career and his life.
        <p className='text-textGreen'>
          I'm looking my next challenge as a full stack developer
        </p>
      </motion.article>
      <motion.ol
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-start md:gap-6 md:border-l-0 md:border-t relative'
      >
        {timeline.map((time) => (
          <li key={time.title}>
            <div className='flex-start flex items-center pt-2 md:block md:pt-0'>
              <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0'></div>
              <p className='mt-2 text-base text-slate-200	 dark:text-neutral-300'>
                {time.year}
              </p>
            </div>
            <div className='ml-4 mt-2 pb-5 md:ml-0'>
              <h4 className='mb-1.5 text-xl font-semibold'>{time.title}</h4>
            </div>
          </li>
        ))}
      </motion.ol>
    </div>
  );
}
