// Fonksiyonları global yap
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

window.logout = function () {
  localStorage.removeItem("role");
  location.href = "index.html";
};

// Navbar yüklendikten sonra 100ms içinde butonları bağla
setTimeout(() => {
  const goBtn = document.getElementById("goToDashboardBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (goBtn) goBtn.addEventListener("click", window.goToDashboard);
  if (logoutBtn) logoutBtn.addEventListener("click", window.logout);
}, 100);
