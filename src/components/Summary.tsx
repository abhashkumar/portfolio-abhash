// SummarySection.tsx
import React from 'react';
import { FaChevronDown, FaLinkedin, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import HiIcon from  '../assets/pikachu-dhoom-dhadaka-removebg-preview.png'; // Import the SVG for the Hi icon
import '../Styles/Summary.css';
import ParticleBackground from './helper/ParticleBackground';

const Summary: React.FC = () => {
  return (
    <section id="summary" className="summary">
      <ParticleBackground />
      <div className="left-div">
        <div className="summary-content">
          <h1>
            Hi <span className="orange">There,</span>
            <br />
            I'm Abhash <span className="orange">Kumar</span>
          </h1>
          <button className="about-me-button">
            About Me <FaChevronDown />
          </button>
          <div className="social-icons">
            <div className="icon-circle">
              <FaLinkedin className="social-icon" />
            </div>
            <div className="icon-circle">
              <FaGithub className="social-icon" />
            </div>
            <div className="icon-circle">
              <FaTwitter className="social-icon" />
            </div>
            <div className="icon-circle">
              <FaLinkedinIn className="social-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-div">
      <div className="circular-icon-container">
          <img src={HiIcon} alt="Hi Icon" className="hi-icon" />
        </div>
      </div>
    </section>
  );
};

export default Summary;
