// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// 🔐 Kendi proje bilgilerin buraya
const firebaseConfig = {
  apiKey: "AIzaSyA8sf...seninkisi",
  authDomain: "seaservice-web.firebaseapp.com",
  databaseURL: "https://seaservice-web-default-rtdb.firebaseio.com",
  projectId: "seaservice-web",
  storageBucket: "seaservice-web.appspot.com",
  messagingSenderId: "2911...447",
  appId: "1:2911...447:web:abcde"
};

// 🔧 Servisleri başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);

// ✅ Dışa aktarılacaklar
export { app, auth, db, firestore };
