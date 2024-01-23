import React, { useEffect, useState } from 'react';
import Navbar1 from '../Navbar1';
import { useParams } from 'react-router-dom';
import { onSnapshot, doc, getFirestore, updateDoc } from 'firebase/firestore';
import gif from '../assets/connection.gif';
import { useNavigate } from 'react-router-dom'; // import useNavigate
const HomeConnect = () => {
  const { documentId } = useParams();
  const [status, setStatus] = useState(null);
  const navigate = useNavigate(); // initialize useNavigate

  const homeStyle = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'red',
    background: `
      repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(66, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      #5813ea`,
  };

  const contentStyle = {
    width: '85%',
    height: '85vh',
    border: '1px solid #ccc',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    backgroundColor: '#F3F6FC',
  };

  const headingStyle = {
    width: '100%',
    backgroundColor: '#FFF4E8',
    fontSize: 25,
    fontFamily: 'DMM',
    fontWeight: 500,
    paddingTop: 5,
    paddingBottom: 5,
  };

  const mainboxStyle = {
    position: 'relative',
    width: '90%',
    height: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 'auto',
    marginTop: '20px',
    border: '1px solid blue',
    boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
  };

  const gifStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
    margin: 'auto',
    marginTop: '20px',
  };

  const connectButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100,
    borderRadius: '20px',
    margin: '5px',
    padding: '10px',
    width: '10vw',
    backgroundColor: '#4285F4',
    color: '#fff',
    fontFamily: 'DMM',
    border: 'none',
    fontSize: '15px',
    // color: 'black',
    marginBottom: '20px',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const requestRef = doc(db, 'Requests', documentId);

      const unsubscribe = onSnapshot(requestRef, (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setStatus(data.Status);
        }
      });

      return () => {
        unsubscribe();
      };
    };

    fetchData();
  }, [documentId]);

  const handleConnectClick = async () => {
    const db = getFirestore();
    const requestRef = doc(db, 'Requests', documentId);

    await updateDoc(requestRef, { Status: 2 });

    alert('Connection established!');
    navigate(`/room/${documentId}`); // navigate to the new route
  };

  return (
    <>
      <Navbar1 />
      <div style={homeStyle}>
        <div style={contentStyle}>
          <div style={headingStyle}>
            {status >= 1 ? '🟢Connection found!' : 'Searching 🔎.....'}
          </div>
          <div style={mainboxStyle}>
            {status >= 1 ? (
              <button onClick={handleConnectClick} style={connectButtonStyle}>
                Connect 🚀
              </button>
            ) : (
              <>
                <img src={gif} alt="Your GIF" style={gifStyle} />
                <div>
                  <p>Document ID from ftrgtrbghgtrjubtrnbrhb4 vkjmhbm4hrf hbmvf32djch hjq34e params: {documentId}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeConnect;
