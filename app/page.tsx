/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Navbar from './components/Navbar';
import { LazyMotion, m } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.8 });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.2,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0,
  });
  const [activeSection, setActiveSection] = useState('about');
  const loadFeatures = () =>
    import('./components/features').then((res) => res.default);

  useEffect(() => {
    if (aboutInView) {
      setActiveSection('about');
    } else if (skillsInView) {
      setActiveSection('skills');
    } else if (projectsInView) {
      setActiveSection('projects');
    } else if (contactInView) {
      setActiveSection('contact');
    }
    console.log(`about ${aboutInView}`);
    console.log(`skills ${skillsInView}`);
    console.log(`projects ${projectsInView}`);
    console.log(`contact ${contactInView}`);
  }, [aboutInView, skillsInView, projectsInView, contactInView]);

  return (
    <LazyMotion strict features={loadFeatures}>
      <main className='w-full h-screen bg-bodyColor text-textLight  overflow-x-hidden'>
        <Navbar activeSection={activeSection} />
        <m.section
          ref={aboutRef}
          id='about'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className=' mx-auto p-4'
        >
          <About />
        </m.section>
        <m.section
          ref={skillsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          id='skills'
          className=' p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
        >
          <Skills />
        </m.section>
        <m.section
          ref={projectsRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          id='projects'
          className=' p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
        >
          <Projects />
        </m.section>
        <m.section
          ref={contactRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          id='contact'
          className=' p-4 opacity-0 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 '
        >
          <Contact />
        </m.section>
      </main>
    </LazyMotion>
  );
}
