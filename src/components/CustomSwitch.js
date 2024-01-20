import React, { useState, } from 'react';

const CustomSwitch = () => {
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);

  //   useEffect(() => {
  //       const handleResize = () => {
  //           setIsMobileView(window.innerWidth <= 615);
  //       };

  //       window.addEventListener('resize', handleResize);

  //       // Clean up the event listener on component unmount
  //       return () => {
  //           window.removeEventListener('resize', handleResize);
  //       };
  //   }, []);
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const switchStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '80px', // Shorter width
    height: '35px', // Shorter height
    borderRadius: '15px', // Adjust border radius for smaller size
    backgroundColor: isToggled ? '#38BE3C' : '#fa5a55',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)', // Add subtle shadow
    marginRight:20
  };

  const circleStyle = {
    position: 'absolute',
    right: isToggled ? '0px' : '32px', // Adjusted for smaller size
    transform: isToggled ? 'translateX(0)' : 'translateX(-50%)',
    width: '30px', // Smaller circle
    height: '30px', // Smaller circle
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
    left: isToggled ? '5px' : '35px', // Adjusted for smaller size
  };

  return (
    <div style={switchStyle} onClick={handleToggle}>
      <div style={textStyle}>{isToggled ? 'Online' : 'Offline'}</div>
      <div style={circleStyle}></div>
    </div>
  );
};

export default CustomSwitch;
