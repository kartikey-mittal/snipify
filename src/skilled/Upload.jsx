// Import necessary dependencies
import React, { useEffect, useState } from "react";
//import CustomSwitch from "../components/CustomSwitch";
import Navbar from "../Navbar";
import { doc,updateDoc} from 'firebase/firestore';
import { db, storage } from '../Firebase';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { useNavigate, useParams } from "react-router-dom";

// Main component
const Upload = () => {
    const {id} =useParams();
    const navigate = useNavigate();
  // State variables
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState({ success: false, fileName: '' });

  // Button text based on upload status
  const buttonText = uploadStatus.success
    ? `File uploaded successfully:\n${uploadStatus.fileName}`
    : 'Drag and Drop\nor Click to Upload';

  // Handle window resize
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

  // Handle drag enter
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  // Handle drag leave
  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  // Handle file drop
  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    await handleFiles(files);
  };

  // Handle file input change
  const handleFileInput = async (e) => {
    const files = Array.from(e.target.files);
    await handleFiles(files);
  };

  // Handle file upload
  const handleFiles = async (files) => {
    // Set a limit of 3 images
    if (uploadedFiles.length >= 3) {
      console.log('You can only upload up to 3 images.');
      return;
    }
  
    try {
      if (files.length === 0) {
        console.error('No files to upload.');
        return;
      }
  
      const storageRef = ref(storage, `images/${files[0].name}`);
      const reader = new FileReader();
  
      // Read file as data URL
      reader.onloadend = async () => {
        if (typeof reader.result === 'string') {
          // Upload data URL to storage
          await uploadString(storageRef, reader.result, 'data_url');
  
          // Get download URL
          const downloadURL = await getDownloadURL(storageRef);
          console.log('Image URL:', downloadURL);
  
          // Update state with new image
          setUploadedFiles((prevFiles) => [...prevFiles, { url: downloadURL }]);
        } else {
          console.error('Invalid dataURL:', reader.result);
        }
      };
  
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
  
      // Read the first file in the array
      reader.readAsDataURL(files[0]);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  
    // Update upload status
    setUploadStatus({ success: true, fileName: files.map((file) => file.name).join(', ') });
  };


  const handleSubmitAnswers = async () => {
    try {
        // Construct an array of screenshot URLs
        const screenshotURLs = uploadedFiles.map(file => file.url);

        // Update the document in the "Requests" collection with the screenshot URLs
        const requestDocRef = doc(db, 'Requests', id);
        await updateDoc(requestDocRef, {
            Screenshots: screenshotURLs,
        });

        console.log('Screenshots updated successfully');

        // Navigate to a success page or perform any other actions
        navigate('/skilled/home');
    } catch (error) {
        console.error('Error updating screenshots:', error);
    }
};

  // Styles for the components
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
    width: isMobileView ? '100%' : '85%',
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
    overflowY: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    display: "flex",
    flexDirection: "column",
  };

  // Render component
  return (
    <>
      <Navbar />
      <div style={homeStyle}>
        <div style={contentStyle}>
          <div style={headingStyle}>
            <div style={{
              fontSize: isMobileView ? 18 : 22,
              fontFamily: 'DMM',
              fontWeight: 500,
              marginLeft: isMobileView ? 15 : 30,
            }}>Upload the relevant screenshots answers!! </div>
          
          </div>

          <div style={mainboxStyle}>
            <div style={{ backgroundColor: "white", height: 50, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '20px', fontSize: 20, marginLeft: '10px', marginBottom: 3 }}>⌛</div>
              <div style={{ marginRight: '10px', fontSize: 25, fontFamily: "DMM", fontStyle: 'bold' }}>
                Upload</div>
            </div>

            {/* Drag and drop area */}
            <div
              style={{
                marginLeft: '25px',
                height: isMobileView ? 100 : 151,
                border: isDragOver ? '2px dashed black' : '0.5px dashed #7D716A',
                borderRadius: 15,
                position: 'relative',
                marginTop: 30,
                top: '50%',
                left: '50%',
                transform: isMobileView ? 'translate(-50%, -350%)' : 'translate(-50%, -200%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F9F9F9',
                color: '#7D716A',
                width: isMobileView ? 200 : 341,
                paddingTop: 2
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
              <p>Number of uploaded files: {uploadedFiles.length}</p>
            </div>
              <div style={{display:'flex',flexDirection:'row',gap:5,justifyContent:'center',padding:0}}>
            {/* Render the images in different divs */}
            {uploadedFiles.map((file, index) => (
              <div key={index} style={{ marginTop: 50 }}>
                <img src={file.url} alt={`uploaded-${index}`} style={{ width: 200, height: 150, borderRadius: 10, resizeMode: "cover", paddingTop: isMobileView ? 20 : 0 }} />
              </div>
            ))}
            </div>

            {/* Connect button */}
            <div style={{ marginTop: 30, marginLeft: 0 }}>
              <button
               onClick={handleSubmitAnswers}
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
                  cursor: "pointer",
                  marginBottom: '75px',
                  marginTop: "40"
                }}
              >
                Submit Answers
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
