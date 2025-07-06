import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

async function getUserRoleAndInfo(user) {
  if (!user) return { role: null, firstName: '', lastName: '' };
  const collections = ['seafarers', 'companies', 'agencies'];
  for (let col of collections) {
    const docRef = doc(db, col, user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const d = docSnap.data();
      return {
        role: (d.role || '').toLowerCase(),
        firstName: d.firstName || '',
        lastName: d.lastName || ''
      };
    }
  }
  return { role: null, firstName: '', lastName: '' };
}

function updateNavLinks(role) {
  const navLinks = document.getElementById('navLinks');
  const dashboardBrand = document.getElementById('dashboardBrand');
  let menuHtml = '';
  const base = (() => {
    const path = window.location.pathname;
    const match = path.match(/\/(Agency|Company|Seafarer)\//i);
    if (match) return '../';
    return '';
  })();
  const dashboardHref = base + 'home.html';

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
  } else if (role === 'agency') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="${base}Agency/agency-post-job.html">Post Job</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Agency/agency-job-list.html">My Jobs</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Agency/agency-seafarers.html">Seafarers</a></li>
    `;
  } else if (role === 'seafarer') {
    menuHtml += `
      <li class="nav-item"><a class="nav-link" href="${base}Seafarer/my-applications.html">My Applications</a></li>
      <li class="nav-item"><a class="nav-link" href="${base}Seafarer/edit-cv-panel.html">Edit CV</a></li>
    `;
  } else {
    menuHtml += `<li class="nav-item"><a class="nav-link" href="${base}login.html">Login</a></li>`;
  }
  if (navLinks) navLinks.innerHTML = menuHtml;
  if (dashboardBrand) dashboardBrand.setAttribute('href', dashboardHref);

  // User dropdown
  const userMenuLinks = document.getElementById('userMenuLinks');
  if (userMenuLinks) {
    userMenuLinks.innerHTML = `
      <li><a class="dropdown-item" href="${base}edit-profile.html">Edit Profile</a></li>
      <li><a class="dropdown-item" href="${base}change-password.html">Change Password</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#" id="logoutBtn">Logout</a></li>
    `;
    setTimeout(() => {
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
          window.location.href = base + 'index.html';
        });
      }
    }, 100);
  }
}

onAuthStateChanged(auth, async user => {
  if (!user) {
    updateNavLinks();
    document.getElementById('usernameDisplay').textContent = "User";
    return;
  }
  const { role, firstName, lastName } = await getUserRoleAndInfo(user);
  updateNavLinks(role);
  document.getElementById('usernameDisplay').textContent = (firstName + " " + lastName).trim() || "User";
});
