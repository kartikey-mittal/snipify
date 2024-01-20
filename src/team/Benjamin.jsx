// src/App.js

import React from 'react';
import axios from 'axios';

const Benjamin = () => {
  const handleButtonClick = async () => {
    const tokens = [
      'calThSqp5GmqyxE0IndP3z:APA91bFMxipnFT3rq9IBvTFpRkdFMuDx6NP5n0fy9TH4G1wOaaPX98Vjzu-Trl2ZFP5W0Bj2zTnp6FYvfg0pU_QxCq6uoT_PJ2M2fVouo8TqUoARTbpwGDv9-voRWVyWhFKy8D16SV82',
      'd6poLLFuECbkjzhVnfMXta:APA91bFYZMjcPMZJk-zG_xIRQcT52fDxQ4_6V12cxtL5ORVZTrQC24HMRHlh67xW0QdGICy3eo5HVU21nB9U64cfe4A_TJhe99M1-p72apw9ZulKLrtoCk_eCO-hJF_WQI1KcugtC8NN'
    ];
    //const message = 'Hello from Firebase!';

    try {
      const response = await axios.post(
        'https://fcm.googleapis.com/fcm/send',
        {
          registration_ids: tokens,
          notification: {
            title: 'NEW QUESTION RECEIVED',
            body: 'This is a test notification.'
          }
        },
        {
          headers: {
            Authorization: 'key=AAAALbx6OSY:APA91bE-XoNsHHFbu9VxAY826Fwv4QJ2Z6IVjxJqnZZkvDsZkcQSeZOhCrKZHDZe7SJa-CpCZJ_PlawzXrK1BQheWT4Lj28XNuhK2a5ZDULkDoqtm8BE8xILGp3YuGuEBmp_gITO0tz9',
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Response from FCM:', response.data);

      if (response.data.success) {
        alert('Notification sent successfully!');
      } else {
        alert('Failed to send notification. Check the server logs for details.');
      }
    } catch (error) {
      console.error('Error sending notification:', error);
      alert('An error occurred while sending the notification.');
    }
  };

  return (
    <div>
      <h1>Firebase Notification Demo</h1>
      <button onClick={handleButtonClick}>Send Notification</button>
    </div>
  );
};

export default Benjamin;


