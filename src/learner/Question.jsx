import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { addDoc, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../Firebase';

const Question = () => {
    const { id } = useParams();
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [isSlideshowActive, setIsSlideshowActive] = useState(true);
    const [intervalId, setIntervalId] = useState(null);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);
    const [images, setImages] = useState([]);
    const [question, setquestion] = useState('');
    const [author, setauthor] = useState('');
    const [date, setdate] = useState('');
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
                    const question = requestData?.Question || [];
                    const author = requestData?.Name || [];
                    // const createdAt = requestData?.createdAt.toDate();
                    // setdate(createdAt);
                    setauthor(author);
                    setquestion(question);
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
        width: isMobileView ? '100%' : '95%',
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
        width: isMobileView ? '80%' : '90%',
        height: '85%',
        backgroundColor: 'transparent',
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
        height: '50%',
        overflow: 'auto',

        backgroundColor: 'transparent'
    };

    const sliderStyle = {
        display: 'flex',
        transform: isFullscreen ? 'scale(1.5)' : 'scale(1)', // Adjust scaling as needed
        transition: 'transform 0.3s ease-in-out',

        // transition: 'transform 2s ease-in-out',
        // transform: `translateX(-${slideIndex * 100}%)`,
    };

    const slideStyle = {
        flex: '0 0 auto',
        display: 'flex',
        flexDirection: 'row',
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
                        <div style={{ backgroundColor: "transparent", height: 50, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '20px', fontSize: 20, marginLeft: '10px' }}>🤔</div>
                            <div style={{ marginRight: '10px', fontSize: 20, fontFamily: "DMM", fontStyle: 'bold' }}>{question}</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={sliderContainerStyle}>
                                <div style={sliderStyle}>
                                    {images.map((imageUrl, index) => (
                                        <div key={index} style={slideStyle}>
                                            <img
                                                src={imageUrl}
                                                alt={`uploaded-${index}`}
                                                style={{
                                                    width: '100%',
                                                    height: '350px',
                                                    borderRadius: 10,
                                                    marginTop: 20,
                                                    transform: isSlideshowActive ? 'scale(1)' : 'scale(1.8)',
                                                    transition: 'transform 2s ease-in-out',
                                                    marginLeft: 50,

                                                }}
                                            />
                                            {/* <FontAwesomeIcon
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
                    /> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'transparent', width: '30%', height: '400px', marginLeft: '50px', marginRight: '50px', position: 'relative',display:'flex' ,flexDirection:'column'}}>
                                <p style={{ color: 'grey', fontFamily: 'DMM', textAlign: 'left', fontSize: 25, marginBottom: '5px' }}>
                                    didn't get it,<br />
                                    right?
                                </p>
                                <p style={{ color: '#5813EA', fontFamily: 'DMM', textAlign: 'left', fontSize: 35, marginTop: '5px' ,fontWeight:'500',marginBottom: '5px'}}>
                                    let's connect<br />
                                     live!!! ⚡
                                </p>
                                <p style={{ color: 'grey', fontFamily: 'DMM', textAlign: 'left', fontSize: 15  ,marginBottom: '1px'}}>
                                   Answered by : {author} <br />
                                   Date : {date}
                                </p>
                                
                                
                                




                                <button
                                    style={{
                                        fontFamily: 'DMM',
                                        fontSize: 15,
                                        color: 'white',
                                        backgroundColor: '#4285F4',
                                        borderRadius: 50,
                                        border: 'none',
                                        outline: 'none',
                                        padding: 10,
                                        paddingLeft: 15,
                                        paddingRight: 15,
                                        position: 'absolute',
                                        bottom: 0,
                                        cursor: 'pointer',
                                        marginBottom: '50px'
                                    }}
                                >
                                    Connect
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Question;
