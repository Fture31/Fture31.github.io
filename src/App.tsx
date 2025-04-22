import React, { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Partners } from './components/sections/Partners';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "HydroBuild | Experts en Ouvrages Hydrauliques et Construction";
    
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section > div').forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Partners />
        <Testimonials />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;