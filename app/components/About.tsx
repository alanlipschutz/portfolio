/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function About() {
  return (
    <div
      className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
      id='#about'
    >
      <h3 className='text-lg font-mono tracking-wide text-textGreen'>
        Hello, my name is{' '}
        <p className='text-5xl text-slate-400'>Alan Lipschutz</p>
        <p className='text-4xl text-slate-400'>I'm a full stack developer</p>
      </h3>
    </div>
  );
}
