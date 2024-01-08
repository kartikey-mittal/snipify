import React from "react"
import CustomSwitch from "../components/CustomSwitch";

const HomeKartikey = () => {
    const homeStyle = {
        height: '80vh',
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
        width: '90%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 'auto',
        marginTop: '20px',
        border: '1px solid blue',
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden', // Hide overflow content
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
                    <div style={{ backgroundColor: "white", height: 50, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '20px', fontSize: 20, marginLeft: '10px' }}>⌛</div>
                        <div style={{ marginRight: '10px', fontSize: 20, fontFamily: "DMM", fontStyle: 'bold' }}>Requests</div>
                    </div>
                    <section style={{ margin: '20px', backgroundColor: '#F9F9F9', display: 'flex',}}>
                        <div style={{ display: 'flex', border: 'solid .1px', borderRadius: '20px', borderBlockColor: '#9a7d7d', backgroundColor: 'transparent', width: '100%' }}>
                            <div style={{ padding: '1rem', width: '30%', height: '25%', }}>
                                <img style={{ height: '25vh', width: '100%', objectFit: 'cover', borderRadius: '9px' }} src="https://imgs.search.brave.com/_3nOUpPG1H3D6I1X7G04vjqfBw-EmkY41kZ9EPkDIEk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nbG9i/YWwuZGlzY291cnNl/LWNkbi5jb20vZnJl/ZWNvZGVjYW1wL29w/dGltaXplZC80WC8y/LzgvMy8yODMyZjdm/MWNkOTlkNTE2M2Yy/NmU1MGY4OTAwZjVk/Mjg0Mzk2MjcwXzJf/NjYyeDUwMC5wbmc" alt="An image" />
                            </div>

                            <div style={{ padding: '10px', color: 'black', display: 'grid', gridTemplateRows: '1fr auto', backgroundColor: 'transparent', width: '100%' }}>

                                <p style={{ backgroundColor: 'transparent', textAlign: 'start', fontFamily: 'DMM', alignItems: 'center', fontSize: '100%' ,letterSpacing: '0.8px',wordSpacing: '1px',}}>
                                    Getting error in useEffect...not executing properly. Please help.Getting error in useEffect...not executing properly. Please help.Getting error in useEffect...not executing properly. Please help.
                                    ferfnrejkn
                                </p>


                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignItems: 'start' }}>
                                    <p style={{ color: '#9A7D7D', fontFamily: 'DMM' }}>Lakshay Jain</p>
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
                                        React
                                    </button>

                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' ,paddingRight:30}}>
                                    <button
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
                                            cursor:'pointer'
                                        }}  >
                                        Ignore  </button>

                                    <button
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
                                            cursor:'pointer'
                                        }}  >
                                        Connect  </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomeKartikey;
