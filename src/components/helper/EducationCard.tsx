// EducationCard.tsx
import React from 'react';
import './Styles/EducationCard.css';

const EducationCard: React.FC<{ university: string, degree: string, session: string, gpa: string, college:string, className?:string }> = ({ university, degree, session, gpa, college, className }) => {
  return (
    <div className="education-card">
      <div className="education-top">
        <div className="circular-area">
        <img src={college} alt="Logo" className={className}/>
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
