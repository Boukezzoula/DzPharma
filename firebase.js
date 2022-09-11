// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmaXpUzWUJJ2yajmXVpNtpFydbUfNv5eI",
  authDomain: "dzpharma-d0e8c.firebaseapp.com",
  projectId: "dzpharma-d0e8c",
  storageBucket: "dzpharma-d0e8c.appspot.com",
  messagingSenderId: "34324307216",
  appId: "1:34324307216:web:4080aba3856ab4fc939995",
  measurementId: "G-78R9ESSTBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export { auth };
