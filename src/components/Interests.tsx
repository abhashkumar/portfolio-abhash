import React from 'react';
import '../Styles/Interests.css'; // Import CSS for interests animation

const Interests: React.FC = () => {
  return (
    <section id="interests" className="interests">
      <h2>Interests</h2>
      <ul>
        <li>Machine Learning/Natural Language Processing</li>
        <li>Event Management</li>
        <li>Badminton, Table Tennis, Chess</li>
      </ul>
    </section>
  );
};

export default Interests;
