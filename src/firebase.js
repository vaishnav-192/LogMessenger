import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkNBI2ABm4Vx71q_jjIBzQBZ5BtOybvZc",
  authDomain: "blockchain-3179d.firebaseapp.com",
  projectId: "blockchain-3179d",
  storageBucket: "blockchain-3179d.appspot.com",
  messagingSenderId: "805413345378",
  appId: "1:805413345378:web:a542f95f55fcb1b4ac993b",
  measurementId: "G-X0GLRSYHPV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
