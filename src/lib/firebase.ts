import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVbxWPm6y14Lm-DeGhVoVSpOP3S4vcVEU",
  authDomain: "rutviknriservice.firebaseapp.com",
  projectId: "rutviknriservice",
  storageBucket: "rutviknriservice.firebasestorage.app",
  messagingSenderId: "790717107407",
  appId: "1:790717107407:web:62770da5cf29e3d0043bba",
  measurementId: "G-VNPR05BSPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;