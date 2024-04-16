import React from 'react';
import CoursesCertifications from './helper/CoursesCertifications';
import Interests from './helper/Interests';
import '../Styles/Courses.css';
import { FaBook } from 'react-icons/fa';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="courses">
      <h2><FaBook />Coursework & Interests</h2>
        <div className="education-interests-container">
        <div className="div-card">
          <CoursesCertifications />
        </div>
        <div className="div-card">
          <Interests />
        </div>
      </div>
    </section>
  );
};

export default Courses;
