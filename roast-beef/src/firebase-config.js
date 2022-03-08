// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi0dr1G0ESpIo0q5VH6drFh65W1gManZQ",
  authDomain: "roast-beef-5c6d2.firebaseapp.com",
  databaseURL: "https://roast-beef-5c6d2-default-rtdb.firebaseio.com",
  projectId: "roast-beef-5c6d2",
  storageBucket: "roast-beef-5c6d2.appspot.com",
  messagingSenderId: "89003174248",
  appId: "1:89003174248:web:c935897ab7a02226980edd",
  measurementId: "G-SFF8QHEGKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

