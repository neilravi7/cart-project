// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDd-dM4QyEeUUykk-Z77DW8Jixz5lu1ZCo",
    authDomain: "cart-9b2a6.firebaseapp.com",
    projectId: "cart-9b2a6",
    storageBucket: "cart-9b2a6.appspot.com",
    messagingSenderId: "800527305336",
    appId: "1:800527305336:web:7e0ef3a447b40e27467b8d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
