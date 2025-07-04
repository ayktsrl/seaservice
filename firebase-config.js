// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8sf...seninKeyin",
  authDomain: "seaservice-web.firebaseapp.com",
  databaseURL: "https://seaservice-web-default-rtdb.firebaseio.com",
  projectId: "seaservice-web",
  storageBucket: "seaservice-web.appspot.com",
  messagingSenderId: "2911...447",
  appId: "1:2911...447:web:abcde"
};

// 👇 Firebase app'i başlat
const app = initializeApp(firebaseConfig);

// 👇 Dışa aktar: agency-dashboard'da kullanılacak
export { app };
