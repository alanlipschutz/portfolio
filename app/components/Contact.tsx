import React from 'react';
import { FaMobileAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <h3 className='text-textGreen text-3xl font-mono font-bold'>
        Contact Me!
      </h3>
      <div className='flex items-center justify-between flex-col mdl:flex-row gap-5'>
        <ul className='max-w-containerSmall flex flex-col justify-start gap-3  '>
          <a href='mailto:alanelipschutz@gmail.com'>
            <li className='flex items-center gap-4'>
              <FaTelegramPlane className='text-textGreen' />
              <span className='text-xl mdl:text-2xl font-mono'>
                alanelipschutz@gmail.com
              </span>
            </li>
          </a>
          <a href='https://wa.me/972584164863' target='_blank'>
            <li className='flex items-center gap-4'>
              <FaWhatsapp className='text-textGreen' />
              <span className='text-xl mdl:text-2xl font-mono'>
                058 416 4863
              </span>
            </li>
          </a>
          <a href='tel:+972584164863'>
            <li className='flex items-center gap-4'>
              <FaMobileAlt className='text-textGreen' />
              <span className='text-xl mdl:text-2xl font-mono'>
                058 416 4863
              </span>
            </li>
          </a>
        </ul>
        <a rel='preload' href='/assets/Alan_Lipschutz_CV.pdf' target='_blank'>
          <button className='rounded-md text-textGreen text-[2rem] border border-textGreen hover:bg-hoverColor duration-200 font-mono px-3 h-[150px]'>
            <p>Download my CV here!</p>
          </button>
        </a>
      </div>
    </>
  );
}
