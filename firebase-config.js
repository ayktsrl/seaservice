// firebase-config.js

// Firebase App (Core) SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firebase Realtime Database SDK
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase yapılandırma bilgilerin
const firebaseConfig = {
  apiKey: "AIzaSyA8sf...seninkisi",
  authDomain: "seaservice-web.firebaseapp.com",
  databaseURL: "https://seaservice-web-default-rtdb.firebaseio.com",
  projectId: "seaservice-web",
  storageBucket: "seaservice-web.appspot.com",
  messagingSenderId: "2911...447",
  appId: "1:2911...447:web:abcde"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Realtime Database'i başlat
const db = getDatabase(app);

// Dışa aktar: Diğer dosyalarda kullanılacak
export { app, db };
