import React, { useState } from "react"
import CustomSwitch from "../components/CustomSwitch";
import {ResponsiveContainer,RadialBar,RadialBarChart, Tooltip,Legend} from 'recharts';
import Navbar from "../Navbar";
const LearnerStats = () => {

    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);

    const name= localStorage.getItem("LearnerEmail");
    console.log(name);

    

        const skillsData = ['C++ : 8', 'JavaScript : 9', 'Python : 3', 'React : 6', 'Node.js : 9', 'C# : 8'];
        const [isLeftSectionVisible, setIsLeftSectionVisible] = useState(true);
        const [isSkillClicked, setIsSkillClicked] = useState(false);
        const initialBorderRadius = 50;
        
    const borderColor = 'black';
    const borderWidth = '0.2px';
    const bgColor = "white";
    const textColor = "black";

    const data=[
        {
        "name":"Python",
        "questions":3,
        "fill": "#8884d8"
    },
    {
        "name":"C",
        "questions":10,
        "fill": "#83a6ed"
    },
    {
        "name":"C++",
        "questions":8,
        "fill": "#8dd1e1"
    },
    {
        "name":"C#",
        "questions":4,
        "fill": "#82ca9d"
    },
    {
        "name":"React",
        "questions":6,
        "fill": "#a4de6c"
    },
    {
        "name":"JS",
        "questions":9,
        "fill": "#d0ed57"
    },
]

    const homeStyle = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        background: `
        repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
        repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(66, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
        #5813ea`,
    };

    const contentStyle = {
        width: isMobileView?'100%': '85%',
        height: '85vh',
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
        alignItems:"center",
        Fontfamily:'DMM',
    };

    const skillContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: isLeftSectionVisible ? 10 : 10,
        marginLeft: isLeftSectionVisible ? -30 : -5,
        Fontfamily:'DMM',
        marginTop:50
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
       <>
       <Navbar/>
        <div style={homeStyle}>
            
            <div style={contentStyle}>
                <div style={headingStyle}>
                    <div style={{
                        fontSize: 22,
                        fontFamily: 'DMM',
                        fontWeight: 500,
                        marginLeft: 30,
                        margin: 3
                    }}>⚡⚡Hi Learner Name,see your account!!</div>
                    <CustomSwitch />
                </div>

                <div style={mainboxStyle}>
                <div style={{width:"50%",textAlign:"left",backgroundColor:"#F9F9F9",height:"60vh",paddingLeft:"6%",display:"flex",flexDirection:"column",justifyContent:"",marginLeft:"2%",borderRadius:"5%",border:"1px solid black",}}>

                      <div style={{marginTop:50}}>
                    <p style={{fontSize:25,fontWeight:"400",fontFamily:'DMM'}}>Total Questions Given : 30</p>
                    <p style={{fontSize:25,fontWeight:"400",fontFamily:'DMM'}}>Total Stars Awarded : 30</p>
                    <p style={{fontSize:25,fontWeight:"400",fontFamily:'DMM'}}>Total Domains : 30</p>
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
                                           cursor:"pointer"
                                         }}
                                         
                                       >
                                         {skill}
                                       </button>
                                     ))}
                                   </div>
                </div>
                <div style={{width:"40%",textAlign:"left",height:"60vh",display:"flex",flexDirection:"column",justifyContent:"center",marginRight:"2%",borderRadius:"5%",alignItems:"center",}}>
                <div>
                        <select value={selectedOption} onChange={handleChange} style={{width:200,height:35,marginLeft:30,cursor:"pointer",backgroundColor:"#D9D9D9",color:"#000",borderRadius:20,textAlign:"center",fontSize:20,border: 'none',}}>
                                <option value="">Select an option</option>
                                <option value="3">Past 3 months</option>
                                <option value="1">Past 1 month</option>
                                <option value="6">Past 6 months</option>
                        </select>
                        {/* BFEA7C */}
                 </div>
                <ResponsiveContainer width={'100%'} aspect={0} height='100%'>
                                 <RadialBarChart 
                                width={780} 
                                height={250} 
                                innerRadius="10%" 
                                outerRadius="100%" 
                                data={data} 
                                startAngle={180} 
                                endAngle={0}
                                >
                                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='questions' />
                                <Legend iconSize={10} width={80} height={200} layout='vertical' verticalAlign='middle' align="right" />
                                <Tooltip />
                                </RadialBarChart>
                </ResponsiveContainer>
                    
                </div>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default LearnerStats;