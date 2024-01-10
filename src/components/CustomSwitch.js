import React, { useState } from 'react';

const CustomSwitch = () => {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const switchStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '80px', // Shorter width
    height: '25px', // Shorter height
    borderRadius: '15px', // Adjust border radius for smaller size
    backgroundColor: isToggled ? '#38BE3C' : '#fa5a55',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', // Add subtle shadow
  };

  const circleStyle = {
    position: 'absolute',
    right: isToggled ? '0px' : '30px', // Adjusted for smaller size
    transform: isToggled ? 'translateX(0)' : 'translateX(-50%)',
    width: '25px', // Smaller circle
    height: '25px', // Smaller circle
    borderRadius: '50%',
    backgroundColor: '#E5E5E5',
    transition: 'transform 0.3s ease',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '10px', // Slightly smaller font
    fontWeight: '500',
    color: 'white',
    left: isToggled ? '5px' : '25px', // Adjusted for smaller size
  };

  return (
    <div style={switchStyle} onClick={handleToggle}>
      <div style={textStyle}>{isToggled ? 'ONLINE' : 'OFFLINE'}</div>
      <div style={circleStyle}></div>
    </div>
  );
};

export default CustomSwitch;
