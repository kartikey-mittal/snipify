importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCFtnPLJJ2plbMSv3DY6WK-JWLdQ_oWQFQ",
  authDomain: "snipify-bda1e.firebaseapp.com",
  projectId: "snipify-bda1e",
  storageBucket: "snipify-bda1e.appspot.com",
  messagingSenderId: "196435654950",
  appId: "1:196435654950:web:36d708f84f078f6a7729e7",
  measurementId: "G-E7CYYZTNFZ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});