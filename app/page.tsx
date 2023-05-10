'use client';

import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import About from './components/About';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className='font-bodyFont w-full h-screen bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll'>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className='vh-[30vh] mx-auto p-4'
      >
        <About />
      </motion.section>
      <motion.section>
        <Skills />
      </motion.section>
    </main>
  );
}
