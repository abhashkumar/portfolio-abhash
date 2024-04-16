import React from 'react';
import '../Styles/Education.css'; // Import CSS for education animation
import EducationCard from './helper/EducationCard';
import collegeJU from '../assets/Jadavpur-removebg-preview.png';
import nsec from '../assets/NSEC-removebg-preview.png';
import { FaGraduationCap } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <h2><FaGraduationCap />Education</h2>
      <div className="education-section">
            <EducationCard
              university="Jadavpur University, Kolkata"
              degree="Master in Computer Science and Engineering"
              session="Aug 2015 - March 2017"
              gpa="7.57"
              college={collegeJU}

            />
            <EducationCard
              university="Netaji Subhash Engineering College, Kolkata"
              degree="Bachelor of Technology, Computer Science and Engineering"
              session="Aug 2011 - March 2015"
              gpa="8.04"
              college={nsec}
              className='nsec-logo'
            />
          </div>
    </section>
  );
};

export default Education;
