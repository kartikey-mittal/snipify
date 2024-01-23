/* eslint-disable no-undef */
import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Image from '../assets/face.jpg';

// s
function CheckFace() {
    const {id} =useParams();
  let faceioInstance = null;
const navigate = useNavigate();
  useEffect(() => {
    const faceIoScript = document.createElement('script');
    faceIoScript.src = '//cdn.faceio.net/fio.js';
    faceIoScript.async = true;
    faceIoScript.onload = () => faceIoScriptLoaded();
    faceIoScript.onerror = (error) => console.error('Error loading FaceIO script:', error);
    document.body.appendChild(faceIoScript);

    return () => {
      document.body.removeChild(faceIoScript);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const faceIoScriptLoaded = () => {
    console.log(faceIO);
    if (faceIO && !faceioInstance) {
      faceioInstance = new faceIO('fioa0c76');
    }
  };

//   const faceRegistration = async () => {
//     try {
//       const userInfo = await faceioInstance.enroll({
//         locale: "auto",
//         payload: {
//           email: "demo",
//           userId: "demo",
//           username: "demo",
//         },
//       });
//       console.log(userInfo);
//       console.log('Unique Facial ID: ', userInfo.facialId);
//       console.log('Enrollment Date: ', userInfo.timestamp);
//       console.log('Gender: ', userInfo.details.gender);
//       console.log('Age Approximation: ', userInfo.details.age);
//       navigate(`/skilled/profile/${id}`);
//     } catch (errorCode) {
//       console.log(errorCode);
//       handleError(errorCode);
//     }
//   };

  const faceSignIn = async () => {
    try {
      console.log(faceioInstance);
      const userData = await faceioInstance.authenticate({
        locale: "auto",
      });
      console.log(userData);
      navigate(`/skilled/connect/${id}`);
      console.log('Unique Facial ID: ', userData.facialId);
      console.log('PayLoad: ', userData.payload);
      
    } catch (errorCode) {
      console.log('yes');
      console.log(errorCode);
      faceioInstance.restartSession();
      handleError(errorCode);
    }
  };

  const handleError = (errCode) => {
    // Handle errors as needed
    console.error('FaceIO Error:', errCode);
  };
// ***************************************************
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

  const continueButtonStyle = {
    borderRadius: '15px',
    margin: '5px',
    padding: '20px',
    width: '30%',
    backgroundColor: '#4285F4',
    color: 'white',
    fontFamily: 'DMM',
    border: 'none',
    fontSize: '15px',
    cursor: 'pointer',
    marginBottom: '20px',
  };

  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
    },
    leftSectionHidden: {
      display: isLeftSectionVisible ? 'flex' : 'none',
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
      
      fontSize: 150,
      fontFamily: 'DMM',
      display: isLeftSectionVisible ? 'flex' : 'none',

    },
    rightSection: {
        flex: isLeftSectionVisible ? '0 0 40vw' : '0 0 100vw', // Adjust flex based on visibility
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
  };
//-----------------------
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <img
          src={Image}
          alt="Logo"
          style={{ height: '400px', width: '550px', borderRadius: '10%', boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)', }}
        />
      </div>

      <div style={styles.rightSection}>
        <div style={styles.formContainer}>
          <div style={styles.loginTitle}>FACE DETECTION</div>
          <div style={styles.loginSubtitle}>Please Click on Continue Button :)</div>

          <div style={{ marginLeft: '5%', marginTop: '10%', marginRight: '5%' }}>
            <p style={{ color: 'red', textAlign: 'left', fontSize: '18px', lineHeight: 1.5 }}>
              *Please make sure that you give correct credentials for registering as a Teacher. Also, anyone cannot
              login from your account. Thanks !!
            </p>
          </div>

          {/* Continue Button */}
          <div style={{ ...continueButtonStyle, alignSelf: 'center', marginTop: '30%' }} onClick={faceSignIn}>Continue</div>
        </div>
      </div>
    </div>
  );
};

export default CheckFace;