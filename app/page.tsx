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
  const loadFeatures = () =>
    import('./components/features').then((res) => res.default);

  return (
    <LazyMotion strict features={loadFeatures}>
      <main
        id='main'
        className='w-full h-screen bg-bodyColor text-textLight  overflow-x-hidden'
      >
        <Navbar activeSection={activeSection} />
        <m.section
          id='about'
          initial={{ opacity: 0, translateY: 20 }}
          animate={{
            opacity: scrolledSections.includes('about') ? 1 : 0,
            translateY: scrolledSections.includes('about') ? -20 : -10,
          }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className={`p-4 transform  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 `}
        >
          <About />
        </m.section>
        <m.section
          id='skills'
          className={`p-4 transform opacity-0 transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 `}
          initial={{ opacity: 0, translateY: 30 }}
          animate={{
            opacity: scrolledSections.includes('skills') ? 1 : 0,
            translateY: scrolledSections.includes('skills') ? -20 : -10,
          }}
          transition={{ duration: 0.2 }}
        >
          <Skills />
        </m.section>
        <m.section
          id='projects'
          className={`p-4 transform opacity-0 transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 `}
          initial={{ opacity: 0, translateY: 30 }}
          animate={{
            opacity: scrolledSections.includes('projects') ? 1 : 0,
            translateY: scrolledSections.includes('projects') ? -20 : -10,
          }}
          transition={{ duration: 0.2 }}
        >
          <Projects />
        </m.section>
        <m.section
          id='contact'
          className={`p-4 transform opacity-0 transition-transform duration-1000 max-w-containerSmall mx-auto sm:mb-4 py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 `}
          initial={{ opacity: 0, translateY: 30 }}
          animate={{
            opacity: scrolledSections.includes('projects') ? 1 : 0,
            translateY: scrolledSections.includes('projects') ? -20 : -10,
          }}
          transition={{ duration: 0.2 }}
        >
          <Contact />
        </m.section>
      </main>
    </LazyMotion>
  );
}
