import { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import About from './sections/About';
import Contact from './sections/Contact';
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'experience', 'education', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Uniform powdered gradient backdrop */}
      <div className="fixed inset-0 bg-gradient-powder-uniform opacity-40" />
      
      <Header activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;