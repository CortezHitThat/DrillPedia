function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}

function toggleDropdown() {
  const submenu = document.getElementById('submenu');
  const arrow = document.getElementById('arrow');

  submenu.classList.toggle('show');
  arrow.classList.toggle('rotate');
}