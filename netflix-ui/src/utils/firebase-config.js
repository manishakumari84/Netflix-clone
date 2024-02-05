// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBzu5E3C8XIJ3qy4IlE5x8Cj6UZ5_q4-mg",
  authDomain: "react-netflix-clone-4a76f.firebaseapp.com",
  projectId: "react-netflix-clone-4a76f",
  storageBucket: "react-netflix-clone-4a76f.appspot.com",
  messagingSenderId: "325189890597",
  appId: "1:325189890597:web:0d7be2d1af075859c005cc",
  measurementId: "G-0M811CMBJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
