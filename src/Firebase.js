// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getMessaging } from "firebase/messaging";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFtnPLJJ2plbMSv3DY6WK-JWLdQ_oWQFQ",
  authDomain: "snipify-bda1e.firebaseapp.com",
  projectId: "snipify-bda1e",
  storageBucket: "snipify-bda1e.appspot.com",
  messagingSenderId: "196435654950",
  appId: "1:196435654950:web:36d708f84f078f6a7729e7",
  measurementId: "G-E7CYYZTNFZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const messaging = getMessaging(app);


export { db, storage,collection,messaging };