import React from 'react';
import '../Styles/Courses.css'; // Import CSS for courses animation

const Courses: React.FC = () => {
  return (
    <section id="courses" className="courses">
      <h2>Coursework & Certification</h2>
      <ul>
        <li>Git, Javascript, Jquery, Knockout: Pluralsight</li>
        <li>Machine Learning and Deep Learning Specialization, Andrew Ng: Coursera</li>
        <li>Docker and Kubernetes: Pluralsight</li>
        <li>Data Science Specialization: Learnbay</li>
      </ul>
    </section>
  );
};

export default Courses;
