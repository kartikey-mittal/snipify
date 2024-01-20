// server.js

import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/send-notification', async (req, res) => {
  const { token, message } = req.body;

  try {
    console.log('Received notification request:', { token, message });

    const payload = {
      to: token,
      notification: {
        title: 'Notification Title',
        body: message,
      },
    };

    const response = await axios.post('https://fcm.googleapis.com/fcm/send', payload, {
      headers: {
        'Authorization': 'key=AAAALbx6OSY:APA91bE-XoNsHHFbu9VxAY826Fwv4QJ2Z6IVjxJqnZZkvDsZkcQSeZOhCrKZHDZe7SJa-CpCZJ_PlawzXrK1BQheWT4Lj28XNuhK2a5ZDULkDoqtm8BE8xILGp3YuGuEBmp_gITO0tz9',
        'Content-Type': 'application/json',
      },
    });

    console.log('Response from FCM:', response.data);

    res.status(200).json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ success: false, message: 'Error sending notification', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
