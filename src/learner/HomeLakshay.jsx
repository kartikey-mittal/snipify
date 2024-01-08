import React from 'react';



const HomeLakshay = () => {
    const homeStyle = {
        height: '80vh', // Set height to 80% of the viewport height
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
        alignItems: 'flex-start', // Align items to the start (top)
        overflow: 'hidden', // Hide overflow content
        backgroundColor:'#F3F6FC'
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
        margin: 'auto', // Center horizontally
        marginTop: '20px', // Add space from the heading
        border: '1px solid blue', // Add border with blue color
        boxShadow: '0px 08px 10px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={homeStyle}>
            <div style={contentStyle}>
                <div style={headingStyle}>⚡⚡Hi Kartikey Mittal, what is your question today?</div>
                <div style={mainboxStyle}>
                <section style={{ margin: '5rem 0.75rem' }}>
       <div style={{ display: 'flex' ,border: 'solid .1px', borderRadius: '9px',borderBlockColor:'#9a7d7d'}}>
           <div style={{ padding: '1rem', width: '40%', height: '25%',  }}>
             <img style={{ height: '18rem', width: '100%', objectFit: 'cover',borderRadius: '9px' }} src="https://imgs.search.brave.com/_3nOUpPG1H3D6I1X7G04vjqfBw-EmkY41kZ9EPkDIEk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nbG9i/YWwuZGlzY291cnNl/LWNkbi5jb20vZnJl/ZWNvZGVjYW1wL29w/dGltaXplZC80WC8y/LzgvMy8yODMyZjdm/MWNkOTlkNTE2M2Yy/NmU1MGY4OTAwZjVk/Mjg0Mzk2MjcwXzJf/NjYyeDUwMC5wbmc" alt="An image" />
           </div>

           <div style={{ padding: '3rem',  color: 'black', display: 'grid', gridTemplateRows: '1fr auto', height: '14rem' }}>
             <h3>Getting error in useeffect...not executing properly. Please help.</h3>
             <div style={{  display: 'flex', flexDirection: 'column',  alignItems: 'center',alignItems: 'start'}}>
               <p style={{ color: '#9A7D7D' }}>lakshay jain</p>
               <button style={{cursor:'pointer', width: '6rem', height: '2.25rem', border: 'solid 1px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderBlockColor:'#7D716A'}}>react</button>
             </div>

             <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
               <button style={{color: 'white', cursor:'pointer',backgroundColor: '#EA775C', width: '6rem', height: '2.25rem', border: 'solid .1px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center',borderBlockColor:'#EA775C'}}>ignore</button>
               <button style={{color: 'white',cursor:'pointer', backgroundColor: '#4285F4', width: '6rem', height: '2.25rem', border: 'solid .1px', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:'8px',borderBlockColor:'#4285F4' }}>connect</button>
             </div>
           </div>
       </div>
   </section>
                </div>
              
                
            </div>
           
        </div>
    );
};

export default HomeLakshay;
