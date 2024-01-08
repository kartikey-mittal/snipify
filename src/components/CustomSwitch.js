import React, { useState } from 'react';

const CustomSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const switchStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '120px',
    height: '40px',
    borderRadius: '25px',
    backgroundColor: isToggled ? '#38BE3C' : '#fa5a55',
    cursor: 'pointer',
  };

  const circleStyle = {
    position: 'absolute',
    left: isToggled ? '75px' : '10px', // Adjusted this line
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: '#E5E5E5',
    transition: 'transform 0.3s ease',
    zIndex: 1,
  };

  const textStyleOnline = {
    left: isToggled ? '10px' : '65px', // Adjusted this line
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    opacity: isToggled ? '0' : '1',
    zIndex: 0,
  };

  const textStyleOffline = {
    left: isToggled ? '65px' : '10px', // Adjusted this line
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    opacity: isToggled ? '1' : '0',
    zIndex: 0,
  };

  return (
    <div style={switchStyle} onClick={handleToggle}>
      <div style={circleStyle}></div>
      <p style={textStyleOnline}>{' '}</p>
      <p style={textStyleOffline}>{' '}</p>
    </div>
  );
};

export default CustomSwitch;
