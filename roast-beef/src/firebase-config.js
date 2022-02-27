import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCi0dr1G0ESpIo0q5VH6drFh65W1gManZQ",
    authDomain: "roast-beef-5c6d2.firebaseapp.com",
    projectId: "roast-beef-5c6d2",
    storageBucket: "roast-beef-5c6d2.appspot.com",
    messagingSenderId: "89003174248",
    appId: "1:89003174248:web:92ee5fc32596756a980edd",
    measurementId: "G-ZTD51V54HY"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);