'use client';

import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const hrefPath = window.location.href.split('#')[1];
  const [activeSection, setActiveSection] = useState(hrefPath || '');

  useEffect(() => {
    handleNavClick(hrefPath);
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
        break;
    }
  };
  return (
    <main className='font-bodyFont w-full h-screen bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll'>
      <Navbar moveToSection={handleNavClick} activeSection={activeSection} />
      <motion.section
        ref={aboutRef}
        id='#about'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className='vh-[30vh] mx-auto p-4'
      >
        <About />
      </motion.section>
      <motion.section
        ref={skillsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        id='#skills'
        className='vh-[30vh] p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
      >
        <Skills />
      </motion.section>
      <motion.section
        ref={projectsRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        id='#projects'
        className='vh-[30vh] p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
      >
        <Projects />
      </motion.section>
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        id='#contact'
        className='vh-[30vh] p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
      >
        <Contact />
      </motion.section>
    </main>
  );
}
