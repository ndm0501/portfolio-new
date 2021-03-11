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
            <li>
              Added feature that enhanced the business growth by 10%.
              Added feature that enhanced the business growth by 10%.
              Added feature that enhanced the business growth by 10%
            </li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
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
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
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
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
            <li>Added feature that enhanced the business growth by 10%</li>
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