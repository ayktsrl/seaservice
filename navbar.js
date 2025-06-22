// Kullanıcının rolüne göre dashboard'a yönlendir
window.goToDashboard = function () {
  const role = localStorage.getItem("role");
  if (role === "seafarer") {
    location.href = "seafarer-dashboard.html";
  } else if (role === "company") {
    location.href = "company-dashboard.html";
  } else {
    location.href = "index.html";
  }
};

// Çıkış işlemi
window.logout = function () {
  localStorage.removeItem("role");
  location.href = "index.html";
};

// Navbar yüklendikten sonra butonlara tıklama olaylarını bağla
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("goToDashboardBtn")?.addEventListener("click", window.goToDashboard);
  document.getElementById("logoutBtn")?.addEventListener("click", window.logout);
});
