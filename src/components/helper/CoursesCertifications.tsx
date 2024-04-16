// CoursesCertifications.tsx
import React from 'react';
import { FaAward } from 'react-icons/fa';

const CoursesCertifications: React.FC = () => {
  return (
    <div className="courses-certifications">
      <h3>Certifications</h3>
      <div className="items">
        <div className="item">
          <FaAward className="icon" />
          <span>Git, Javascript, Jquery, Knockout: Pluralsight</span>
        </div>
        <div className="item">
          <FaAward className="icon" />
          <span>Machine Learning, Andrew Ng: Coursera</span>
        </div>
        <div className="item">
          <FaAward className="icon" />
          <span>Deep Learning, Andrew Ng: Coursera</span>
        </div>
        <div className="item">
          <FaAward className="icon" />
          <span>Docker and Kubernetes: Pluralsight</span>
        </div>
        <div className="item">
          <FaAward className="icon" />
          <span>Data Science Specialization: Learnbay</span>
        </div>
      </div>
    </div>
  );
};

export default CoursesCertifications;
