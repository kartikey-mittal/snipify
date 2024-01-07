import React, { useState } from 'react';
import Logo from '../assets/snipify_onboard.png'

const LoginPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
    },
    leftSection: {
      flex: '0 0 65vw',
      backgroundColor: '#5813EA',
      color: 'white',
      fontWeight: 800,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      fontSize: 150,
      fontFamily: 'DMM',
    },
    rightSection: {
      flex: '0 0 35vw',
      display: 'flex',
      backgroundColor: '#EEF4FE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      height: '80vh',
      width: '100%',
      backgroundColor: 'white',
      margin: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderRadius: 20,
    },
    loginTitle: {
      marginLeft: 20,
      marginTop: 20,
      marginBottom: 10,
      color: '#1E1E1E',
      fontFamily: 'DMM',
      fontSize: 30,
      fontWeight: 600,
    },
    loginSubtitle: {
      marginLeft: 20,
      color: '#7D716A',
      fontFamily: 'DMM',
      fontSize: 20,
    },
    buttonGrid: {
      display: 'grid',
      gridTemplateColumns: '30px 1fr 1fr 30px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
      gap: 40,
      marginTop: 20,
    },
    button: {
      width: '100px',
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 5,
      cursor: 'pointer',
      fontFamily: 'DMM',
      borderWidth: '1px',
    },
    emailLabel: {
      marginLeft: 20,
      color: '#7D716A',
      fontFamily: 'DMM',
      fontSize: 15,
      marginTop: 50,
    },
    passwordLabel: {
      marginLeft: 20,
      color: '#7D716A',
      fontFamily: 'DMM',
      fontSize: 15,
      marginTop: 20,
    },
    inputField: {
        borderRadius: 10,
        margin: 5,
        padding: '10px',
        width: '20vw',
        borderColor: '#7D716A',
        borderWidth: '0.5px',
        fontFamily: 'DMM',
      },
      
      continueButton: {
       
     
        borderRadius: '20px',
        margin: '5px',
        padding: '10px',
        width: '10vw',
        backgroundColor: '#4285F4',
        color: 'white',
        fontFamily: 'DMM',
        border: 'none',
        fontSize: '15px',
        cursor: 'pointer',
        marginBottom: '20px',
      },
      
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
       
        <img src={Logo} alt="Logo" style={{height:'300px',width:'600px',}} /> {/* Stretch the SVG logo */}
        </div>

      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <div style={styles.loginTitle}>Login</div>
          <div style={styles.loginSubtitle}>ready to onboard in community :)</div>

          {/* Buttons */}
          <div style={styles.buttonGrid}>
            <div></div>
            <div
              style={{
                ...styles.button,
                border: `1px solid ${selectedButton === 'learner' ? 'blue' : '#7D716A'}`,
                borderWidth: selectedButton === 'learner' ? '2px' : '1px',
              }}
              onClick={() => handleButtonClick('learner')}
            >
              Learner
            </div>
            <div
              style={{
                ...styles.button,
                border: `1px solid ${selectedButton === 'skilled' ? 'blue' : '#7D716A'}`,
                borderWidth: selectedButton === 'skilled' ? '2px' : '1px',
              }}
              onClick={() => handleButtonClick('skilled')}
            >
              Skilled
            </div>
            <div></div>
          </div>

          {/* Form */}
          <div style={styles.emailLabel}>Email</div>
          <input type="text" style={{ ...styles.inputField, marginLeft: '20px' }} placeholder="Enter your email" />


          <div style={styles.passwordLabel}>Password</div>
          <input type="password" style={{ ...styles.inputField, marginLeft: '20px' }} placeholder="Enter your Password" />

          {/* Continue Button */}
          <div style={{...styles.continueButton,marginLeft: '20px',marginTop:'50px' }}>Continue</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
