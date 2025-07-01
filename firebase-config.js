// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔐 Gerçek Firebase yapılandırman
const firebaseConfig = {
  apiKey: "AIzaSyDuF_HlZYG0v7SUaSzILV584J8b5ybnBUU",
  authDomain: "crewapplication-c37a8.firebaseapp.com",
  projectId: "crewapplication-c37a8",
  storageBucket: "crewapplication-c37a8.firebasestorage.app",
  messagingSenderId: "23423243284",
  appId: "1:23423243284:web:67e22f6ed057c74f4b4301",
  measurementId: "G-DSSJMESQ7Z"
};

// 🚀 Uygulamayı başlat
const app = initializeApp(firebaseConfig);

// 🔐 Auth ve Firestore'u dışa aktar
export const auth = getAuth(app);
export const db = getFirestore(app);
