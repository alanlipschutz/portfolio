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

const loadFeatures = () =>
  import('./components/features').then((res) => res.default);

export default function Home() {
  // const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.8 });
  // const { ref: skillsRef, inView: skillsInView } = useInView({
  //   threshold: 0.2,
  // });
  // const { ref: projectsRef, inView: projectsInView } = useInView({
  //   threshold: 0.2,
  //   rootMargin:'-100px'
  // });
  // const { ref: contactRef, inView: contactInView } = useInView({
  //   threshold: [0.1, 0.3, 0.5],
  // });
  const [activeSection, setActiveSection] = useState('about');

  // useEffect(() => {
  //   if (aboutInView) {
  //     setActiveSection('about');
  //   } else if (skillsInView) {
  //     setActiveSection('skills');
  //   } else if (projectsInView) {
  //     setActiveSection('projects');
  //   } else if (contactInView) {
  //     setActiveSection('contact');
  //   }
  // }, [aboutInView, skillsInView, projectsInView, contactInView]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      console.log('hello');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop);

        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id') ?? '';
        }
      });
    };

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LazyMotion strict features={loadFeatures}>
      <main className='w-full h-screen bg-bodyColor text-textLight  overflow-x-hidden'>
        <Navbar activeSection={activeSection} />
        <m.section
          // ref={aboutRef}
          id='about'
          className={`mx-auto p-4 transition-opacity duration-500`}
        >
          <About />
        </m.section>

        <m.section
          // ref={skillsRef}
          id='skills'
          className={`p-4 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 ${
            activeSection === 'skills' ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <Skills />
        </m.section>

        <m.section
          // ref={projectsRef}
          id='projects'
          className={`p-4 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 ${
            activeSection === 'projects' ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <Projects />
        </m.section>

        <m.section
          // ref={contactRef}
          id='contact'
          className={`p-4 transform -translate-y-10  transition-transform duration-1000 max-w-containerSmall mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 ${
            activeSection === 'contact' ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <Contact />
        </m.section>

        {/* ... */}
      </main>
    </LazyMotion>
  );
}
