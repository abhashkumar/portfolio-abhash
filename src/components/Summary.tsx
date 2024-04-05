import React from 'react';
import '../Styles/Summary.css'; // Import CSS for summary animation
import ParticleBackground from './helper/ParticleBackground';

const Summary: React.FC = () => {
  return (
    <section id="summary" className="summary">
      <ParticleBackground />
      <h2>Summary</h2>
      <p>
        Accomplished Senior Software Engineer with over 6 years of experience in full-stack development, specializing in .NET technologies, React JS, TypeScript, and AWS cloud solutions. Proven track record in system design, microservices architecture, and team leadership. Adept at migrating legacy applications to modern frameworks and driving collaborative efforts to deliver high-quality solutions.
      </p>
    </section>
  );
};

export default Summary;
