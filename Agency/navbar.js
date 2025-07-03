import { auth } from '../firebase-config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  // Navbar sonradan yüklendiği için logout butonunu düzenli kontrol et
  const checkInterval = setInterval(() => {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      clearInterval(checkInterval);
      logoutBtn.addEventListener("click", () => {
        signOut(auth)
          .then(() => {
            localStorage.removeItem("role");
            window.location.href = "../login.html";
          })
          .catch((error) => {
            console.error("Logout failed:", error.message);
          });
      });
    }
  }, 100); // Her 100ms'de bir kontrol eder, bulunca durur
});
