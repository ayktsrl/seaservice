import { auth } from '../firebase-config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// logout butonuna tıklanınca çıkış işlemi başlat
function bindLogout() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          localStorage.removeItem("role");
          window.location.href = "../index.html";
        })
        .catch((error) => {
          console.error("Logout failed:", error.message);
        });
    });
  } else {
    // Eğer navbar yavaş yüklendiyse, 100ms sonra tekrar dene
    setTimeout(bindLogout, 100);
  }
}

// Hemen başlat (DOMContentLoaded falan beklemiyoruz)
bindLogout();
