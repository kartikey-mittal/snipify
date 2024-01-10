import React, { useState, useEffect } from 'react';
import Skills from '../assets/skills.png'
import Navbar from '../Navbar';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { collection } from 'firebase/firestore';
import { db } from '../Firebase'
const skillsData = ['C++', 'JavaScript', 'Python', 'React', 'Node.js', 'skills', 'Python', 'React'];
const professionData = ['Student', 'Working Professional', 'Freelancer'];

const Profile = () => {
    const [selectedSkillsNames, setSelectedSkillsNames] = useState([]);
    const { id } = useParams();
    const [step, setStep] = useState(1);

    const [selectedSkill, setSelectedSkill] = useState([]);
    const [selectedProfession, setSelectedProfession] = useState(null);
    const [githubProfile, setGithubProfile] = useState('');
    const [gfgProfile, setGfgProfile] = useState('');

    useEffect(() => {
        // This effect will run when selectedSkill or step changes
        if (step === 4) {
            // Only log the data when transitioning from step 3 to step 4
            const selectedSkills = selectedSkill.map((index) => skillsData[index]);
            setSelectedSkillsNames(selectedSkills);

            console.log('Selected Skills:', selectedSkills);
            console.log('Selected Profession:', selectedProfession);
            console.log('GitHub Profile:', githubProfile);
            console.log('GFG Profile:', gfgProfile);

            const skilledCollectionRef = collection(db, 'Skilled');
            const skilledDocRef = doc(skilledCollectionRef, id);

            (async () => {
                // Get the existing data in the document
                const docSnapshot = await getDoc(skilledDocRef);
                const existingData = docSnapshot.data();

                // Update only the fields that are changing
                const updatedData = {
                    ...existingData,
                    selectedSkills: selectedSkills || existingData.selectedSkills,
                    selectedProfession: selectedProfession || existingData.selectedProfession,
                    githubProfile: githubProfile || existingData.githubProfile,
                    gfgProfile: gfgProfile || existingData.gfgProfile,
                };

                // Set the updated data to Firestore
                await setDoc(skilledDocRef, updatedData);

                // Store data in localStorage
                localStorage.setItem('SkilledSkillsArray', JSON.stringify(updatedData.selectedSkills || []));
                localStorage.setItem('SkilledProfession', updatedData.selectedProfession || '');

                // Show alert after setting data in Firestore
                alert('Data saved to Firestore!');
            })();
        }
    }, [selectedSkill, step, selectedProfession, githubProfile, gfgProfile]);



    const handleContinue = () => {
        // Change this part of the handleContinue function
        if (step === 1 && selectedProfession !== null) {
            // If in the profession section and a profession is selected, proceed to the next step
            setStep((prevStep) => prevStep + 1);
        } else if (step === 2 && githubProfile.trim() !== '' && gfgProfile.trim() !== '') {
            // If in the profile section and both GitHub and GFG profiles are provided, proceed to the next step
            setStep((prevStep) => prevStep + 1);
        } else if (step === 3 && selectedSkill.length > 0) {
            // If in the skills section and at least one skill is selected, proceed to the next step
            setStep((prevStep) => prevStep + 1);
        }
    };
<<<<<<< HEAD
    // const handleback = () => {

    //     setStep((prevStep) => prevStep - 1);
    // };
=======
    const handleback = () => {
        setStep((prevStep) => prevStep - 1);
    };
>>>>>>> 03b38548e8ecd3ea128302fa5c6e4c6a5a1750ae


    //  const [selectedSkill, setSelectedSkill] = useState(null);
    const [isSkillClicked, setIsSkillClicked] = useState(false);

    const selectedBgColor = '#4285F4';
    const selectedTextColor = 'white';
    const initialBorderRadius = 50;
    const borderColor = 'black';
    const borderWidth = '0.2px';
    const bgColor = "white";
    const textColor = "black";

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

    const handleProfessionClick = (index) => {
        // Set isSkillClicked to false when a profession is selected
        setIsSkillClicked(false);

        setSelectedProfession(professionData[index]);
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
        width: '85%',
        height: '85vh',
        border: '1px solid #ccc',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        overflow: 'hidden',
        backgroundColor: '#F3F6FC'
    };

    const mainboxStyle = {
        width: '90%',
        height: '90%',
        backgroundColor: "#EEF4FE",
        borderRadius: 15,
        margin: 'auto',
        marginTop: '20px',
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
    };

    const skillContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: 10,
        marginLeft: -5, // Adjusted to remove the gap
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
        minWidth: '100px',
        whiteSpace: 'nowrap',
        marginLeft: 40
    };



    const continueButtonStyle = {
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
        opacity: (step === 1 && selectedProfession !== null) || (isSkillClicked && selectedSkill.length > 0) ? 1 : 0.5,
        cursor: (step === 1 && selectedProfession !== null) || (isSkillClicked && selectedSkill.length > 0) ? 'pointer' : 'not-allowed',
    };



    const styles = {
        emailLabel: {

            color: '#7D716A',
            fontFamily: 'DMM',
            fontSize: 15,
            marginTop: 50,
            fontWeight: 500
        },
        passwordLabel: {

            color: '#7D716A',
            fontFamily: 'DMM',
            fontSize: 15,
            marginTop: 20,
            fontWeight: 500
        },
        inputField: {
            borderRadius: 10,
            margin: 5,
            padding: '10px',
            width: '20vw',
            borderColor: '#7D716A',
            borderWidth: '0.5px',
            fontFamily: 'DMM',
        },
    };

    return (
        <>
            <Navbar />
            <div style={homeStyle}>
                <div style={contentStyle}>
                    <div style={mainboxStyle}>
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <div style={{ width: '45%', height: '500px', backgroundColor: "#EEF4FE", marginTop: '20px', borderRadius: '20px', justifyContent: 'center', alignContent: 'center', alignItems: 'center', display: 'flex' }}>

                                <img src={Skills} alt="Logo" style={{ height: '80%', width: '80 %', }} /> {/* Stretch the SVG logo */}
                            </div>


                            {/* Skills */}

                            {step >= 3 && (
                                <>
                                    <div style={{ width: '40%', height: '500px', backgroundColor: "white", marginTop: '20px', borderRadius: '20px' }}>
                                        <div style={{ margin: "30px", textAlign: "left" }}>
                                            <h2 style={{ fontWeight: 500, fontFamily: 'DMM', wordSpacing: '1px', letterSpacing: '1px', lineHeight: '1.2', color: '1E1E1E' }}>Select your Skill</h2>
                                            <p style={{ fontFamily: 'DMM', color: '#7D716A', lineHeight: '1' }}>and start shaping lives of coding enthusiasts</p>
                                        </div>
                                        <div style={skillContainerStyle}>
                                            {skillsData.map((skill, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleSkillClick(index)}
                                                    style={{
                                                        ...skillButtonStyle,
                                                        backgroundColor: selectedSkill.includes(index) ? selectedBgColor : bgColor,
                                                        color: selectedSkill.includes(index) ? selectedTextColor : textColor,
                                                    }}
                                                >
                                                    {skill}
                                                </button>
                                            ))}
                                        </div>
                                        <div style={{ marginTop: '60px' }}>
                                            <button
                                                onClick={handleContinue}
                                                style={continueButtonStyle}
                                                disabled={!isSkillClicked}
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {/* ************************************************* */}

                            {/* PROFESSION */}
                            {step === 1 && (
                                <>
                                    <div style={{ width: '40%', height: '500px', backgroundColor: "white", marginTop: '20px', borderRadius: '20px' }}>
                                        <div style={{ margin: "30px", textAlign: "left" }}>
                                            <h2 style={{ fontWeight: 500, fontFamily: 'DMM', wordSpacing: '1px', letterSpacing: '1px', lineHeight: '1.2', color: '1E1E1E' }}>Profession</h2>
                                            <p style={{ fontFamily: 'DMM', color: '#7D716A', lineHeight: '1' }}>What is your Profession ?</p>
                                        </div>
                                        <div style={skillContainerStyle}>
                                            {professionData.map((profession, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => {
                                                        setSelectedProfession(profession);
                                                        handleSkillClick(index);
                                                    }}
                                                    style={{
                                                        ...skillButtonStyle,
                                                        backgroundColor: selectedSkill.includes(index) ? selectedBgColor : bgColor,
                                                        color: selectedSkill.includes(index) ? selectedTextColor : textColor,
                                                    }}
                                                >
                                                    {profession}
                                                </button>
                                            ))}
                                        </div>
                                        <div style={{ marginTop: '140px' }}>
                                            <button
                                                style={continueButtonStyle}
                                                disabled={!isSkillClicked}
                                                onClick={handleContinue}
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}


                            {/* ************************************************* */}





                            {/* PROFILE */}
                            {step == 2 && (
                                <>
                                    <div style={{ width: '40%', height: '500px', backgroundColor: "white", marginTop: '20px', borderRadius: '20px' }}>
                                        <div style={{ margin: "30px", textAlign: "left" }}>
                                            <h2 style={{ fontWeight: 500, fontFamily: 'DMM', wordSpacing: '1px', letterSpacing: '1px', lineHeight: '1.2', color: '1E1E1E' }}>Profile</h2>
                                            <p style={{ fontFamily: 'DMM', color: '#7D716A', lineHeight: '1' }}>and start helping other's with your skills</p>
                                        </div>
                                        <div style={{ textAlign: 'left', paddingLeft: 30 }}>
                                            <div style={styles.emailLabel}>Github Profile Link *</div>
                                            <input
                                                type="text"
                                                required
                                                style={{ ...styles.inputField, marginTop: 10 }}
                                                placeholder="Github Profile Link"
                                                value={githubProfile}
                                                onChange={(e) => setGithubProfile(e.target.value)}
                                            />

                                            <div style={styles.passwordLabel}>GFG Profile </div>
                                            <input
                                                type="text"
                                                style={{ ...styles.inputField, marginTop: 10 }}
                                                placeholder="GFG Profile (Optional)"
                                                value={gfgProfile}
                                                onChange={(e) => setGfgProfile(e.target.value)}
                                            />
                                        </div>
                                        <div style={{ marginTop: '60px' }}>
                                            <button
                                                onClick={handleContinue}
                                                style={continueButtonStyle}
                                                disabled={!isSkillClicked}
                                            >
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}


                            {/* ************************************************* */}



                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
