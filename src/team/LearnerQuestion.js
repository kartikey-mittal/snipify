import React from 'react';
import Navbar1 from '../Navbar1';
import { useEffect ,useState} from "react";
import QuestionCard from '../components/QuestionCard';
const LearnerQuestion   = () => {

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


    const homeStyle = {
        height: '100%', // Set height to 80% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
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
        alignItems: 'flex-start', // Align items to the start (top)
        overflow: 'hidden', // Hide overflow content
        backgroundColor: '#F3F6FC'
    };

    const headingStyle = {
        width: '100%',
        backgroundColor: '#FFF4E8',
        fontSize: 25,
        fontFamily: 'DMM',
        fontWeight: 500,
        paddingTop: 5,
        paddingBottom: 5,
        textAlign:"left",
        paddingLeft:isMobileView ? 20 : 80
    };

    const mainboxStyle = {
        width: '90%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 'auto', // Center horizontally
        marginTop: '20px', // Add space from the heading
        border: '1px solid blue', // Add border with blue color
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
    };

    return (
      <>
      <Navbar1 />
        <div style={homeStyle}>
            <div style={contentStyle}>
                <div style={headingStyle}>👀 Something is found !!</div>
                
                <div style={mainboxStyle}>
                <div style={{textAlign:"left",paddingLeft:20}}><p style={{fontSize:"20px",fontWeight:"400",  fontFamily: 'DMM',}}>😃🔥Question Found</p></div>
                    
                       

                       <QuestionCard/>
                   
                </div>


            </div>

        </div>
        </>
    );
};

export default LearnerQuestion   ;

