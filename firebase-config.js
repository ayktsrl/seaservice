// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Senin Firebase ayarların (örnek olarak yazıldı, kendi bilgilerinle değiştir)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 🚀 Firebase'i başlat
const app = initializeApp(firebaseConfig);

// 🔐 Auth ve 🔥 Firestore nesnelerini dışa aktar
export const auth = getAuth(app);
export const db = getFirestore(app);
