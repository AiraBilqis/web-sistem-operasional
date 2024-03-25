// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBThnvHQZq85kt7Z74QbuFwCX_W2o5jF4U",
  authDomain: "sistem-operasional-app.firebaseapp.com",
  projectId: "sistem-operasional-app",
  storageBucket: "sistem-operasional-app.appspot.com",
  messagingSenderId: "200008673115",
  appId: "1:200008673115:web:197dfc80e978369d0ddc7e",
  measurementId: "G-QJ48EKCFZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };