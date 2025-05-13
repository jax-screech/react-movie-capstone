// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ Add this

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZ842H4zhy_3z2Lz2liKy3H5vmfOoGY9M",
  authDomain: "movies-app-67c35.firebaseapp.com",
  projectId: "movies-app-67c35",
  storageBucket: "movies-app-67c35.firebasestorage.app",
  messagingSenderId: "432764454165",
  appId: "1:432764454165:web:14ee8827f08ccc2855151c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize and export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app); // ✅ This is what you're missing
