import React from 'react';
import { Container} from 'reactstrap';
import '../Styles/Experience.css'; // Import CSS for experience animation
import './helper/Styles/ProjectCard.css';
import ProjectCard from './helper/ProjectCard';
import HiIcon from  '../assets/Availity-removebg-preview.png';
import Alegeus from '../assets/Alegeus-removebg-preview.png';
import GE from '../assets/GE-removebg-preview.png';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
    <div className="projects">
      <ProjectCard
        company="Availity, Bangalore"
        position="Senior Software Engineer"
        duration="May 2023 – Current"
        description={[
          "Spearheaded the development of a common library of reusable components, streamlining development processes across multiple projects and improving code consistency.",
          "Designed and implemented storybooks for UI components, significantly enhancing team productivity and efficiency by providing a centralized platform for visualizing and testing UI elements in isolation.",
          "Successfully migrated AngularJS application to ReactJS, leveraging modern technologies and best practices to improve maintainability and scalability.",
          "Developed Webhooks insurance master, PAM portal using React, TypeScript, and Reactstrap, empowering healthcare professionals to receive real-time notifications and enhancing patient care coordination."
        ]}
        logoSrc={HiIcon}
      />
      <ProjectCard
        company="Alegeus, Bangalore"
        position="Senior Software Engineer"
        duration="Oct 2021 – May 2023"
        description={[
          "Led knowledge transfer sessions and created comprehensive documentation for onboarded team members, reducing ramp-up time and ensuring smooth integration into project workflows.",
          "Played a key role in the creation and maintenance of build and release pipelines, facilitating seamless deployment of major and minor releases and accelerating time-to-market for product features.",
          "Contributed to the development of Consumer-Directed Healthcare Solutions, focusing on feature implementation, code quality, and resolving technical blockers to meet project objectives efficiently."
        ]}
        logoSrc={Alegeus}
      />
      <ProjectCard
        company="GE Digital, Bangalore"
        position="Software Engineer Specialist"
        duration="July 2017 – Sept 2021"
        description={[
          "Orchestrated the integration of various modules and databases, optimizing system performance and reliability as part of the Asset Performance Management project.",
          "Championed the migration of legacy systems to .NET Core, leveraging modern technologies and design patterns to enhance system scalability and maintainability.",
          "Provided expertise in enhancing features and resolving issues for APM SSO authentication, ensuring seamless and secure access for users across different authentication protocols."
        ]}
        logoSrc={GE}
      />
    </div>
    </section>
  );
};

export default Experience;
