/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

export default function Skills() {
  return (
    <div
      id='#skills'
      className='max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
    >
      <h3 className='text-textGreen text-3xl text-start font-mono font-bold'>
        Skills
      </h3>
      <p className='text-lg font-mono text-zinc-300 max-w-[300]'>
        In the last year, I've been working with the next techonologies
      </p>
      <section className='flex flex-col mdl:flex-row justify-between items-center gap-6'>
        <div className='border border-solid border-textGreen rounded-md p-4'>
          <h4 className='text-slate-300 text-xl text-start font-mono'>
            Client side
          </h4>
          <div className='flex flex-wrap gap-3'></div>
        </div>
        <div className='border border-solid border-textGreen rounded-md p-4'>
          <h4 className='text-slate-300 text-xl text-start font-mono'>
            Server side
          </h4>
        </div>
      </section>
    </div>
  );
}
