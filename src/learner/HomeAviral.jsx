import React from 'react';
import Button from '../components/Buttonitis';

const HomeAviral = () => {
    const homeStyle = {
        height: '80vh', // Set height to 80% of the viewport height
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
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
        backgroundColor:'#F3F6FC'
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
        margin: 'auto', // Center horizontally
        marginTop: '20px', // Add space from the heading
        border: '1px solid blue', // Add border with blue color
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
    };

    const buttonWidth = '10%';
    const bgColor="white";
    const textColor="black";
    const bwwidth=0.2;

    return (
        <div style={homeStyle}>
            <div style={contentStyle}>
                <div style={headingStyle}>⚡⚡Hi Kartikey Mittal, what is your question today?</div>
                <div style={mainboxStyle}>
                    <div style={{padding:'10px 20px'  ,textAlign:"left"}}>
                        <div style={{display:"flex"}}>
                    <button style={{backgroundColor:"#4285f4",borderRadius:"50%",width:30,height:30 ,marginRight:20,marginTop:15 ,border:"none"}}>1</button>
                    <h3 style={{fontWeight:500}}>What is your Question?</h3>
                    </div>
             
                    <div style={{marginTop:2,display:"flex",justifyContent:"space-around"}}>
                    <label style={{ width: 500, height: 150, backgroundColor: "#F2F1EB" }}>
                        <input
                           
                            type="text"
                            placeholder="Type your question here"
                            style={{ width: "100%", height: "100%", paddingLeft: 20, fontWeight: "400",fontSize:15, boxSizing: "border-box",backgroundColor: "#F2F1EB",borderRadius:5 }}
                        />
                        </label>
                        <label style={{ width: 341, height: 151, backgroundColor: "#F2F1EB" }}>
                        <input
                            type="text"
                            placeholder="Drag and Drop images or upload"
                            style={{ width: "100%", height: "100%", paddingLeft: 20, fontWeight: "400",fontSize:15, boxSizing: "border-box",backgroundColor: "#F2F1EB",borderRadius:5 }}
                        />
                        </label>
                    </div>
                    
                    <div style={{marginTop:20,marginLeft:40}}>
                    <Button label="Continue"  />
                    </div>
                    <div style={{display:"flex",marginTop:5}}>
                    <button style={{backgroundColor:"#4285F4",borderRadius:"50%",width:30,height:30 ,marginRight:20,marginTop:15,border:"none"}}>2</button>
                    <h3 style={{fontWeight:500}}>Add Details</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: "50%", gap: 5 }}>
                    
                    <Button label="C++" bgColor={bgColor} bwwidth={bwwidth} textColor={textColor} style={{ width: buttonWidth }} />
                    <Button label="C++" bgColor={bgColor} bwwidth={bwwidth} textColor={textColor} style={{ width: buttonWidth }} />
                    <Button label="C++" bgColor={bgColor} bwwidth={bwwidth} textColor={textColor} style={{ width: buttonWidth }} />
                    <Button label="C++" bgColor={bgColor} bwwidth={bwwidth} textColor={textColor} style={{ width: buttonWidth }} />
                    <Button label="C++" bgColor={bgColor} bwwidth={bwwidth} textColor={textColor} style={{ width: buttonWidth }} />
                    
                    
                </div>

                </div>
                <div style={{position:"absolute",left:220,bottom:60}}>
                <Button label="Connect"/>
            
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAviral;
