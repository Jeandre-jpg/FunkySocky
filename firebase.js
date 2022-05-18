// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHm2_wJA-b7pXzRu2-37aPieHoMjKwBmQ",
  authDomain: "awesome-class-project-4b717.firebaseapp.com",
  projectId: "awesome-class-project-4b717",
  storageBucket: "awesome-class-project-4b717.appspot.com",
  messagingSenderId: "581178851987",
  appId: "1:581178851987:web:763c07c1179ad6730a0366",
  measurementId: "G-XX0E1Y8111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);