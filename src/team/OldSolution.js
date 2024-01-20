import React from 'react';
import Navbar from '../Navbar';
import { useEffect ,useState} from "react";

const OldSolution   = () => {

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

    const images = ['https://www.shutterstock.com/image-vector/realistic-green-blackboard-wooden-frame-260nw-1957522249.jpg', 'https://www.shutterstock.com/image-vector/realistic-green-blackboard-wooden-frame-260nw-1957522249.jpg','https://www.shutterstock.com/image-vector/realistic-green-blackboard-wooden-frame-260nw-1957522249.jpg'];

    return (
      <>
      <Navbar />
        <div style={homeStyle}>
            <div style={contentStyle}>
                <div style={headingStyle}>👀 Something is found !!</div>
                
                <div style={mainboxStyle}>
                <div style={{textAlign:"left",paddingLeft:40}}><p style={{fontSize:"20px",fontWeight:"600"}}>🔍 Getting error in useEffect...not executing properly. Please help.</p>
                </div>
                <section style={{ margin: '20px', backgroundColor: '#F9F9F9', display: 'flex', height: '76%' }}>
                        {/* left section */}
    <div style={{ display: 'flex', border: 'solid .1px', borderRadius: '20px', borderBlockColor: '#9a7d7d', backgroundColor: 
    'transparent', width: '100%', height: '100%', flexDirection: isMobileView ? "column" : "column", overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
        {/* set image */}
        
        <div style={{ display: "flex", justifyContent: "space-around", flexDirection: isMobileView ? 'column' : 'column', marginTop: isMobileView ? 0 : 10, alignItems:isMobileView ? 'center':'left', marginLeft: isMobileView ? 0 : 50 }}>

            {images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`uploaded-${index}`} style={{ width: isMobileView ? '100%' : 'auto', maxWidth: isMobileView ? '220px' : '430px', height: 'auto', borderRadius: 10, resizeMode: "cover", paddingTop: isMobileView ? 20 : 20 }} />
            ))}
            
        </div>

        
        
    </div>

    
</section>

                    <div style={{  marginLeft: 0,marginTop:isMobileView?-14: -10 }}>
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
                                    cursor:"pointer",
                                    
                                    
                                }}
                                
                            >
                                Connect
                            </button>
                        </div>
                </div>


            </div>

        </div>
        </>
    );
};

export default OldSolution   ;

