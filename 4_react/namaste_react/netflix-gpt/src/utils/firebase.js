// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVbUUG7FP2gXH3H-w8aZk5zMq-67bCq7o",
  authDomain: "neflixgpt-bea7f.firebaseapp.com",
  projectId: "neflixgpt-bea7f",
  storageBucket: "neflixgpt-bea7f.firebasestorage.app",
  messagingSenderId: "267481965881",
  appId: "1:267481965881:web:65ed54ed022008be2db4e8",
  measurementId: "G-ZZ5CSDNQWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();