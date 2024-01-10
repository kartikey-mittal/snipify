import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { onSnapshot, doc, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // 

import gif from '../assets/video.gif';
// import HomeSkilled from './HomeSkilled';

const HomeSkilledConnect = () => {
    const { docId } = useParams();
    const [status, setStatus] = useState(null);
    const navigate = useNavigate(); // initialize useNavigate
    // const [status, setStatus] = useState(null);

    // const animationStyle = {
    //     width: '200px',
    //     height: '200px',
    //     margin: 'auto',
    //     marginTop: '20px',
    // };

    const homeStyle = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'red',
        background: `
    repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(242, 242, 242, 0.8) 50px, rgba(242, 242, 242, 0.8) 51px),
    repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(242, 242, 242, 0.8) 50px, rgba(242, 242, 242, 0.8)51px),
    #ff7b6a`,

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
        width: '90%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 'auto',
        marginTop: '20px',
        border: '1px solid blue',
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
    };



    // const bgColor = 'white';
    // const textColor = 'black';
    // const selectedBgColor = '#4285F4';
    // const selectedTextColor = 'white';
    // const initialBorderRadius = 50;
    // const borderColor = '#7D716A';
    // const borderWidth = '0.2px';
    const gifStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        margin: 'auto',
        marginTop: '20px',
    };


    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const requestRef = doc(db, 'Requests', docId);

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
    }, [docId]);

    useEffect(() => {
        if (status === 2) {
            alert('Connection found');
            navigate(`/room/${docId}`);
        }
    }, [status, docId, navigate]);

    return (
        <>
            <Navbar />
            <div style={homeStyle}>
                <div style={contentStyle}>
                    <div style={headingStyle}>Connected 🧑‍💻   |   {docId} </div>
                    <div style={mainboxStyle}>
                        <img src={gif} alt="Your GIF" style={gifStyle} />
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeSkilledConnect;
