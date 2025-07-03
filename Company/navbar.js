function setupCompanyNavbarEvents() {
  const goToDashboardBtn = document.getElementById("goToDashboardBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (goToDashboardBtn) {
    goToDashboardBtn.addEventListener("click", () => {
      const role = localStorage.getItem("role");

      if (role === "company" || role === "manager") {
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

window.addEventListener("load", () => {
  setTimeout(setupCompanyNavbarEvents, 200);
});
