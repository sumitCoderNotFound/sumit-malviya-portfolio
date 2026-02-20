import React from 'react';
import Hero        from '../components/sections/Hero';
import About       from '../components/sections/About';
import Projects    from '../components/sections/Projects';
import Skills      from '../components/sections/Skills';
import SystemDesign from '../components/sections/SystemDesign';
import Hackathons  from '../components/sections/Hackathons';
import Experience  from '../components/sections/Experience';
import Contact     from '../components/sections/Contact';
import AIChat      from '../components/sections/AIChat';
import { Divider } from '../components/ui';

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <SystemDesign />
      <Divider />
      <Hackathons />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
      <AIChat />
    </>
  );
}
