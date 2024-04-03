import React from 'react';
import '../Styles/Skills.css'; // Import CSS for skills animation

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Software Engineering Principles & Practices</li>
        <li>Programming Languages & Frameworks</li>
        <li>Testing</li>
        <li>Tools & Technologies</li>
        <li>AWS Cloud Services</li>
        <li>Monitoring & Analytics</li>
        <li>Data Science & Visualization</li>
      </ul>
    </section>
  );
};

export default Skills;
