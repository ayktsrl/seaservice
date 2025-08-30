// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore }  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Senin proje ayarların (değiştirmedim)
const firebaseConfig = {
  apiKey:            "AIzaSyDuF_HlZYG0v7SUaSzILV584J8b5ybnBUU",
  authDomain:        "crewapplication-c37a8.firebaseapp.com",
  projectId:         "crewapplication-c37a8",
  storageBucket:     "crewapplication-c37a8.appspot.com",
  messagingSenderId: "23423243284",
  appId:             "1:23423243284:web:67e22f6ed057c74f4b4301"
  // measurementId:   "G-DSSJMESQ7Z" // Analytics istersen açabilirsin
};

// Initialize Firebase
export const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
