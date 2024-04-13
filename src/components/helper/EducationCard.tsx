// EducationCard.tsx
import React from 'react';
import './Styles/EducationCard.css';
import college from '../../assets/Jadavpur-removebg-preview.png';

const EducationCard: React.FC<{ university: string, degree: string, session: string, gpa: string }> = ({ university, degree, session, gpa }) => {
  return (
    <div className="education-card">
      <div className="education-top">
        <div className="circular-area">
        <img src={college} alt="Logo" />
        </div>
      </div>
      <div className="education-bottom">
        <h3>{university}</h3>
        <p>{degree}</p>
        <p>{session}</p>
        <p>GPA: {gpa}</p>
      </div>
    </div>
  );
};

export default EducationCard;
