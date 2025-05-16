document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const kategori = document.getElementById("kategori").value;
    const pesan = document.getElementById("pesan").value;

    if (!kategori || !pesan.trim()) {
      alert("Mohon isi semua kolom.");
      return;
    }

    const token = "7859365016:AAH-xZeFBQF7Qsgm-b3REdhBThx23tmItjc"; // token bot
    const chatId = "7562696558"; // ID chat

    const text = `📝 *Feedback Masuk*\n\n*Kategori:* ${kategori}\n*Pesan:*\n${pesan}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown"
        })
      });

      if (res.ok) {
        alert("Pesan berhasil dikirim!");
        form.reset();
      } else {
        alert("Gagal mengirim pesan.");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat mengirim.");
    }
  });
});
