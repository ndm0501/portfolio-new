import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({
  isToggled,
  onChange

}) => {
  const [toggle, setToggle] = useState(isToggled);

  const handleChange = () => {
    setToggle(!toggle);
    onChange();
  };

  console.log('hhh', toggle);
  return (
    <span className={`toggle-switch ${toggle ? 'on' : 'off'}`}>
      <label className="switch">
        <input type="checkbox" value={toggle} defaultChecked={isToggled} onChange={handleChange} />
        <span className={'slider'}></span>
      </label>
    </span>
  );
};

ToggleSwitch.defaultProps = {
  isToggled: false,
};

ToggleSwitch.propTypes = {
  isToggled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;