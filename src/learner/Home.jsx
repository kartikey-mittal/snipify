import React, { useState } from 'react';
import Button from '../components/Buttonitis';

const skillsData = ['C++', 'JavaScript', 'Python', 'React', 'Node.js',"skills",'Python', 'React',];

const Home = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState({ success: false, fileName: '' });
    const [textInput, setTextInput] = useState('');

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

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleFileInput = (e) => {
        const files = Array.from(e.target.files);
        handleFiles(files);
    };

    const handleFiles = (files) => {
        setUploadedFiles(files);

        // Handle file upload logic here if needed

        // Set success message and file name
        setUploadStatus({ success: true, fileName: files.map((file) => file.name).join(', ') });
    };

    const handleTextInputChange = (e) => {
        setTextInput(e.target.value);
    };

    const isContinueButtonDisabled = !textInput.trim();
    const isConnectButtonDisabled = selectedSkill === null;


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


    const buttonWidth = '10%';
    const bgColor = 'white';
    const textColor = 'black';
    const bwwidth = 0.2;
    const selectedBgColor = '#4285F4';
    const selectedTextColor = 'white';
    const initialBorderRadius = 50;
    const borderColor = '#7D716A';
    const borderWidth = '0.2px';

    return (
        <div style={homeStyle}>
            <div style={contentStyle}>
                <div style={headingStyle}>⚡⚡Hi Kartikey Mittal, what is your question today?</div>
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
                                    color: "#7D716A"

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
                                }}
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
                                        }}
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
                            }}
                        >
                            Connect
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
