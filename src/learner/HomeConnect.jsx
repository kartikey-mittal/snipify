import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import { onSnapshot, doc, getFirestore } from 'firebase/firestore';
import gif from '../assets/connection.gif';

const HomeConnect = () => {
    const { documentId } = useParams();
    const [status, setStatus] = useState(null);
    const navigate = useNavigate();

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

    useEffect(() => {
        if (status === 1) {
            // Navigate to the room page with the documentId
            navigate(`/learner/room/${documentId}`);
        }
    }, [status, documentId, navigate]);

    return (
        <>
            <Navbar />
            <div style={homeStyle}>
                <div style={contentStyle}>
                    <div style={headingStyle}>Searching 🔎..... </div>
                    <div style={mainboxStyle}>
                        <img src={gif} alt="Your GIF" style={gifStyle} />
                        <div>
                            <p>Document ID from URL params: {documentId}</p>
                            {/* Use documentId as needed in your component */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeConnect;
