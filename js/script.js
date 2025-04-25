function navigateTo(category) {
  // Redirect user ke halaman list
  window.location.href = `list.html?category=${category}`;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}