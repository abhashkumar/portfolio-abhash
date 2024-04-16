import React, {useEffect, useState} from 'react';
import './App.css'; // Import your custom styles
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('summary');

  useEffect(() => {
   
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.classList.remove('active');
    });

    const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${activeSection}"]`);
    navLink?.classList.add('active');

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 60;
        const sectionHeight = sectionElement.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Detach scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <Summary />
        <Experience />
        <Skills />
        <Education />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;