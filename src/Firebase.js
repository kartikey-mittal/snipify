// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsP90dp-MHyuoNFWIo9k9eefj6Y-YZDHQ",
  authDomain: "hack-hound-5447c.firebaseapp.com",
  projectId: "hack-hound-5447c",
  storageBucket: "hack-hound-5447c.appspot.com",
  messagingSenderId: "209019940720",
  appId: "1:209019940720:web:02da45d42b53fb746f69b5",
  measurementId: "G-LB6WPREEJ4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage,collection };

