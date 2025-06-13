// Firebase modüllerini içe aktar
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Firebase config ayarları (senin projenin bilgileriyle doldurulmalı)
const firebaseConfig = {
  apiKey: "AIzaSyDuF_HlZYG0v7SUaSzILV584J8b5ybnBUU",
  authDomain: "crewapplication-c37a8.firebaseapp.com",
  projectId: "crewapplication-c37a8",
  storageBucket: "crewapplication-c37a8.appspot.com",
  messagingSenderId: "23423243284",
  appId: "1:23423243284:web:67e22f6ed057c74f4b4301"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Servisleri dışa aktar
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
