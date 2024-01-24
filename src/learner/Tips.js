import React, { useEffect, useState } from 'react';
import Navbar1 from '../Navbar1';


import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';

const Tips = () => {

    const [intervalId] = useState(null);
    const [question, setQuestion] = useState('');
    const [author, setAuthor] = useState('');
    const [date] = useState('latest');
    const [requestData, setRequestData] = useState({});
    const [userRating, setUserRating] = useState(0);

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);

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
                const requestRef = doc(db, 'Tips', 'Today');
                const docSnapshot = await getDoc(requestRef);

                if (docSnapshot.exists()) {
                    const data = docSnapshot.data();
                    const requestData = docSnapshot.data();
                    console.log('Request Data:', requestData);
                    console.log(requestData);
                    const screenshots = requestData?.Screenshots || [];
                    const question = requestData?.Question || '';
                    const author = requestData?.Name || '';
                    setRequestData(data);
                    // const createdAt = requestData?.createdAt.toDate();
                    // setdate(createdAt);
                    setAuthor(author);
                    setQuestion(question);
                    console.log('Screenshots:', screenshots);

                    // setImages(screenshots);
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
    }, [intervalId]);




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
        height: isMobileView ? '85vh' : '85vh',
        border: '1px solid #ccc',
        borderRadius: 15,
        display: 'flex',
        flexDirection:  'column',
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
        marginBottom:isMobileView?'20px':0
    };

    const sliderContainerStyle = {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'flex-start',
        width:isMobileView?"90%": '100%',
        height:isMobileView?'30vh' :'60vh',
        overflowX: 'scroll',
        overflowY: 'hidden',
        alignItems:"flex-start",
        alignSelf:"center",
        marginTop:isMobileView?0:20
    };


  
    // const slideStyle = {
    //     flex: '0 0 auto',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     marginTop: "20px",
    //     width: '85%',
    //     height: '100%',
    //     backgroundColor: 'white',
    //     border: "none",
    //     outline: "none",
    //     borderRadius: 50,
    //     boxShadow: '5px 10px 15px  rgba(0, 0, 0, 0.4)',
    // };
    const iframeStyle = {
        width:isMobileView?"100%": '80%',
        height: '350px',
        borderRadius: 30,
        marginLeft:isMobileView?"0px":"60px",
        marginTop:isMobileView?"40px":"30px",
        boxShadow: '5px 10px 15px  rgba(0, 0, 0, 0.4)',

        // Fit: 'cover', object// Make the video cover the entire container
    };

    const handleStarClick = (rating) => {
        // Update the user's rating when a star is clicked
        setUserRating(rating);
        // You can also send this rating to your backend or perform other actions as needed
    };


    return (
        <>
            <Navbar1 />
            <div style={homeStyle}>
                <div style={contentStyle}>
                    <div style={headingStyle}>🔥🔥Tips!!</div>
                    <div style={mainboxStyle}>
                    <div style={{ backgroundColor: 'transparent', height: 50,  display: 'flex',flexDirection:isMobileView?'row': 'row', alignItems: 'center' }}>
                            <div style={{ marginRight: '20px', fontSize: 20, marginLeft: '10px' }}>💡</div>
                            <div style={{ marginRight: '10px', fontSize: 20, fontFamily: "DMM", fontStyle: 'bold',marginTop:30 }}>{question}</div>
                        </div>
                        <div style={{ display: 'flex',flexDirection:isMobileView?'column': 'row', justifyContent: 'center', alignItems:'flex-start' }}>
                            <div style={sliderContainerStyle}>

                                {requestData.Video && (
                                    <iframe
                                        style={iframeStyle}
                                        src={requestData.Video}
                                        title="Embedded Video"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                )}

                            </div>
                            <div style={{ backgroundColor: 'transparent', width: '30%', height: '400px', marginLeft: '50px', marginRight: '50px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                            <p style={{ color: 'grey', fontFamily: 'DMM', textAlign: 'left', fontSize: 25, marginBottom:isMobileView?'0px': '5px',display:isMobileView?'none':'block' }}>
                                    rate this
                                </p>
                                <p style={{ color: '#5813EA', fontFamily: 'DMM', textAlign: 'left', fontSize: 35, marginTop:isMobileView?'0px': '5px', fontWeight: '500', marginBottom: '5px' }}>
                                    {/* rate this<br /> */}
                                    codebyte!!! ⚡
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span
                                            key={star}
                                            onClick={() => handleStarClick(star)}
                                            style={{
                                                cursor: 'pointer',
                                                fontSize: 30,
                                                color: star <= userRating ? '#FFD700' : 'grey', // Change color for rated stars
                                                marginRight: '5px',
                                            }}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p style={{ color: 'grey', fontFamily: 'DMM', textAlign: 'left', fontSize: 15, marginBottom: '1px' }}>
                                    Answered by: {author} <br />
                                    Date: {date}
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
                                        marginBottom:isMobileView?'100px': '50px',
                                        marginLeft:isMobileView?"85%":0
                                    }}
                                >
                                    Rate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );

};

export default Tips;