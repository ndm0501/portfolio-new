import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({
  value,
  onChange

}) => {
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    () => setToggle(!toggle);
    onChange();
  };

  console.log('hhh', toggle);
  return (
    <span className={`toggle-switch ${toggle ? 'on' : 'off'}`} >
      <label className="switch">
        <input type="checkbox" value={toggle} defaultChecked={value} onChange={handleChange} />
        <span className={'slider'}></span>
      </label>
    </span>
  );
};

ToggleSwitch.defaultProps = {
  value: false,
};

ToggleSwitch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;