import React, { useState } from "react"
import CustomSwitch from "../components/CustomSwitch";
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis, Tooltip} from 'recharts';

const LearnerStats = () => {

        const skillsData = ['C++', 'JavaScript', 'Python', 'React', 'Node.js', 'skills', 'Python', 'React'];
        const [isLeftSectionVisible, setIsLeftSectionVisible] = useState(true);
        const [isSkillClicked, setIsSkillClicked] = useState(false);
        const initialBorderRadius = 50;
        
    const borderColor = 'black';
    const borderWidth = '0.2px';
    const bgColor = "white";
    const textColor = "black";

    const bardata=[
        {
        name:"Python",
        questions:3
    },
    {
        name:"C",
        questions:10
    },
    {
        name:"C++",
        questions:8
    },
    {
        name:"C#",
        questions:4
    },
    {
        name:"React",
        questions:6
    },
    {
        name:"JS",
        questions:9
    },
]

    const homeStyle = {
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
    };

    const contentStyle = {
        width: '90%',
        height: '90vh',
        border: '1px solid #ccc',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden', // Hide overflow content
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', // Adjusted this line
        alignItems: 'center', // Adjusted this line
    };

    const mainboxStyle = {
        width: '85%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 'auto',
        marginTop: '20px',
        border: '1px solid blue',
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden', // Hide overflow content
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center"
    };

    const skillContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: isLeftSectionVisible ? 10 : 10,
        marginLeft: isLeftSectionVisible ? -30 : -5,
    };

    const skillButtonStyle = {
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: initialBorderRadius,
        border: `1px solid ${borderColor}`,
        borderWidth: borderWidth,
        fontFamily: 'DMM',
        padding: '10px',
        outline: 'none',
        margin: '5px',
        minWidth: '80px',
        whiteSpace: 'nowrap',
        marginLeft: 40
    };


    
    

    const handleSkillClick = (index) => {
        if (selectedSkill.includes(index)) {
            // If the skill is already selected, remove it
            setSelectedSkill((prevSkills) => prevSkills.filter((skill) => skill !== index));
        } else {
            // If the skill is not selected, add it
            setSelectedSkill((prevSkills) => [...prevSkills, index]);
        }

        // Set isSkillClicked to true when a skill is clicked
        setIsSkillClicked(true);
    };
    const [selectedSkill, setSelectedSkill] = useState([]);

    const [selectedOption, setSelectedOption] = useState('');  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  


    return (
        
        <div style={homeStyle}>
            <div style={contentStyle}>
                <div style={headingStyle}>
                    <div style={{
                        fontSize: 22,
                        fontFamily: 'DMM',
                        fontWeight: 500,
                        marginLeft: 30,
                        margin: 3
                    }}>⚡⚡Hi Aviral Saxena, reshape the community!!</div>
                    <CustomSwitch />
                </div>

                <div style={mainboxStyle}>
                <div style={{width:"40%",textAlign:"left",backgroundColor:"#8883d8",height:"60vh",paddingLeft:"6%",display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:"2%",borderRadius:"5%"}}>
                      <div >
                    <p>Total Questions Answered : 30</p>
                    <p>Total Stars Awarded : 30</p>
                    <p>Total Domains : 30</p>
                    </div> 
                    <div style={skillContainerStyle}>
                                     {skillsData.map((skill, index) => (
                                       <button
                                         key={index}
                                         onClick={() => handleSkillClick(index)}
                                         style={{
                                           ...skillButtonStyle,
                                           backgroundColor: selectedSkill.includes(index) ? '#4285F4' : 'white',
                                           color: selectedSkill.includes(index) ? 'white' : 'black',
                                         }}
                                       >
                                         {skill}
                                       </button>
                                     ))}
                                   </div>
                </div>
                <div style={{width:"40%",textAlign:"left",backgroundColor:"#B784B7",height:"60vh",display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"2%",borderRadius:"5%",alignItems:"center",boxShadow: '10px 8px 10px 2px rgba(0, 0, 0, 0.1)',}}>
                <div>
                        <select value={selectedOption} onChange={handleChange} style={{width:150,height:30,marginLeft:30,cursor:"pointer",backgroundColor:"#BFEA7C",color:"#416D19",borderRadius:20,textAlign:"center",fontSize:14,border: 'none',}}>
                                <option value="">Select an option</option>
                                <option value="3">Past 3 months</option>
                                <option value="1">Past 1 month</option>
                                <option value="6">Past 6 months</option>
                        </select>
                        {/* BFEA7C */}
                 </div>
                <ResponsiveContainer width={'100%'} aspect={1.5} height='80%'>
                        <BarChart data={bardata} width='70%' height="50%">
                                <XAxis dataKey='name' />
                                <Tooltip/>
                                <YAxis />
                                <Bar dataKey="questions" fill="#070F2B"/>
                        </BarChart>
                </ResponsiveContainer>
                    
                </div>
                    
                </div>
            </div>
        </div>
    );
};

export default LearnerStats;
