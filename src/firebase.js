// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMzuwIyKDfpT_qaimmTVqMfjSkCHisLpA",
  authDomain: "letsdotaskmanage.firebaseapp.com",
  projectId: "letsdotaskmanage",
  storageBucket: "letsdotaskmanage.firebasestorage.app",
  messagingSenderId: "29440876898",
  appId: "1:29440876898:web:f5afe0f6460123c615cc3b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);