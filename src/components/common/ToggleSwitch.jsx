import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({ onClick }) => {
  return (
    <span className="toggle-switch" onClick={onClick}>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </span>
  );
};

ToggleSwitch.propTypes = {
  onClick: PropTypes.func.isRequired
};
export default ToggleSwitch;