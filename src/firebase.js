// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "XXXX",
    authDomain: "XXXX",
    projectId: "XXXX",
    storageBucket: "XXXXXXX",
    messagingSenderId: "XXXXXX",
    appId: "XXXXXXXXXXXX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
