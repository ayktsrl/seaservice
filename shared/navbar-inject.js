// /shared/navbar-inject.js
// Tek JS ile NAVBAR oluşturur (fetch yok). Tüm sayfalara aynı menü + Change Password.

import { auth } from '/firebase-config.js';
import { onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

function h(el, attrs = {}, html = '') {
  const e = document.createElement(el);
  Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
  if (html) e.innerHTML = html;
  return e;
}

function norm(p) {
  return (p || '/')
    .replace(/index\.html$/,'/')
    .replace(/\.html$/,'')
    .replace(/\/+$/,'') || '/';
}

function buildNavHtml() {
  return `
<nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3">
  <a class="navbar-brand d-flex align-items-center gap-2" href="/home.html">
    <img src="/logo.png" alt="Logo" style="height:28px;width:auto" />
    <span>Orion</span>
  </a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav me-auto" id="navLinks"></ul>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#"
           id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="badge text-bg-light text-primary" id="roleBadge">Role</span>
          <span id="usernameDisplay">User</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown" id="userMenuLinks">
          <li><a class="dropdown-item" href="/edit-profile.html">Edit Profile</a></li>
          <li><a class="dropdown-item" href="/change-password.html">Change Password</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><button class="dropdown-item" id="logoutBtn" type="button">Logout</button></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>`;
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
    items.push(['Crew Change', '/Company/crew-change.html']);               // NEW
    items.push(['CV Browser', '/Company/public-cv-browser.html']);          // NEW (replaces Evaluate)
  } else { // seafarer default
    items.push(['Job Board', '/shared/job-board.html']);
    items.push(['My Applications', '/Seafarer/my-applications.html']);
    items.push(['CV List', '/Seafarer/cv-list.html']);
  }
  return items.map(([label, href]) =>
    `<li class="nav-item"><a class="nav-link" href="${href}">${label}</a></li>`).join('');
}

function markActive() {
  const here = norm(location.pathname);
  document.querySelectorAll('#navLinks a.nav-link').forEach(a => {
    const clean = norm(a.getAttribute('href'));
    if (clean === here) a.classList.add('active');
  });
}

function mountNavbar() {
  // 1) Yer bulun
  let host = document.getElementById('navbar-host') || document.getElementById('navbar-container');
  if (!host) {
    host = h('div', { id: 'navbar-host' });
    // Sayfanın en başına koy
    document.body.prepend(host);
  }

  // 2) HTML’i bas
  host.innerHTML = buildNavHtml();

  // 3) Menü öğelerini doldur
  const role = (localStorage.getItem('role') || 'seafarer').toLowerCase();
  const navLinksUl = document.getElementById('navLinks');
  navLinksUl.innerHTML = buildMenu(role);
  markActive();

  // 4) Kullanıcı bilgisi ve logout
  const usernameEl = document.getElementById('usernameDisplay');
  const roleBadge  = document.getElementById('roleBadge');
  roleBadge.textContent = role.replace(/^\w/, c => c.toUpperCase());
  roleBadge.classList.toggle('text-bg-warning', role==='agency');
  roleBadge.classList.toggle('text-bg-success', role==='company');
  roleBadge.classList.toggle('text-bg-info',    role==='seafarer' || !role);

  const logoutBtn  = document.getElementById('logoutBtn');
  logoutBtn?.addEventListener('click', async () => {
    try { localStorage.removeItem('role'); await signOut(auth); }
    finally { location.href = '/index.html'; }
  });

  onAuthStateChanged(auth, (user) => {
    usernameEl.textContent = user?.displayName || user?.email || 'User';
  });
}

// Bootstrap JS yüklü mü? (navbar toggler için) değilse uyarma, sadece çalışır.
try { mountNavbar(); } catch (e) { console.error('Navbar mount failed', e); }
