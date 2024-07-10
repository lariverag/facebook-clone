// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDticgKgEnQ4kCGHT6L7ZTuIe-t5LN-v_Y",
  authDomain: "petbook-clone.firebaseapp.com",
  projectId: "petbook-clone",
  storageBucket: "petbook-clone.appspot.com",
  messagingSenderId: "1067704517060",
  appId: "1:1067704517060:web:34ca506a741d8ef03c6491",
  measurementId: "G-VLDTNCTP4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
