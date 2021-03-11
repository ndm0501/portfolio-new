import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ setShowCreditsModal }) => (
  <footer className="footer">
    <div className="footer-socials">
      <a href="https://www.linkedin.com/in/ndm-0501/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/ndm0501" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://facebook.com/ndm0501" target="_blank" rel="noreferrer">
        <i className="fab fa-facebook-square"></i>
      </a>
      <a href="https://twitter.com/ndm0501" target="_blank" rel="noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
    <div className="footer-credits">
      <button className="btn-footer" onClick={() => setShowCreditsModal(true)}>
        <span className="secondary-color">&hearts;</span>
        <span className="secondary-color">&hearts;</span>
        Credits
        <span className="secondary-color">&hearts;</span>
        <span className="secondary-color">&hearts;</span>
      </button>
    </div>
    <div className="footer-author">
      <span className="primary-color">Copyright@</span>
      <span className="secondary-color">
        <a className="secondary-color" href="https://www.linkedin.com/in/ndm-0501/" target="_blank" rel="noreferrer">Mohammad_Nadeem</a>
      </span>
    </div>
  </footer>
);
Footer.propTypes = {
  setShowCreditsModal: PropTypes.func.isRequired
};
export default Footer;