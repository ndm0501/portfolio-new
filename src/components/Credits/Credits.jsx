import React from 'react';
import './Credits.css';
import PropTypes from 'prop-types';

const Credits = ({ setShowCreditsModal }) => (
  <section className="credits-wrapper">
    <div className="credits-container">
      <div className="credits-header">
        <div></div>
        <div>
          <span className="secondary-color">&hearts;</span>
          <span className="secondary-color">&hearts;</span>
          Credits
          <span className="secondary-color">&hearts;</span>
          <span className="secondary-color">&hearts;</span>
        </div>
        <button className="btn-modal-close"
          onClick={() => setShowCreditsModal(false)}
        >X</button>
      </div>
      <div className="credits-contents">
        <div className="row">
          <div className="col-1 field">Image</div>
          <div className="col-2"><a href='https://www.freepik.com/vectors/people' target="_blank" rel="noreferrer">People vector created by pikisuperstar - www.freepik.com</a></div>
        </div>
        <div className="row">
          <div className="col-1 field">Icons</div>
          <div className="col-2"><a href="https://fontawesome.com" target="_blank" rel="noreferrer">FontAwesome</a></div>
        </div>
        <div className="row">
          <div className="col-1 field">Avatar</div>
          <div className="col-2"><a href="https://www.bitmoji.com" target="_blank" rel="noreferrer">Bitmoji</a></div>
        </div>
        <div className="row">
          <div className="col-1 field">Design Idea</div>
          <div className="col-2"><a href="https://suprabha.me" target="_blank" rel="noreferrer">Suprabha</a></div>
        </div>
        <div className="row">
          <div className="col-1 field">Color Theme</div>
          <div className="col-2"><a href="https://colorhunt.co/" target="_blank" rel="noreferrer">Color Hunt</a></div>
        </div>
      </div>
    </div>
  </section>
);
Credits.propTypes = {
  setShowCreditsModal: PropTypes.func.isRequired
};
export default Credits;