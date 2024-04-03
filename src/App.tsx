import React from 'react';
import './App.css'; // Import your custom styles
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Courses from './components/Courses';
import Interests from './components/Interests';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <Summary />
        <Education />
        <Skills />
        <Experience />
        <Courses />
        <Interests />
      </main>
    </div>
  );
};

export default App;