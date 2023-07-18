// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-qLy_1rBFotFiiM4EgCKfQ1n2YIRgLaw",
  authDomain: "devp-dc526.firebaseapp.com",
  projectId: "devp-dc526",
  storageBucket: "devp-dc526.appspot.com",
  messagingSenderId: "1011465010925",
  appId: "1:1011465010925:web:de77f9bba7ee232a3396e4",
  measurementId: "G-349WPKL22H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)