function setupNavbarEvents() {
  const goToDashboardBtn = document.getElementById("goToDashboardBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (goToDashboardBtn) {
    goToDashboardBtn.addEventListener("click", () => {
      const role = localStorage.getItem("role");

      if (role === "seafarer") {
        window.location.href = "/Seafarer/seafarer-dashboard.html";
      } else if (role === "company") {
        window.location.href = "/Company/company-dashboard.html";
      } else if (role === "owner") {
        window.location.href = "/Owner/owner-dashboard.html";
      } else if (role === "manager") {
        window.location.href = "/Company/company-dashboard.html";
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("role");
      window.location.href = "../index.html";
    });
  }
}

// Navbar sonradan eklendiği için kısa süre bekleyip setup'ı çağır
window.addEventListener("load", () => {
  setTimeout(setupNavbarEvents, 200);  // 200ms beklemek güvenlidir
});
