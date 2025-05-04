import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA-PVcCVYRQtYfdgbp2KkHdagxxC14HWVU",
    authDomain: "marketplace-26347.firebaseapp.com",
    projectId: "marketplace-26347",
    storageBucket: "marketplace-26347.firebasestorage.app",
    messagingSenderId: "585778015113",
    appId: "1:585778015113:web:12f3479eac45493eb74f58"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
