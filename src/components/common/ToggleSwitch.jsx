import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  return (
    <span className="toggle-switch">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </span>
  );
};
export default ToggleSwitch;