/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Navbar from './components/Navbar';
import { LazyMotion, m } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const loadFeatures = () =>
    import('./components/features').then((res) => res.default);

  useEffect(() => {
    const hrefPath = window.location.href.split('#')[1];
    setActiveSection(hrefPath);
    handleNavClick(hrefPath ? hrefPath : 'about');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    switch (sectionId) {
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  return (
    <LazyMotion strict features={loadFeatures}>
      <main className='w-full h-screen bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll'>
        <Navbar moveToSection={handleNavClick} activeSection={activeSection} />
        <m.section
          ref={aboutRef}
          id='#about'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className='vh-[30vh] mx-auto p-4'
        >
          <About />
        </m.section>
        <m.section
          ref={skillsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          id='#skills'
          className='vh-[30vh] p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
        >
          <Skills />
        </m.section>
        <m.section
          ref={projectsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          id='#projects'
          className='vh-[30vh] p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
        >
          <Projects />
        </m.section>
        <m.section
          ref={contactRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          id='#contact'
          className='vh-[30vh] p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
        >
          <Contact />
        </m.section>
      </main>
    </LazyMotion>
  );
}
