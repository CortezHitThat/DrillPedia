const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");

fetch("../../data/news.json")
  .then(res => res.json())
  .then(data => {
    const article = data.find(item => item.id === articleId);

    if (!article) {
      document.getElementById("article-title").textContent = "Artikel tidak ditemukan";
      return;
    }

    document.getElementById("article-title").textContent = article.title;
    document.getElementById("article-date").textContent = article.date;
    document.getElementById("article-img").src = article.image;

    const paragraphs = article.content.split("\n").map(p => `<p>${p}</p>`).join("");
    document.getElementById("article-content").innerHTML = paragraphs;
  });