import React from "react"
import { useEffect ,useState} from "react";
import CustomSwitch from "../components/CustomSwitch";
import RequestCard from "../components/RequestCard";
import Navbar from "../Navbar";
import { collection, onSnapshot } from 'firebase/firestore';
import { db, } from '../Firebase';
import gif from '../assets/connection.gif';


const HomeAviral = () => {
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


    const gifStyle = {
        marginTop:50,
        width: '50%',
        height: '50%',
        objectFit: 'cover',
    };

    const homeStyle = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        background: `
    repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(242, 242, 242, 0.8) 50px, rgba(242, 242, 242, 0.8) 51px),
    repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(242, 242, 242, 0.8) 50px, rgba(242, 242, 242, 0.8)51px),
    #ff7b6a  `,
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
        width: '90%',
        height: '85%',
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 'auto',
        marginTop: '20px',
        border: '1px solid blue',
        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.1)',
        overflowY: 'auto',  // Enable vertical scrolling
        scrollbarWidth: 'none',  // Hide scrollbar in Firefox
        msOverflowStyle: 'none',
       
      };
      
      
      
    
    const skilledName = localStorage.getItem('SkilledName');

    // const skilledSkillsArray = JSON.parse(localStorage.getItem('SkilledSkillsArray')) || [];

    // Now 'skilledSkillsArray' contains the array of skills

    // console.log('Skilled Skills Array:', skilledSkillsArray);
    const [requestData, setRequestData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = () => {
            const skilledSkillsArray = JSON.parse(localStorage.getItem('SkilledSkillsArray')) || [];
    
            const unsubscribe = onSnapshot(collection(db, 'Requests'), (querySnapshot) => {
                const filteredData = [];
    
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
    
                    // Check if the document's Skills attribute matches any of the skilledSkillsArray
                    if (skilledSkillsArray.includes(data.Skills)) {
                        filteredData.push({
                            id: doc.id,
                            imageurl: data.Image,
                            question: data.Question,
                            skill: data.Skills,
                            name: data.Name,
                            status: data.Status,
                        });
                    }
                });
    
                setRequestData(filteredData);
                setLoading(false);
            });
    
            return () => unsubscribe(); // Unsubscribe when the component unmounts
        };
    
        fetchData();
    }, []); // Empty dependency array since skilledSkillsArray is now initialized inside useEffect
    

    


    return (
        <>
            <Navbar />
            <div style={homeStyle}>
                <div style={contentStyle}>
                    <div style={headingStyle}>
                        <div style={{
                            fontSize: isMobileView? 18:22,
                            fontFamily: 'DMM',
                            fontWeight: 500,
                            marginLeft: 30,
                            margin: 3
                        }}>⚡⚡Hi {skilledName}, reshape the community!!</div>
                        <CustomSwitch />
                    </div>

                    <div style={mainboxStyle}>
                        <div style={{ backgroundColor: "white", height: 50, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '20px', fontSize: 20, marginLeft: '10px' }}>⌛</div>
                            <div style={{ marginRight: '10px', fontSize: 20, fontFamily: "DMM", fontStyle: 'bold' }}>Requests</div>
                        </div>


                        {loading ? (
                            // Display the gif while loading
                            <img src={gif} alt="Loading gif" style={gifStyle} />
                        ) : requestData.length === 0 ? (
                            // Display the gif if no data is available
                            <img src={gif} alt="No data gif" style={gifStyle} />
                        ) : (
                            // Render request cards if there is data
                            requestData.map((data, index) => (
                                <RequestCard
                                    key={index}
                                    imageurl={data.imageurl}
                                    question={data.question}
                                    skill={data.skill}
                                    name={data.name}
                                    documentId={data.id}
                                />
                            ))
                        )}



                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeAviral;
