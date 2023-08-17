// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2HARxajEF5mjOuZ1oPaNWhcHALr5i8uI",
  authDomain: "iron-crane-389908.firebaseapp.com",
  projectId: "iron-crane-389908",
  storageBucket: "iron-crane-389908.appspot.com",
  messagingSenderId: "275282053555",
  appId: "1:275282053555:web:5b7e8ea445f57bbdf263c6",
  measurementId: "G-NP76EH5NFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

