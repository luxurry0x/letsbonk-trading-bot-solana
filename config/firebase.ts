// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3LK6iKw2KFy5oxS-wIS-rohtMph0uTss",
  authDomain: "solana-token-launcher-d1a80.firebaseapp.com",
  projectId: "solana-token-launcher-d1a80",
  storageBucket: "solana-token-launcher-d1a80.firebasestorage.app",
  messagingSenderId: "812445619534",
  appId: "1:812445619534:web:679f6dfb53121587323a1f",
  measurementId: "G-L5N0JDQTPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}
