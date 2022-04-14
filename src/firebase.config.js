import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9AGKPD_wvgMLQ0NDJx7Vfrz2qd1wxHVg",
  authDomain: "airbnb-clone-a9f0f.firebaseapp.com",
  projectId: "airbnb-clone-a9f0f",
  storageBucket: "airbnb-clone-a9f0f.appspot.com",
  messagingSenderId: "1089897933893",
  appId: "1:1089897933893:web:acb645b47d60c8a0c0872c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
