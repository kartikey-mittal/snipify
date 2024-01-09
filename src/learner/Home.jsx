import React, { useState } from 'react';
import Button from '../components/Buttonitis';
import Navbar from '../Navbar';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../Firebase';
import { useNavigate } from 'react-router-dom';



const skillsData = ['C++', 'JavaScript', 'Python', 'React', 'Node.js', "skills", 'Python', 'React',];

const Home = () => {

    const [selectedSkill, setSelectedSkill] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState({ success: false, fileName: '' });
    const [textInput, setTextInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const isContinueButtonDisabled = !textInput.trim();

    // Calculate opacity based on whether there is text in the input
    const continueButtonOpacity = isContinueButtonDisabled ? 0.5 : 1
    const isConnectButtonDisabled = selectedSkill === null;

    // Calculate opacity based on whether a skill is selected
    const connectButtonOpacity = isConnectButtonDisabled ? 0.5 : 1;

    const handleSkillClick = (index) => {
        setSelectedSkill(index);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = Array.from(e.dataTransfer.files);
        await handleFiles(files);
    };

    const handleFileInput = async (e) => {
        const files = Array.from(e.target.files);
        await handleFiles(files);
    };

    const handleFiles = async (files) => {
        setUploadedFiles(files);

        try {
            const storageRef = ref(storage, `images/${files[0].name}`);
            const reader = new FileReader();

            reader.onloadend = async () => {
                if (typeof reader.result === 'string') {
                    await uploadString(storageRef, reader.result, 'data_url');
                    const downloadURL = await getDownloadURL(storageRef);
                    setImageUrl(downloadURL);
                } else {
                    console.error('Invalid dataURL:', reader.result);
                }
            };

            reader.onerror = (error) => {
                console.error('Error reading file:', error);
            };

            reader.readAsDataURL(files[0]);
        } catch (error) {
            console.error('Error uploading image:', error);
        }

        setUploadStatus({ success: true, fileName: files.map((file) => file.name).join(', ') });
    };

    const handleTextInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const navigate = useNavigate();
    const handleConnectButtonClick = async () => {
        try {
            // Get the selected skill as a string
            const selectedSkillString = selectedSkill !== null ? skillsData[selectedSkill] : '';

            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, 'Requests'), {
                Image: imageUrl,
                Question: textInput,
                Skills: selectedSkillString,
                Name: learnerName,
                Status: 0
            });

            console.log('Document written with ID: ', docRef.id);

            // Delay the navigation by 5 seconds
            setTimeout(() => {
                // Redirect to the learner connect page with the document ID
                navigate(`/learner/connect/${docRef.id}`);
            }, 5000);

            // Reset states after successful submission
            setTextInput('');
            setSelectedSkill(null);
            setUploadedFiles([]);
            setUploadStatus({ success: false, fileName: '' });
            setImageUrl('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };


    const homeStyle = {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'red',
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
        alignItems: 'flex-start',
        overflow: 'hidden',
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
    };

    const dropAreaStyle = {
        width: 341,
        height: 151,
        border: isDragOver ? '2px dashed black' : '1px solid transparent',
        borderRadius: 15,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const buttonText = uploadStatus.success
        ? `File uploaded successfully:\n${uploadStatus.fileName}`
        : 'Drag and Drop\nor Click to Upload';



    const bgColor = 'white';
    const textColor = 'black';
    const selectedBgColor = '#4285F4';
    const selectedTextColor = 'white';
    const initialBorderRadius = 50;
    const borderColor = '#7D716A';
    const borderWidth = '0.2px';

    const learnerName = localStorage.getItem('LearnerName') || 'Learner'; // Use 'Learner' as a default name if not found
    return (
        <>
            <Navbar />
            <div style={homeStyle}>
                <div style={contentStyle}>
                    <div style={headingStyle}>⚡⚡Hi {learnerName}, what is your question today?</div>
                    <div style={mainboxStyle}>
                        <div style={{ padding: '10px 20px', textAlign: 'left' }}>
                            <div style={{ display: 'flex' }}>
                                <button
                                    style={{
                                        backgroundColor: '#4285f4',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: 30,
                                        height: 30,
                                        marginRight: 20,
                                        marginTop: 15,
                                        border: 'none',
                                    }}
                                >
                                    1
                                </button>
                                <h3 style={{ fontWeight: 500 }}>What is your Question?</h3>
                            </div>

                            <div
                                style={{
                                    marginTop: 2,
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <label style={{ width: 500, height: 150 }}>
                                    <input
                                        type="text"
                                        placeholder="Type your question here.."
                                        value={textInput}
                                        onChange={handleTextInputChange}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            paddingTop: 5,
                                            paddingBottom: 15,
                                            paddingLeft: 20,
                                            fontWeight: '400',
                                            fontSize: 15,
                                            boxSizing: 'border-box',
                                            backgroundColor: '#F9F9F9',
                                            borderRadius: 15,
                                            border: `2px solid ${borderColor}`,
                                            outline: 'none',
                                            borderWidth: '0.5px',
                                            lineHeight: '1.5',
                                            whiteSpace: 'pre-wrap',
                                        }}
                                        onFocus={(e) => (e.target.style.border = '2px solid #7D716A')}
                                        onBlur={(e) => (e.target.style.border = `2px solid ${borderColor}`)}
                                    />
                                </label>
                                {/* ------------------------drag and  drop ---------------------- */}
                                <div
                                    style={{
                                        width: 341,
                                        height: 151,
                                        border: isDragOver ? '2px dashed black' : '0.5px dashed #7D716A',
                                        borderRadius: 15,
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#F9F9F9',
                                        color: '#7D716A',
                                    }}
                                    onDragEnter={handleDragEnter}
                                    onDragLeave={handleDragLeave}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    {buttonText}
                                    <input
                                        id="fileInput"
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleFileInput}
                                    />
                                </div>
                            </div>

                            <div style={{ marginTop: 20, marginLeft: 40 }}>
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
                                        opacity: continueButtonOpacity,
                                        cursor: isContinueButtonDisabled ? 'not-allowed' : 'pointer',
                                    }}
                                    disabled={isContinueButtonDisabled}
                                >
                                    Continue
                                </button>
                            </div>



                            <div
                                style={{
                                    display: 'flex',
                                    marginTop: 5,
                                }}
                            >
                                <button
                                    style={{
                                        backgroundColor: '#4285F4',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: 30,
                                        height: 30,
                                        marginRight: 20,
                                        marginTop: 15,
                                        border: 'none',
                                    }}
                                >
                                    2
                                </button>
                                <h3 style={{ fontWeight: 500 }}>Add Details</h3>
                            </div>
                            {/* 2nd area starts ------------- */}
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        width: '50%',
                                        gap: 5,
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
                                                border: `2px solid ${borderColor}`,
                                                borderWidth: borderWidth,
                                                fontFamily: 'DMM',
                                                padding: '10px',
                                                outline: 'none',
                                                margin: '5px',
                                                width: 'auto',
                                                whiteSpace: 'nowrap',
                                                opacity: isContinueButtonDisabled ? 0.5 : 1,
                                                cursor: isContinueButtonDisabled ? 'not-allowed' : 'pointer',
                                            }}
                                            disabled={isContinueButtonDisabled}
                                        >
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 2nd area closed ------------- */}
                        </div>

                        <div style={{ marginTop: 20, marginLeft: 40 }}>
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
                                    opacity: connectButtonOpacity,
                                    cursor: isConnectButtonDisabled ? 'not-allowed' : 'pointer',
                                }}
                                disabled={isConnectButtonDisabled}
                                onClick={handleConnectButtonClick}
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

export default Home;
