import { auth } from '../firebase-config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth).then(() => {
        // 'role' bilgisini temizle ve login sayfasına yönlendir
        localStorage.removeItem("role");
        window.location.href = "../login.html";
      }).catch((error) => {
        console.error("Logout failed:", error.message);
      });
    });
  }
});
