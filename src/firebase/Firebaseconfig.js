// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA77ya9rw9MbONd1pEiQB7o4cvUEor8xZ8",
  authDomain: "socialmedia-cb874.firebaseapp.com",
  projectId: "socialmedia-cb874",
  storageBucket: "socialmedia-cb874.firebasestorage.app",
  messagingSenderId: "468491325234",
  appId: "1:468491325234:web:9cf48569a3125d5443512b",
  measurementId: "G-7BKRN8FGST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();