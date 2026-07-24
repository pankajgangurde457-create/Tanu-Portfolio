import React from 'react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import About from './components/About';
import QuickStats from './components/QuickStats';
import Education from './components/Education';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CreativeGallery from './components/CreativeGallery';
import Certificates from './components/Certificates';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-white/20 selection:text-white font-sans relative">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <QuickStats />
        <Education />
        <Experience />
        <TechStack />
        <Projects />
        <CreativeGallery />
        <Certificates />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
