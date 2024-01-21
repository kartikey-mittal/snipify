import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where ,doc,getDoc} from 'firebase/firestore';
import { db, storage } from '../Firebase';

const Question = () => {
  const { id } = useParams();

  const [slideIndex, setSlideIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);
  const [images, setImages] = useState([]);
console.log(id);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 615);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const requestRef = doc(db, 'Requests', id);
        const docSnapshot = await getDoc(requestRef);
  
        if (docSnapshot.exists()) {
          const requestData = docSnapshot.data();
          console.log('Request Data:', requestData);
  
          // Assuming the screenshots array is present in the requestData
          const screenshots = requestData?.Screenshots || [];
          console.log('Screenshots:', screenshots);
  
          setImages(screenshots);
        } else {
          console.error('Request not found');
        }
      } catch (error) {
        console.error('Error fetching request data:', error);
      }
    };
  
    fetchRequestData();
  
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isSlideshowActive) {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 6000);

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [isSlideshowActive, slideIndex, images]);

  const toggleSlideshow = () => {
    setIsSlideshowActive((prevValue) => !prevValue);
  };

  const homeStyle = {
    height: '85%',
    display: 'flex',
    flexDirection: isMobileView ? 'column' : 'row',
    justifyContent: 'center',
    padding: 20,
    background: `
      repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(66, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      #5813ea`,
  };

  const contentStyle = {
    width: isMobileView ? '100%' : '70%',
    height: isMobileView ? '55vh' : '85vh',
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
    textAlign: 'left',
    paddingLeft: isMobileView ? 20 : 80,
  };

  const mainboxStyle = {
    width: isMobileView ? '80%' : '70%',
    height: '85%',
    backgroundColor: 'red',
    borderRadius: 15,
    margin: 'auto',
    marginTop: '20px',
    border: '1px solid blue',
    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.1)',
  };

  const sliderContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  };

  const sliderStyle = {
    display: 'flex',
    transition: 'transform 2s ease-in-out',
    transform: `translateX(-${slideIndex * 100}%)`,
  };

  const slideStyle = {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <>
      <Navbar />
      <div style={homeStyle}>
        <div style={contentStyle}>
          <div style={headingStyle}>👀 Something is found !!</div>
          <div style={mainboxStyle}>
            <div style={sliderContainerStyle}>
              <div style={sliderStyle}>
                {images.map((imageUrl, index) => (
                  <div key={index} style={slideStyle}>
                    <img
                      src={imageUrl}
                      alt={`uploaded-${index}`}
                      style={{
                        width: '55%',
                        height: 'auto',
                        borderRadius: 10,
                        marginTop: 70,
                        transform: isSlideshowActive ? 'scale(1)' : 'scale(1.8)',
                        transition: 'transform 2s ease-in-out',
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faCog}
                      style={{
                        marginTop: isMobileView ? '50' : '100',
                        marginLeft: isMobileView ? '50%' : '70%',
                        fontSize: 20,
                        cursor: 'pointer',
                        zIndex: 999,
                        color: 'white',
                      }}
                      onClick={toggleSlideshow}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: isMobileView ? '80%' : '20%', backgroundColor: 'yellow', marginLeft: 20, display: 'flex', flexDirection: isMobileView ? 'row' : 'column', marginTop: isMobileView ? '20px' : 0 }}>
          <div style={{ backgroundColor: 'black', height: isMobileView ? '200px' : '400px', alignSelf: 'center' }}></div>
          <button
            style={{
              backgroundColor: '#4285F4',
              color: '#fff',
              borderRadius: 100,
              border: '#7D716A',
              borderWidth: '0.2px',
              fontFamily: 'DMM',
              padding: '10px',
              outline: 'none',
              width: '40%',
              paddingLeft: 20,
              paddingRight: 20,
              marginLeft: '30%',
              fontSize: 15,
              cursor: 'pointer',
              marginTop: isMobileView ? '120px' : '20px',
              alignSelf: isMobileView ? 'center' : 'auto',
            }}
          >
            Connect
          </button>
        </div>
      </div>
    </>
  );
};

export default Question;
