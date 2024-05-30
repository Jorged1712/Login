// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAokInvo8OlBp4Xc6vYr4g1BlFZJIGrlcw",
  authDomain: "login-58b0d.firebaseapp.com",
  projectId: "login-58b0d",
  storageBucket: "login-58b0d.appspot.com",
  messagingSenderId: "1036030023521",
  appId: "1:1036030023521:web:ab0813458f48fecfb09720",
  measurementId: "G-VCWD428DRN"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export default appFirebase