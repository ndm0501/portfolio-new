import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-wrapper">
      <div className="bio-info">
        <div className="name">
          Mohammad Nadeem
        </div>
        <div className="designation">
          Software Engineer
        </div>
        <div className="organization">
          <a href="https://www.scripbox.com" target='_blank' rel='noopener noreferrer' >
            @Scripbox
          </a>
        </div>
        <div className="socials">
          <div className="social-link">
            <a href="https://www.linkedin.com/in/ndm-0501/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
              LinkedIn
            </a>
          </div>
          <div className="social-link">
            <a href="https://github.com/ndm0501" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
              Github
            </a>
          </div>
        </div>
        <a href="https://linkedin.com/in/ndm-0501"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Hire Me
        </a>
      </div>
      <div className="bio-image">
        <img src="./assets/img/2636676.jpg" />
      </div>
    </section>
  );
};
export default Home;