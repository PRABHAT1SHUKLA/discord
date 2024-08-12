import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb1FjQVs7MPdPm6N_onLJjH4Ek5K0JJXI",
  authDomain: "prabhat-9250c.firebaseapp.com",
  databaseURL: "https://prabhat-9250c-default-rtdb.firebaseio.com",
  projectId: "prabhat-9250c",
  storageBucket: "prabhat-9250c.appspot.com",
  messagingSenderId: "1537208931",
  appId: "1:1537208931:web:277f84b2e8c0a6a3b47e56",
  measurementId: "G-T9ER7RKSHL"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// export
export { app, auth, firestore, storage };
