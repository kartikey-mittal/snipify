import React from "react"
import CustomSwitch from "../components/CustomSwitch";
import RequestCard from "../components/RequestCard";
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
                    <RequestCard/>
                </div>
            </div>
        </div>
    );
};

export default HomeKartikey;
