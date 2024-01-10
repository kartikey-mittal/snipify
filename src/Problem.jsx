import React from "react";
import Navbar from "./Navbar";
import greentick from '../src/assets/greent.png';
import Compiler from "./compiler/Compiler";


const ProblemofDay = () => {



        const homeStyle = {
                height: "100%",
                display: "flex",
                justifyContent: "center",
                padding: 20,
                backgroundColor: "red",
                background: `
      repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(66, 133, 244, 0.8) 50px, rgba(66, 133, 244, 0.8) 51px),
      #5813ea`,
        };

        const contentStyle = {
                width: "95%",
                height: "85vh",
                border: "1px solid #ccc",
                borderRadius: 15,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                overflow: "hidden",
                backgroundColor: "#F3F6FC",
        };

        const headingStyle = {
                width: "100%",
                backgroundColor: "#FFF4E8",
                fontSize: 25,
                fontFamily: "DMM",
                fontWeight: 500,
                paddingTop: 10,
                paddingBottom: 10,
                height: "10vh",
                textAlign: "center",
                paddingLeft: 30,
        };
        const main = {
                width: "100%",
                height: "80%",
                display:"flex",
                justifyContent:"space-evenly",
        };
        const leftmainboxStyle = {
                width: "70%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: 15,

                marginTop: "20px",
                border: "1px solid blue",
                boxShadow: "0px 08px 10px rgba(0, 0, 0, 0.1)",
        };
        const rightmainboxStyle = {
                width: "20%",
                height: "100%",
                
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                
        };
        const rightupper={
            height:"90%",
            backgroundColor: "white",
                borderRadius: 15,
                marginTop: "20px",
                // paddingTop:-20,
                border: "1px solid blue",
                boxShadow: "0px 08px 10px rgba(0, 0, 0, 0.1)",
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
                
        };
        const rightlower={
            height:"10%",
                borderRadius: 15,
                marginTop: "20px",
                border: "1px solid blue",
                boxShadow: "0px 08px 10px rgba(0, 0, 0, 0.1)",
                display:"flex",
                backgroundColor:"#163020",
        };

        return (
                <>
                        <Navbar />
                        <div style={homeStyle}>
                                <div style={contentStyle}>
                                        <div style={headingStyle}>
                                                ⚡⚡Problem of the day
                                                <div style={{fontSize:18,paddingTop:14,paddingLeft:20,textAlign:"left"}}>Q -:    How to Add 3 numbers in C++ ? </div>
                                        </div>
                                        
                                        <div style={main}>
                                                <div
                                                        style={leftmainboxStyle}
                                                >
                                                <Compiler/>
                                                </div>
                                                <div
                                                        style={
                                                                rightmainboxStyle
                                                        }
                                                >
                                                <div style={rightupper}>
                                                    <h2 style={{backgroundColor:"black",color:"white"}}>Test Cases </h2>
                                                    <div style={{textAlign:"left",paddingLeft:10,backgroundColor:"white",color:"black",width:"80%",margin:"auto",borderRadius:10}}>
                                                        <p style={{fontWeight:"600"}}>Example 1:</p>
                                                        <p >Input : 1 2 3</p>
                                                        <p>Output : 6</p>
                                                        <p>Explanation : 1+2+3=6 </p>

                                                    </div>
                                                    <div style={{textAlign:"left",paddingLeft:10,backgroundColor:"white",color:"black",width:"80%",margin:"auto",borderRadius:10}}>
                                                        <p style={{fontWeight:"600",width:'40%'}}>Example 2:</p>
                                                        <p>Input : 4 5 6</p>
                                                        <p>Output : 15</p>
                                                        <p>Explanation : 4+5+6=15 </p>

                                                    </div>
                                                </div>
                                                <div style={rightlower}>
                                                    <div style={{textAlign:"center",margin:"auto",backgroundColor:"darkgreen",padding:4,borderRadius:5,color:"white",fontWeight:"600",cursor:"pointer"}}>ACCEPTED</div>
                                                    <img src={greentick} alt="greentick" style={{height:"60%",position:"relative",right:80,top:10}}/>
                                                </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        );
};

export default ProblemofDay;