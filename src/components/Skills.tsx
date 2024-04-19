import React from 'react';
import '../Styles/Skills.css'; // Import CSS for skills animation
import rlogo from '../assets/React_logo1-removebg-preview.png';
import netCore from '../assets/Netcore-removebg-preview.png';
import docker from '../assets/docker-removebg-preview.png';
import js from '../assets/JS2-removebg-preview.png';
import ts from '../assets/Typescript1-removebg-preview.png';
import csharp from '../assets/c_-removebg-preview.png';
import xunit from '../assets/xunit-removebg-preview.png';
import aws from '../assets/aws.png';
import coverlet from '../assets/coverlet-removebg-preview.png';
import efcore from '../assets/Efcore1-removebg-preview.png';
import opentelemetry from '../assets/openTelemetry-removebg-preview.png';
import graphana from '../assets/Graphana-removebg-preview.png';
import prometheus from '../assets/prometheus1-removebg-preview.png';
import kubernetes from '../assets/Kubernetes1-removebg-preview.png';
import sql from '../assets/Sql1-removebg-preview.png';
import mongo from '../assets/mongodb-removebg-preview.png';
import jest from '../assets/Jest-removebg-preview.png';
import moq from '../assets/MOQ-removebg-preview.png';
import jenkins from '../assets/Jenkins-removebg-preview.png';
import git from '../assets/git-removebg-preview.png';
import { FaTools } from 'react-icons/fa';


const renderSkillRow = (row: number, location:string[]) => {
  return (
    <div className="skill-row" key={row}>
      {location.map(column => (
        <div className="skill-cell" key={`${row}-${column}`}>
          <img src={column} alt="Logo" className="skill-logo" />
        </div>
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
    <div className="skills-section">
      <h2><FaTools />Skills</h2>
      <div className="skills-grid">
        {renderSkillRow(1, [rlogo,  js, ts, csharp, xunit])}
        {renderSkillRow(2, [netCore, aws, coverlet, efcore, opentelemetry])}
        {renderSkillRow(3, [docker, graphana, prometheus, kubernetes, sql])}
        {renderSkillRow(4, [mongo, jest, moq, jenkins, git])}
      </div>
    </div>
    </section>
  );
};

export default Skills;
