import React,{useState} from 'react';
import Button from '../components/Buttonitis';

const skillsData = ['C++', 'JavaScript', 'Python', 'React', 'Node.js',"skills",'Python', 'React',];


const HomeAviral = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    
    const selectedBgColor = '#4285F4';
    const selectedTextColor = 'white';
    const initialBorderRadius = 50;
    const borderColor = 'black';
    const borderWidth = '0.2px';
    const bgColor="white";
    const textColor="black";

    const handleSkillClick = (index) => {
        setSelectedSkill(index);
    };

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

    

    const mainboxStyle = {
        width: '90%',
        height: '90%',
        backgroundColor: "#EEF4FE",
        borderRadius: 15,
        margin: 'auto', // Center horizontally
        marginTop: '20px', // Add space from the heading
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
    };

   

    return (
        <div style={homeStyle}>
            <div style={contentStyle}>
                
                <div style={mainboxStyle}>
                    {/* eded */}
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <div style={{width: 394, height: 500, backgroundColor: "red",marginTop:20,borderRadius:20}}></div>
                        <div style={{width: 394, height: 500, backgroundColor: "white",marginTop:20,borderRadius:20}}>
                            <div style={{margin:"30px 30px",textAlign:"left"}}>
                                <h2 style={{fontWeight:500,fontFamily: 'DMM',wordSpacing:1,letterSpacing:1}}>Select your Skill</h2>
                                <p style={{fontFamily: 'DMM'}}>and start shaping lives of coding enthuiast</p>
                            </div>

                            
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    width: '100%',
                                    gap: 10,
                                    marginLeft: 30,
                                }}
                            >
                                {skillsData.map((skill, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSkillClick(index)}
                                        style={{
                                            backgroundColor: selectedSkill === index ? selectedBgColor : bgColor,
                                            color: selectedSkill === index ? selectedTextColor : textColor,
                                            borderRadius: initialBorderRadius,
                                            border: `1px solid ${borderColor}`,
                                            borderWidth: borderWidth,
                                            fontFamily: 'DMM',
                                            padding: '10px',
                                            outline: 'none',
                                            margin: '5px',
                                            minWidth:'100px',
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                            <div style={{ marginTop: 60}}>
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
                                }}
                            >
                                Continue
                            </button>
                        
                        </div>
                        </div>
                    </div>

                    {/* ss */}
                </div>
            </div>
        </div>
    );
};

export default HomeAviral;