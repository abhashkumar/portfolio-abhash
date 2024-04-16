// Interests.tsx
import React from 'react';
import { FaTag, FaTableTennis, FaChess, FaCalendar } from 'react-icons/fa';

const Interests: React.FC = () => {
  return (
    <div className="interests">
      <h3>Interests</h3>
      <div className="items">
        <div className="item">
          <FaTag className="icon" />
          <span>Machine Learning/Natural Language Processing</span>
        </div>
        <div className="item">
          <FaCalendar className="icon" />
          <span>Event Management</span>
        </div>
        <div className="item">
          <FaTableTennis className="icon" />
          <span>Badminton</span>
        </div>
        <div className="item">
          <FaTableTennis className="icon" />
          <span>Table Tennis</span>
        </div>
        <div className="item">
          <FaChess className="icon" />
          <span>Chess</span>
        </div>
      </div>
    </div>
  );
};

export default Interests;
