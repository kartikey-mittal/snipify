import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/snipify_ob.png';
import Github from '../assets/github.png'
import { useState, useEffect } from 'react';
import videoFile from '../assets/snipifygfg.mp4'
const TeamWork = () => {
    const navigate = useNavigate();


    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 615);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        // Navigate to the '/test' route with the name as a parameter
        navigate(`/login`);
    };
    const handleClick1 = () => {
        // Navigate to the '/test' route with the name as a parameter
        navigate(`/signup`);
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '15px',
        fontSize: 20,
        paddingHorizontal: 20,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: '#ffcc56',
        color: 'black',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'background 0.3s',
        fontFamily: 'DMM',
    };
    const buttonStyle1 = {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '15px',
        fontSize: 20,
        paddingHorizontal: 20,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: '#ff7b6a',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'background 0.3s',
        fontFamily: 'DMM',
    };
    const gitstyle = {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '15px',
        fontSize: 20,
        paddingHorizontal: 20,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: '#171515',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'background 0.3s',
        fontFamily: 'DMM',
        height: '50px',
        marginTop: 50
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                //justifyContent: 'center',
                height: '120vh', // Set full height of the viewport
                background: `
                    repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
                    repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(66, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
                    #5813ea`,

            }}
        >
            <img src={Logo} alt="Logo" style={{ height: isMobileView ? '110px' : '220px', width: isMobileView ? '220px' : '440px', }} />
            <div style={{ textAlign: 'center', gap: 30, display: 'flex', flexDirection: isMobileView ? 'column' : 'row', marginTop: isMobileView ? '100px' : '0px', }}>
                <button style={buttonStyle} onClick={() => handleClick}>already have account?<br />Login</button>
                <button style={buttonStyle1} onClick={() => handleClick1}>new to snipify?<br />Signup</button>

            </div>

            <div style={{ display: 'flex', flexDirection: isMobileView?'column':'column', marginTop: 10, gap: '0px',justifyContent:'center' ,alignContent:'center'}}>
                <video
                    width= {isMobileView?"300":"500"}
                    height="300"
                    controls
                    poster={Logo} // Optional: Add a poster image
                    style={{ borderRadius: '30px' ,alignSelf:'center'}}
                >
                    
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>



                <div style={{ ...gitstyle, textAlign: 'center', gap: 30, display: 'flex', justifyContent: 'center', }}>
                    <img src={Github} alt="Logo" style={{ height: '50px', width: '50px', alignSelf: 'center' }} />
                    <button
                        style={{
                            margin: '10px',
                            borderRadius: '15px',
                            fontSize: 20,
                            paddingHorizontal: 20,
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            background: '#171515',
                            color: 'white',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                            
                            fontFamily: 'DMM',
                        }}
                        onClick={() => {
                            // Open the GitHub repository URL in a new tab
                            window.open('https://github.com/kartikey-mittal/snipify/', '_blank');
                        }}
                    >
                        Github Repository 🚀
                    </button>

                </div>
            </div>


        </div>
    );
};

export default TeamWork;
