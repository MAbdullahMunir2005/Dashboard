// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_4v9qLa4f1QiqKQov4QwI7kuaznO9Xik",
  authDomain: "test-78939.firebaseapp.com",
  projectId: "test-78939",
  storageBucket: "test-78939.appspot.com",
  messagingSenderId: "893459505973",
  appId: "1:893459505973:web:d0598bb295d59c6abca27c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);