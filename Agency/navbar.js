function setupAgencyNavbarEvents() {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("role");
      window.location.href = "../login.html";
    });
  }

  const logo = document.querySelector(".navbar-brand");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "agency-dashboard.html";
    });
  }
}

window.addEventListener("load", () => {
  setTimeout(setupAgencyNavbarEvents, 200);
});
