// ProjectCard.tsx
import React, {useState} from 'react';
import './Styles/ProjectCard.css';

const ProjectCard: React.FC<{ company: string, position: string, duration: string, description: string[], logoSrc: string }> = ({ company, position, duration, description, logoSrc }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
      setShowAll(!showAll);
    };
  
    return (
      <div className="project-card">
        <div className="left">
        <div className="logo-container">
          <img src={logoSrc} alt="Company Logo" className="complogo" />
        </div>
        <div className="info">
          <h2>{company}</h2>
          <p className="designation">{position}</p>
          <p>{duration}</p> {/* Include duration here */}
        </div>
        </div>
        <div className="right">
          <ul>
            {showAll ? (
              description.map((point, index) => (
                <li key={index}>{point}</li>
              ))
            ) : (
              description.slice(0, 2).map((point, index) => (
                <li key={index}>{point}</li>
              ))
            )}
          </ul>
          {description.length > 2 && (
            <button onClick={toggleShowAll} className="show-more-button" key={`proj-${company}`}>
              {showAll ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    );
  };

export default ProjectCard;
