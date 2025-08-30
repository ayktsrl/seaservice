// /shared/common-navbar.js
import { auth } from '/firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const navLinksUl = document.getElementById('navLinks');
const usernameEl = document.getElementById('usernameDisplay');
const roleBadge  = document.getElementById('roleBadge');
const logoutBtn  = document.getElementById('logoutBtn');

const norm = (p) => (p || '/')
  .replace(/index\.html$/,'/').replace(/\.html$/,'').replace(/\/+$/,'') || '/';

function markActive() {
  const here = norm(location.pathname);
  document.querySelectorAll('#navLinks a.nav-link').forEach(a => {
    const clean = norm(a.getAttribute('href'));
    if (clean === here) a.classList.add('active');
  });
}

function buildMenu(role) {
  const items = [];
  if (role === 'agency') {
    items.push(['Post Job', '/Agency/agency-post-job.html']);
    items.push(['My Job Posts', '/Agency/agency-job-list.html']);
    items.push(['Seafarers', '/Agency/agency-seafarers.html']);
  } else if (role === 'company') {
    items.push(['Dashboard', '/Company/company-dashboard.html']);
    items.push(['Create Job', '/Company/create-job.html']);
    items.push(['Applications', '/Company/company-applications.html']);
    items.push(['Ships', '/Company/company-ship-list.html']);
    items.push(['Crew Lists', '/Company/ship-crew-list.html']);
    items.push(['Seafarers', '/Company/evaluate-seafarers.html']);
  } else {
    items.push(['Job Board', '/shared/job-board.html']);
    items.push(['My Applications', '/Seafarer/my-applications.html']);
    items.push(['CV List', '/Seafarer/cv-list.html']);
  }
  navLinksUl.innerHTML = items.map(([label, href]) =>
    `<li class="nav-item"><a class="nav-link" href="${href}">${label}</a></li>`).join('');
  markActive();
}

function setUserUi(user, role) {
  usernameEl.textContent = user?.displayName || user?.email || 'User';
  roleBadge.textContent  = (role || 'seafarer').replace(/^\w/, c => c.toUpperCase());
  roleBadge.classList.toggle('text-bg-warning', role === 'agency');
  roleBadge.classList.toggle('text-bg-success', role === 'company');
  roleBadge.classList.toggle('text-bg-info', role === 'seafarer' || !role);
}

logoutBtn?.addEventListener('click', async () => {
  try { localStorage.removeItem('role'); await signOut(auth); }
  finally { location.href = '/index.html'; }
});

(function init() {
  const role = (localStorage.getItem('role') || 'seafarer').toLowerCase();
  buildMenu(role);
  onAuthStateChanged(auth, (user) => setUserUi(user || null, role));
})();
