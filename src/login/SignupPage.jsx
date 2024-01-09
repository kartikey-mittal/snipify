import React, { useState } from 'react';
import Logo from '../assets/snipify_ob.png'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
 
  const [selectedButton, setSelectedButton] = useState(null);
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const navigate = useNavigate(); // Move useNavigate to the top level
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleContinueClick = async () => {
    const name = enteredName.trim();
    const email = enteredEmail.trim();
    const password = enteredPassword.trim();

    try {
      if (selectedButton === 'learner' || selectedButton === 'skilled') {
        const userCollection = selectedButton === 'learner' ? 'Learner' : 'Skilled';

        // Add document to Firestore
        const docRef = await addDoc(collection(db, userCollection), {
          Name: name,
          Email: email,
          Password: password,
          Timestamp: serverTimestamp(),
        });

        // Save data to local storage based on the selected button
        if (selectedButton === 'learner') {
          localStorage.setItem('LearnerName', name);
          localStorage.setItem('LearnerEmail', email);
          // Redirect to learner home page
          navigate('/learner/home');
        } else if (selectedButton === 'skilled') {
          // Save data to local storage for later retrieval
          localStorage.setItem('SkilledName', name);
          localStorage.setItem('SkilledEmail', email);

          // Delay the navigation to ensure Firestore has enough time to save the data
          setTimeout(() => {
            // Redirect to skilled profile page with the document ID
            navigate(`/skilled/profile/${docRef.id}`);
          }, 1000); // You can adjust the delay as needed
        }
      }
    } catch (error) {
      console.error('Error saving data to Firestore:', error);
    }
  };

  const isContinueButtonDisabled = !selectedButton || !enteredName || !enteredEmail || !enteredPassword;

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
      flex: '0 0 60vw',
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
      flex: '0 0 40vw',
      display: 'flex',
      backgroundColor: '#EEF4FE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      height: '80vh',
      width: '100%',
      backgroundColor: 'white',
      margin: 30,
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
      marginTop: 30,
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
        cursor: isContinueButtonDisabled ? 'not-allowed' : 'pointer',
        opacity: isContinueButtonDisabled ? 0.5 : 1,
        
        marginBottom: '20px',
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
  
      
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
       
        <img src={Logo} alt="Logo" style={{height:'300px',width:'600px',}} /> {/* Stretch the SVG logo */}
        </div>

      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <div style={styles.loginTitle}>SignUp</div>
          <div style={styles.loginSubtitle}>ready to onboard in community :)</div>

          

          {/* Form */}

          <div style={styles.emailLabel}>Name</div>
          <input type="text" style={{ ...styles.inputField, marginLeft: '30px' }} placeholder="Enter your full Name" value={enteredName}
  onChange={(event) => setEnteredName(event.target.value)}/>


          <div style={styles.passwordLabel}>Email</div>
          <input type="text" style={{ ...styles.inputField, marginLeft: '30px' }} placeholder="Enter your email" 
          value={enteredEmail}
          onChange={(event) => setEnteredEmail(event.target.value)}/>


          <div style={styles.passwordLabel}>Password</div>
          <input type="password" style={{ ...styles.inputField, marginLeft: '30px' }} placeholder="Enter your Password" 
          value={enteredPassword}
          onChange={(event) => setEnteredPassword(event.target.value)}/>

          

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

          

          {/* Continue Button */}
          <div style={{...styles.continueButton,marginLeft: '30px',marginTop:'50px' }} onClick={handleContinueClick}>Continue</div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
