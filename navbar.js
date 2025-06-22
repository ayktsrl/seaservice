document.addEventListener("DOMContentLoaded", () => {
  const dashboardBtn = document.getElementById("goToDashboardBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (dashboardBtn) {
    dashboardBtn.addEventListener("click", () => {
      const role = localStorage.getItem("role");
      if (role === "seafarer") {
        window.location.href = "seafarer-dashboard.html";
      } else if (role === "company") {
        window.location.href = "company-dashboard.html";
      } else {
        window.location.href = "index.html";
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("role");
      localStorage.removeItem("userId");
      window.location.href = "index.html";
    });
  }
});
