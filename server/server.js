const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();
const port = 5000;


// Enable CORS for all routes
app.use(cors());
app.use(express.json()); // Parse JSON request body

// Initialize Firebase Admin SDK
const serviceAccount = require('../src/snipify-bda1e-firebase-adminsdk-kmxo0-88121553a3.json'); // Replace with your actual path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Sample route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Route to handle sending notifications
app.post('/sendNotification', async (req, res) => {
  const { tokens, payload } = req.body;

  try {
    const message = {
      tokens: tokens,
      notification: payload,
    };

    const response = await admin.messaging().sendMulticast(message);

    console.log('Notification sent:', response);
    res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error.message);
    res.status(500).json({ success: false, message: 'Error sending notification' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
