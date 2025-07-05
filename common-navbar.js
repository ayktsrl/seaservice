(function() {
  // Get role from localStorage
  const role = localStorage.getItem('role');
  const navLinks = document.getElementById('navLinks');
  const dashboardBrand = document.getElementById('dashboardBrand');
  let menuHtml = '';
  let dashboardHref = 'home.html';

  if (role === 'company') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="Company/company-applications.html">Job Applications</a></li>
      <li class="nav-item"><a class="nav-link" href="Company/create-job.html">Create Job</a></li>
      <li class="nav-item"><a class="nav-link" href="Company/company-ship-list.html">Ships</a></li>
      <li class="nav-item"><a class="nav-link" href="Company/ship-crew-list.html">Crew List</a></li>
      <li class="nav-item"><a class="nav-link" href="Company/public-cv-browser.html">CV Browser</a></li>
      <li class="nav-item"><a class="nav-link" href="Company/evaluate-seafarers.html">Evaluate Seafarers</a></li>
      <li class="nav-item"><a class="nav-link" href="Company/company-verify-seaservice.html">Verify Sea Service</a></li>
    `;
    dashboardHref = 'Company/company-applications.html';
  } else if (role === 'agency') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="Agency/agency-post-job.html">Post Job</a></li>
      <li class="nav-item"><a class="nav-link" href="Agency/agency-job-list.html">My Jobs</a></li>
      <li class="nav-item"><a class="nav-link" href="Agency/agency-seafarers.html">Seafarers</a></li>
    `;
    dashboardHref = 'Agency/agency-job-list.html';
  } else if (role === 'seafarer') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="Seafarer/my-applications.html">My Applications</a></li>
      <li class="nav-item"><a class="nav-link" href="Seafarer/edit-cv-panel.html">Edit CV</a></li>
    `;
    dashboardHref = 'Seafarer/my-applications.html';
  } else {
    // Default menu if no role is found
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
    `;
    dashboardHref = 'home.html';
  }

  if (navLinks) navLinks.innerHTML = menuHtml;
  if (dashboardBrand) dashboardBrand.setAttribute('href', dashboardHref);

  // Optionally set username
  const usernameDisplay = document.getElementById('usernameDisplay');
  const username = localStorage.getItem('username');
  if (usernameDisplay && username) usernameDisplay.textContent = username;

  // Logout logic (only clear 'role')
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('role');
      localStorage.removeItem('username');
      window.location.href = 'index.html';
    });
  }
})();
