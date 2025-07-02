document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("role");
  window.location.href = "../index.html";
});

document.getElementById("goToDashboardBtn")?.addEventListener("click", () => {
  const role = localStorage.getItem("role");
  if (role === "seafarer") {
    window.location.href = "Seafarer/seafarer-dashboard.html";
  } else if (role === "company") {
    window.location.href = "Company/company-dashboard.html";
  } else if (role === "agency") {
    window.location.href = "Agency/agency-dashboard.html";
  } else {
    window.location.href = "../index.html";
  }
});
