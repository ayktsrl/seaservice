(function() {
  // Derinlik tespiti (kaç klasör yukarı çıkmalıyız?)
  function getBasePath() {
    const path = window.location.pathname;
    // Örnek: /Agency/agency-job-list.html -> 1 yukarı çıkmalı: '../'
    const match = path.match(/\/(Agency|Company|Seafarer)\//i);
    if (match) return '../';
    return '';
  }
  const base = getBasePath();

  const role = localStorage.getItem('role');
  const navLinks = document.getElementById('navLinks');
  const dashboardBrand = document.getElementById('dashboardBrand');
  let menuHtml = '';
  let dashboardHref = base + 'home.html';

  if (role === 'company') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="${base}Company/company-applications.html">Job Applications</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Company/create-job.html">Create Job</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Company/company-ship-list.html">Ships</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Company/ship-crew-list.html">Crew List</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Company/public-cv-browser.html">CV Browser</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Company/evaluate-seafarers.html">Evaluate Seafarers</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Company/company-verify-seaservice.html">Verify Sea Service</a></li>
    `;
    dashboardHref = base + 'Company/company-applications.html';
  } else if (role === 'agency') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="${base}Agency/agency-post-job.html">Post Job</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Agency/agency-job-list.html">My Jobs</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Agency/agency-seafarers.html">Seafarers</a></li>
    `;
    dashboardHref = base + 'Agency/agency-job-list.html';
  } else if (role === 'seafarer') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="${base}Seafarer/my-applications.html">My Applications</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Seafarer/edit-cv-panel.html">Edit CV</a></li>
    `;
    dashboardHref = base + 'Seafarer/my-applications.html';
  } else {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="${base}login.html">Login</a></li>
    `;
    dashboardHref = base + 'home.html';
  }

  navLinks.innerHTML = menuHtml;
  dashboardBrand.setAttribute('href', dashboardHref);

  // User dropdown linkleri role ve derinliğe göre ayarlanıyor:
  const userMenuLinks = document.getElementById('userMenuLinks');
  if (userMenuLinks) {
    userMenuLinks.innerHTML = `
      <li><a class="dropdown-item" href="${base}edit-profile.html">Edit Profile</a></li>
      <li><a class="dropdown-item" href="${base}change-password.html">Change Password</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#" id="logoutBtn">Logout</a></li>
    `;
  }

  // Optionally set username
  const usernameDisplay = document.getElementById('usernameDisplay');
  const username = localStorage.getItem('username');
  if (usernameDisplay && username) usernameDisplay.textContent = username;

  // Logout logic
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      localStorage.removeItem('role');
      localStorage.removeItem('username');
      window.location.href = base + 'index.html';
    });
  }
})();
