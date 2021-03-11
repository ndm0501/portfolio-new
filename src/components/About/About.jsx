import React from 'react';
import './About.css';

const renderSeparator = () => (
  <div className="separator-container">
    <div className="separator"></div>
  </div>);
const renderAboutSideBar = () => (
  <div className="about-side-wrapper">
    <div className="about-contact">
      <div className="info-container">
        <i className="fas fa-envelope"></i>
        <div>
          nxxxxxx1@gmail.com
        </div>
      </div>
      <div className="info-container">
        <i className="fas fa-phone"></i>
        <div>
          +91 75xx xxxx 10
        </div>
      </div>
      <div className="info-container">
        <i className="fas fa-map-marker-alt"></i>
        <div>
          Bangalore, India
        </div>
      </div>

    </div>
    <div className="about-education">
      <div className="about-title">Education</div>
      <div className="about-description">
        <b>BACHELOR OF TECHNOLOGY</b><br />
        <div className="title-secondary">
          <i>Electronics & Communication Engineering</i>
        </div>
        Maulana Abul Kalam Azad University of Technology,
        Kolkata, India
      </div>
    </div>
    <div className="about-hobbies">
      <div className="about-title">Hobbies</div>
      <div className="about-description">
        Singing
      </div>
      <div className="about-description">
        Playing Guitar
      </div>
      <div className="about-description">
        Reading Books
      </div>
    </div>
    <div className="about-summary">
      <div className="about-title">Summary</div>
      <div className="about-description">
        A passionate developer, philomath, bringing 2.5+ years of experience
        in multiple Web Technologies and fostering relationships with clients,
        partners & team members. Proficient with front-end web development,
        learner of backend web-technologies, aspiring to be a proficient
        full-stack web development.
      </div>
    </div>
  </div>);

const renderAboutMain = () => (
  <div className="about-main-wrapper">
    <div className="about-work-experience">
      <div className="about-title">Work Experience</div>
      <div className="experience-details">
        <div className="job-designation">Software Engineer</div>
        <div className="organisation-name">Scripbox Advisors Pvt Ltd</div>
        <div className="job-duration"><i>12/2020 - Present</i></div>
        <div className="work-descriptions">
          <ul>
            <li>Added a standard component library to be utilized across multiple applications</li>
            <li>Worked on feature upgradation, analyzed the outdated technology and migrated the app with the latest one</li>
            <li>Added features which enhanced SEO by 20%</li>
            <li>Working with multiple web-technologies to enhance the existing applications</li>
            <li>Working on adding new features that targets a large audience to use our product(s)</li>
          </ul>
        </div>
      </div>
      {renderSeparator()}
      <div className="experience-details">
        <div className="job-designation">Senior System Engineer</div>
        <div className="organisation-name">Infosys Limited</div>
        <div className="job-duration"><i>07/2020 - 11/2020</i></div>
        <div className="work-descriptions">
          <ul>
            <li>Worked as Frontend Engineer in financial domain, developing multiple projects following AGILE process of project development</li>
            <li>Won sprint awards for Individual Excellence and Best Team</li>
            <li>Successfully completed 66 User Stories which included design, development, optimization and deployment</li>
            <li>Developed and implemented the designs provided by the client</li>
            <li>Coordinated with the team to analyze and develop the business requirements</li>
            <li>Worked closely with the backend team to integrate the services with the front-end</li>
            <li>Worked closely with the BSAs to understand the business requirements and gave required inputs</li>
          </ul>
        </div>
      </div>
      {renderSeparator()}
      <div className="experience-details">
        <div className="job-designation">System Engineer</div>
        <div className="organisation-name">Infosys Limited</div>
        <div className="job-duration"><i>07/2018 - 06/2020</i></div>
        <div className="work-descriptions">
          <ul>
            <li>Underwent a fast-track training to understand and learn basic concepts of Object Oriented Programming, SQL and Web Technologies</li>
            <li>Designed and implemented UI, API, and database features for a Trip & Travel-applicaton using ReactJS, NodeJS, and MongoDB.</li>
            <li>Created a CI/CD pipeline for the MERN application using GIT and Jenkins</li>
            <li>Won sprint awards for Going Above and  Beyond for completing exceptional tasks.</li>
            <li>Worked as MERN Stack Developer Lex(Infosys Learning Platform)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
const About = () => {
  return (
    <section id="about" className="about-wrapper">
      {renderAboutSideBar()}
      {renderAboutMain()}
    </section>
  );
};
export default About;