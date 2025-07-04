// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8sf...seninkisi",
  authDomain: "seaservice-web.firebaseapp.com",
  databaseURL: "https://seaservice-web-default-rtdb.firebaseio.com",
  projectId: "seaservice-web",
  storageBucket: "seaservice-web.appspot.com",
  messagingSenderId: "2911...447",
  appId: "1:2911...447:web:abcde"
};

// Firebase başlatılıyor
const app = initializeApp(firebaseConfig);

// Veritabanı ve kimlik doğrulama servisleri başlatılıyor
const db = getDatabase(app);
const auth = getAuth(app);

// 👇 Dışa aktarılan her şey
export { app, db, auth };
