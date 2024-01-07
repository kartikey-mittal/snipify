import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/snipify_1.png'

const TeamWork = () => {
    const navigate = useNavigate();

    const handleClick = (name) => {
        // Navigate to the '/test' route with the name as a parameter
        navigate(`/test/${name}`);
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        background: '#4285F4',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background 0.3s',
    };

    const logoStyle = {
        width: '100px', // Adjust the size as needed
        height: 'auto',
        marginBottom: '20px',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
             <img src={Logo} alt="Logo" style={{height:'300px',width:'600px',}} />
            <div style={{ textAlign: 'center' }}>
                <button style={buttonStyle} onClick={() => handleClick('Lakshay')}>Lakshay</button>
                <button style={buttonStyle} onClick={() => handleClick('Benjamin')}>Benjamin</button>
                <button style={buttonStyle} onClick={() => handleClick('Kartikey')}>Kartikey</button>
                <button style={buttonStyle} onClick={() => handleClick('Aviral')}>Aviral</button>
            </div>
        </div>
    );
};

export default TeamWork;
