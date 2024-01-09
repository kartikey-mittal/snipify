import React from "react"
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase'; 
import { useState } from "react";

const imageurl = 'https://imgs.search.brave.com/_3nOUpPG1H3D6I1X7G04vjqfBw-EmkY41kZ9EPkDIEk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nbG9i/YWwuZGlzY291cnNl/LWNkbi5jb20vZnJl/ZWNvZGVjYW1wL29w/dGltaXplZC80WC8y/LzgvMy8yODMyZjdm/MWNkOTlkNTE2M2Yy/NmU1MGY4OTAwZjVk/Mjg0Mzk2MjcwXzJf/NjYyeDUwMC5wbmc';

const question = 'What is coding?';
const skill = 'JAVA';
const name = 'Lakdhay'
const RequestCard = ({ imageurl, question, skill, name, documentId }) => {
    const navigate = useNavigate();
    const [ignored, setIgnored] = useState(false);
    const handleConnect = async () => {
        // Construct the target route with the dynamic document ID
        const targetRoute = `/skilled/connect/${documentId}`;
        
        // Update the "Status" attribute in the "Requests" collection
        const requestDocRef = doc(db, 'Requests', documentId);
        try {
            await updateDoc(requestDocRef, {
                Status: 1,
            });
            console.log('Status updated successfully');

            // Use navigate directly
            navigate(`/skilled/connect/${documentId}`);
        } catch (error) {
            console.error('Error updating status:', error);
        }

        // Navigate to the target route
        navigate(targetRoute);
    };

    const handleIgnore = () => {
        // Set the ignored state to true
        setIgnored(true);
    };

    // Render the component only if it is not ignored
    if (ignored) {
        return null;
    }

    return (
        <section style={{ margin: '20px', backgroundColor: '#F9F9F9', display: 'flex', }}>
            <div style={{ display: 'flex', border: 'solid .1px', borderRadius: '20px', borderBlockColor: '#9a7d7d', backgroundColor: 'transparent', width: '100%' }}>
                <div style={{ padding: '1rem', width: '30%', height: '25%', }}>
                    <img style={{ height: '25vh', width: '100%', objectFit: 'cover', borderRadius: '9px' }} src={imageurl} alt="An image" />
                </div>

                <div style={{ padding: '10px', color: 'black', display: 'grid', gridTemplateRows: '1fr auto', backgroundColor: 'transparent', width: '100%' }}>

                    <p style={{ backgroundColor: 'transparent', textAlign: 'start', fontFamily: 'DMM', alignItems: 'center', fontSize: '120%', letterSpacing: '0.8px', wordSpacing: '1px', }}>
                        {question}
                    </p>


                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignItems: 'start' }}>
                        <p style={{ color: '#9A7D7D', fontFamily: 'DMM' }}>{name}</p>
                        <button
                            style={{
                                backgroundColor: 'white',
                                color: '#4285F4',
                                borderRadius: 100,
                                border: '1px solid #7D716A', // Set border to solid black
                                fontFamily: 'DMM',
                                padding: '8px 15px',
                                outline: 'none',
                                width: 'auto',

                            }}
                        >
                            {skill}
                        </button>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', paddingRight: 30 }}>
                    <button
                    onClick={handleIgnore} // Call the handleIgnore function on button click
                    style={{
                        backgroundColor: '#EA775C',
                        color: '#fff',
                        borderRadius: 100,
                        border: '#7D716A',
                        borderWidth: '0.2px',
                        fontFamily: 'DMM',
                        padding: '10px',
                        outline: 'none',
                        width: 'auto',
                        paddingLeft: 20,
                        paddingRight: 20,
                        fontSize: 15,
                        cursor: 'pointer'
                    }}  >
                    Ignore
                </button>

                        <button
                            onClick={handleConnect} // Call the handleConnect function on button click
                            style={{
                                backgroundColor: '#4285F4',
                                color: '#fff',
                                borderRadius: 100,
                                border: '#7D716A',
                                borderWidth: '0.2px',
                                fontFamily: 'DMM',
                                padding: '10px',
                                outline: 'none',
                                width: 'auto',
                                paddingLeft: 20,
                                paddingRight: 20,
                                marginLeft: 10,
                                fontSize: 15,
                                cursor: 'pointer'
                            }}  >
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default RequestCard;
