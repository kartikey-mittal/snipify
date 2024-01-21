import React, { useState } from 'react';
import Logo from './assets/snipify_1.png'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
    width: 'calc(100% - 20px)',
    height: '8%',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };


  const blueContainerStyle = {
    width: '125px',
    height: '40px',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = (color) => ({
    width: '90px',
    height: '38px',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    marginRight:10,
    Fontfamily:'DMM',
    fontSize: 20,
    fontWeight: 600,
  });

  const [activeButton, setActiveButton] = useState('red');
  
  const handleSessionsClick = () => {
    setActiveButton('pink');
    // Navigate to 'skilled/sessions'
    navigate('/skilled/sessions');
  };

  return (
    <div style={navbarStyle}>
      <div style={blueContainerStyle}>
        <img src={Logo} alt="Logo" style={{height:'100%'}} /> {/* Stretch the SVG logo */}
      </div>
      <div 
        style={{...buttonStyle('white'), marginLeft: 'auto', borderBottomColor: activeButton === 'red' ? '#5813EA' : 'transparent'}}
        onClick={() => setActiveButton('red')}
      >
        Instant
      </div>
      <div 
        style={{...buttonStyle('white'), borderBottomColor: activeButton === 'pink' ? '#5813EA' : 'transparent'}}
        onClick={() => { setActiveButton('pink'); handleSessionsClick(); }}
      >
        Sessions
      </div>
      <div 
        style={{backgroundColor:'#D9D9D9',borderRadius:'100%',height:40,width:40,marginRight:20, borderBottomColor: activeButton === 'orange' ? 'black' : 'transparent',cursor:'pointer'}}
        
      >
       
      </div>
    </div>
  );
};

export default Navbar;
