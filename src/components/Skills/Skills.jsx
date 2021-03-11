import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-wrapper">
      <div className="skills-title">
        <h1>Skills that matter!</h1>
      </div>
      <div className="skills-list">
        <div className="skill-container">
          <div className="icon-container">
            <i className="fab fa-html5"></i>
          </div>
          <div className="skill-title">HTML</div>
        </div>
        <div className="skill-container">
          <div className="icon-container">
            <i className="fab fa-css3-alt"></i>
          </div>
          <div className="skill-title">CSS</div>
        </div>
        <div className="skill-container">
          <div className="icon-container">
            <i className="fab fa-sass"></i>
          </div>
          <div className="skill-title">SASS</div>
        </div>
        <div className="skill-container">
          <div className="icon-container">
            <i className="fab fa-js-square"></i>
          </div>
          <div className="skill-title">Javascript</div>
        </div>
        <div className="skill-container">
          <div className="icon-container">
            <i className="fab fa-react"></i>
          </div>
          <div className="skill-title">
            React/<br />Redux</div>
        </div>
        <div className="skill-container">
          <div className="icon-container">
            <i className="fas fa-mobile"></i>
          </div>
          <div className="skill-title">React<br />Native</div>
        </div>
        <div className="skill-container">
          <div className="icon-container">
            <i className="fab fa-node-js"></i>
          </div>
          <div className="skill-title">Node/<br />Express</div>
        </div>
      </div>
      <div className="curve-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='#30475e' fillOpacity="1" d="M0,192L60,160C120,128,240,64,360,58.7C480,53,600,107,720,128C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
    </section>
  );
};
export default Skills;