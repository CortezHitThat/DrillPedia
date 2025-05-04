let currentIndex = 0;
let images = [];

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function nextImage() {
  if (images.length === 0) return;
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  if (images.length === 0) return;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}