/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Navbar from './components/Navbar';
import { LazyMotion, m } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

type SectionOffsets = {
  [key in string]: number;
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolledSections, setScrolledSections] = useState(['about']);

  useEffect(() => {
    const mainPage = document.getElementById('main');
    const handleScroll = () => {
      const scrollPosition = mainPage!.scrollTop;
      const sectionOffsets: SectionOffsets = {
        about: document.getElementById('about')!.offsetTop,
        skills: document.getElementById('skills')!.offsetTop,
        projects: document.getElementById('projects')!.offsetTop,
        contact: document.getElementById('contact')!.offsetTop,
      };

      let activeSection = 'about';
      let scrolledSections = ['about'];
      let minDistance = Math.abs(sectionOffsets.about - scrollPosition);
      for (const section in sectionOffsets) {
        const distance = Math.abs(sectionOffsets[section] - scrollPosition);
        if (distance < minDistance) {
          activeSection = section;
          scrolledSections.push(section);
          minDistance = distance;
        }
      }
      setActiveSection(activeSection);
      setScrolledSections(scrolledSections);
    };

    if (mainPage) {
      mainPage.addEventListener('scroll', handleScroll);
      return () => {
        mainPage.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <main
      id='main'
      className='w-full h-screen bg-bodyColor text-textLight  overflow-x-hidden'
    >
      <Navbar activeSection={activeSection} />
      <section
        id='about'
        className={`p-4 transform translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 ${
          scrolledSections.includes('about')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0'
        }`}
      >
        <About />
      </section>
      <section
        id='skills'
        className={`p-4 transform opacity-0 -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 ${
          scrolledSections.includes('skills')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0'
        }`}
      >
        <Skills />
      </section>
      <section
        id='projects'
        className={`p-4 transform opacity-0 -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 ${
          scrolledSections.includes('projects')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0'
        }`}
      >
        <Projects />
      </section>
      <section
        id='contact'
        className={`p-4 transform opacity-0 -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4  ${
          scrolledSections.includes('contact')
            ? 'opacity-100 translate-y-0'
            : 'opacity-0'
        }`}
      >
        <Contact />
      </section>
    </main>
  );
}
