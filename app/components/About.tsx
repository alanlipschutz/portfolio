/* eslint-disable react/no-unescaped-entities */
import { LazyMotion, m } from 'framer-motion';
import React from 'react';

const timeline = [
  { year: '2015-2016', title: 'Analyst' },
  { year: '2016-2018', title: 'Market risk analyst' },
  { year: '2018-2022', title: 'EM sales trader' },
  { year: '2022-2022', title: 'ITC full stack developer bootcamp, Israel' },
  { year: '04/01/2023', title: 'Made Aliyah', alyah: 'text-textGreen' },
  { year: '2022-2023', title: 'Fullstack developer, Synamedia' },
];

export default function About() {
  const loadFeatures = () => import('./features').then((res) => res.default);

  return (
    <LazyMotion strict features={loadFeatures}>
      <m.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg font-mono tracking-wide text-textGreen'
      >
        Hello, my name is{' '}
        <p className='text-5xl text-slate-200	'>Alan Lipschutz</p>
        <p className='text-4xl text-slate-400'>I'm a full stack developer</p>
      </m.h3>
      <m.article
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mdl:max-w-[600px] text-xl font-mono tracking-wide text-slate-200 text-start sm:m-2 sml:m-2'
      >
        <p className='text-textGreen mb-2'>
          I'm on the lookout for my next challenge as a full stack developer.
        </p>
        As a former Economist with several years of experience in finance, I
        decided to change my career and pursue coding. Since then, I've been
        dedicated to coding, constantly learning, and striving for improvement.
        Coding is my true passion, and I'm excited to tackle new projects and
        push boundaries.
      </m.article>
      <m.ol
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='border-l border-neutral-300 dark:border-neutral-500 flex flex-col-reverse mdl:flex-row mdl:justify-start mdl:gap-6 mdl:border-l-0 mdl:border-t relative m-2'
      >
        {timeline.map((time) => (
          <li key={time.title}>
            <div className='flex items-center pt-2 mdl:block mdl:pt-0 min-w-[100px]'>
              <div className='-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 mdl:-mt-[5px] mdl:ml-0 mdl:mr-0'></div>
              <p className='mt-2 text-base text-slate-200	 dark:text-neutral-300'>
                {time.year}
              </p>
            </div>
            <div className='ml-4 mt-2 pb-5 mdl:ml-0'>
              <h4
                className={`mb-1.5 text-xl font-semibold font-mono ${
                  time.alyah && time.alyah
                }`}
              >
                {time.title}
              </h4>
            </div>
          </li>
        ))}
      </m.ol>
    </LazyMotion>
  );
}
