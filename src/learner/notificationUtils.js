import { messaging } from "../Firebase";

const sendNotification = async (fcmTokens, message) => {
 

  try {
    const response = await messaging.sendMulticast({
      ...message,
      tokens: fcmTokens,
    });

    console.log('Successfully sent message:', response);
  } catch (error) {
    console.error('Error sending notifications:', error);
  }
};

export { sendNotification };