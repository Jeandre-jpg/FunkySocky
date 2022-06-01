// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9eIjdYSSCfXDZbUZ7YE5h0qBFQ46KSwk",
  authDomain: "funky-socky.firebaseapp.com",
  projectId: "funky-socky",
  storageBucket: "funky-socky.appspot.com",
  messagingSenderId: "630464639618",
  appId: "1:630464639618:web:0d604233716fd95cd1ba9b",
  measurementId: "G-Q1WWK2GE54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);