import React, { useState,useEffect } from 'react';
import Logo from '../assets/snipify_ob.png'
import { collection, getDocs, query, where,  } from 'firebase/firestore';
import { db } from '../Firebase'

const LoginPage = () => {


  const [isLeftSectionVisible, setIsLeftSectionVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLeftSectionVisible(window.innerWidth > 615);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const [selectedButton, setSelectedButton] = useState(null);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleContinueClick = async () => {
    // Extract email and password from the state
    console.log(enteredEmail);
    const email = enteredEmail.trim();
    const password = enteredPassword.trim();

    try {
      if (selectedButton === 'learner') {
        const q = query(
          collection(db, 'Learner'),
          where('Email', '==', email),
          where('Password', '==', password)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          alert('Login successful for Learner!');
          const learnerData = querySnapshot.docs[0].data();
          localStorage.setItem('LearnerName', learnerData.Name);
          localStorage.setItem('LearnerEmail', learnerData.Email);

          const learnerName = localStorage.getItem('LearnerName');
          console.log(`Learner Name: ${learnerName}`);
          window.location.href = '/learner/home';
        } else {
          alert('No matching record found for Learner');
        }
      } else if (selectedButton === 'skilled') {
        const q = query(
          collection(db, 'Skilled'),
          where('Email', '==', email),
          where('Password', '==', password)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const skilledData = querySnapshot.docs[0].data();
          localStorage.setItem('SkilledName', skilledData.Name);
          localStorage.setItem('SkilledEmail', skilledData.Email);
          localStorage.setItem('SkilledSkillsArray', JSON.stringify(skilledData.selectedSkills || [])); 
          alert('Login successful for Skilled!');
          window.location.href = '/skilled/home';
        } else {
          alert('No matching record found for Skilled');
        }
      }
    } catch (error) {
      console.error('Error searching Firestore:', error);
    }
  };

  const isContinueButtonDisabled = !(selectedButton && enteredEmail && enteredPassword);

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
    },
    leftSection: {
      background: `
      repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px),
      repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(242, 242, 242, 0.3) 50px, rgba(242, 242, 242, 0.3) 51px),
      #5813EA`,
      flex: '0 0 60%',
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
    leftSectionHidden: {
      display: isLeftSectionVisible ? 'flex' : 'none',
    },
    rightSection: {
      flex: '0 0 40%',
      display: 'flex',
      flexDirection:"column",
      backgroundColor: '#EEF4FE',
      alignItems: 'center',
      justifyContent: 'center',
      width: isLeftSectionVisible ? '40%' : '100%',
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
      marginLeft: 30,
      marginTop: 20,
      marginBottom: 10,
      color: '#1E1E1E',
      fontFamily: 'DMM',
      fontSize: 30,
      fontWeight: 600,
    },
    loginSubtitle: {
      marginLeft: 30,
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
      marginLeft: 30,
      color: '#7D716A',
      fontFamily: 'DMM',
      fontSize: 15,
      marginTop: 50,
    },
    passwordLabel: {
      marginLeft: 30,
      color: '#7D716A',
      fontFamily: 'DMM',
      fontSize: 15,
      marginTop: 20,
    },
    inputField: {
      borderRadius: 10,
      margin: 5,
      padding: '10px',
      width: '50%',
      borderColor: '#7D716A',
      borderWidth: '0.5px',
      fontFamily: 'DMM',
    },

    continueButton: {


      borderRadius: '20px',
      margin: '5px',
      padding: '10px',
      width: '15%',
      backgroundColor: isContinueButtonDisabled ? 'rgba(66, 133, 244, 0.5)' : '#4285F4',
      color: 'white',
      fontFamily: 'DMM',
      border: 'none',
      fontSize: '15px',
      
      marginBottom: '20px',
      cursor: isContinueButtonDisabled ? 'not-allowed' : 'pointer',
      opacity: isContinueButtonDisabled ? 0.5 : 1,
    },
    learnerButton: {
      // styles for the Learner button when selected
      backgroundColor: selectedButton === 'learner' ? '#4285F4' : 'white',
      color: selectedButton === 'learner' ? 'white' : '#7D716A',
      border: `1px solid ${selectedButton === 'learner' ? '#4285F4' : '#7D716A'}`,
      borderWidth: selectedButton === 'learner' ? '2px' : '1px',
    },
    skilledButton: {
      // styles for the Skilled button when selected
      backgroundColor: selectedButton === 'skilled' ? '#4285F4' : 'white',
      color: selectedButton === 'skilled' ? 'white' : '#7D716A',
      border: `1px solid ${selectedButton === 'skilled' ? '#4285F4' : '#7D716A'}`,
      borderWidth: selectedButton === 'skilled' ? '2px' : '1px',
    },
    logobtn: {
      height: 'auto', // Set height to auto to maintain aspect ratio
      maxWidth: '70%', // Ensure the image doesn't exceed the width of its container
    },

    logobtn2: {
      height: '200px', // Set height to auto to maintain aspect ratio
      maxWidth: '70%', // Ensure the image doesn't exceed the width of its container
      display: isLeftSectionVisible ? 'none' : 'flex',
    },

  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.leftSection, ...styles.leftSectionHidden }}>

        <img src={Logo} alt="Logo" style={styles.logobtn} /> {/* Stretch the SVG logo */}
      </div>

      <div style={styles.rightSection}>
      <img src={Logo} alt="Logo" style={styles.logobtn2}></img>
        <div style={styles.formContainer}>
          <div style={styles.loginTitle}>Login</div>
          <div style={styles.loginSubtitle}>ready to onboard in community :)</div>

          {/* Buttons */}
          <div style={styles.buttonGrid}>
            <div></div>
            <div
              style={{
                ...styles.button,
                ...styles.learnerButton, // Apply conditional styles for the Learner button
              }}
              onClick={() => handleButtonClick('learner')}
            >
              Learner
            </div>
            <div
              style={{
                ...styles.button,
                ...styles.skilledButton, // Apply conditional styles for the Skilled button
              }}
              onClick={() => handleButtonClick('skilled')}
            >
              Skilled
            </div>
            <div></div>
          </div>

          {/* Form */}
          <div style={styles.emailLabel}>Email</div>
          <input type="text" style={{ ...styles.inputField, marginLeft: '20px' }} placeholder="Enter your email" value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)} />


          <div style={styles.passwordLabel}>Password</div>
          <input type="password" style={{ ...styles.inputField, marginLeft: '20px' }} placeholder="Enter your Password" value={enteredPassword}
            onChange={(event) => setEnteredPassword(event.target.value)} />

          {/* Continue Button */}
          <div style={{ ...styles.continueButton, marginLeft: '20px', marginTop: '50px' }} onClick={isContinueButtonDisabled ? null : handleContinueClick}>Continue</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
