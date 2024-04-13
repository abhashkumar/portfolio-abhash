import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import '../Styles/Education.css'; // Import CSS for education animation
import EducationCard from './helper/EducationCard';

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-section">
            <EducationCard
              university="Jadavpur University, Kolkata"
              degree="Master in Computer Science and Engineering"
              session="Aug 2015 - March 2017"
              gpa="7.57"
            />
            <EducationCard
              university="Netaji Subhash Engineering College, Kolkata"
              degree="Bachelor of Technology, Computer Science and Engineering"
              session="Aug 2011 - March 2015"
              gpa="8.04"
            />
          </div>
    </section>
  );
};

export default Education;
