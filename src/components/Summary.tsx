// SummarySection.tsx
import React from 'react';
import { FaChevronDown, FaLinkedin, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import HiIcon from  '../assets/pikachu-dhoom-dhadaka-removebg-preview.png'; // Import the SVG for the Hi icon
import '../Styles/Summary.css';
import ParticleBackground from './helper/ParticleBackground';
import { Button } from 'reactstrap';
import resume from '../assets/Abhash_SSE.pdf';

const Summary: React.FC = () => {
  return (
    <section id="summary" className="summary">
      <ParticleBackground />
      <div className='summary-div-content'>
        <div className="left-div">
          <div className="summary-content">
            <h1>
              Hi <span className="orange">There,</span>
              <br />
              I'm Abhash <span className="orange">Kumar</span>
            </h1>
            <a href={resume} download="Abhash_Resume" target='_blank'>
              <Button key="about_me" className="about-me-button">
                About Me <FaChevronDown />
              </Button>
            </a>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/abhash-kumar-71287473/" target='blank'>
                <div className="icon-circle">
                  <FaLinkedin className="social-icon" />
                </div>
              </a>
              <a href="https://github.com/abhashkumar?tab=repositories" target="blank">
                <div className="icon-circle">
                  <FaGithub className="social-icon" />
                </div>
              </a>
              <a href="https://twitter.com/abhashmadd" target="blank">
                <div className="icon-circle">
                  <FaTwitter className="social-icon" />
                </div>
              </a>
              <a href="https://leetcode.com/abhashkumarchoudhary/" target="blank">
                <div className="icon-circle">
                  <FaLinkedinIn className="social-icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="right-div">
        <div className="circular-icon-container">
            <img src={HiIcon} alt="Hi Icon" className="hi-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
