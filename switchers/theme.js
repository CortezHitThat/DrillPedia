const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;

  // Set awal dari localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    // Simpan ke localStorage
    if (body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });