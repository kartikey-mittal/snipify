import axios from 'axios';

export const sendNotification = async (fcmTokens, notificationPayload) => {
  try {
    await axios.post('http://localhost:5000/sendNotification', {
      fcmTokens,
      notificationPayload,
    });
    console.log('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};