let currentIndex = 0;
let images = [];

function showImage(index) {
  const allImgs = document.querySelectorAll('.slider-container img');
  allImgs.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const article = signs.find(item => item.id === id);

  if (article) {
    document.getElementById("judul").innerText = article.title;
    document.getElementById("tanggal").innerText = article.date;
    document.getElementById("isi").innerText = article.full;

    images = article.images || [];
    const slider = document.getElementById("slider");

    images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.className = i === 0 ? "full-image active" : "full-image";
      slider.insertBefore(img, slider.querySelector(".slider-nav"));
    });
  }
});