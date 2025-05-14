let nilaiPlayer = null;
let nilaiCPU = null;

function lempar() {
  const btn = document.getElementById("btnLempar");
  const turnLabel = document.getElementById("turnLabel");
  const angkaPlayerEl = document.getElementById("angkaPlayer");
  const angkaCPUEl = document.getElementById("angkaCPU");
  const resultText = document.getElementById("resultText");

  btn.disabled = true;
  resultText.textContent = "Pemain melempar...";
  turnLabel.textContent = "🎯 Giliran: Pemain";

  // Animasi angka acak untuk player
  let intervalPlayer = setInterval(() => {
    angkaPlayerEl.textContent = Math.floor(Math.random() * 6) + 1;
  }, 100);

  setTimeout(() => {
    clearInterval(intervalPlayer);
    nilaiPlayer = Math.floor(Math.random() * 6) + 1;
    angkaPlayerEl.textContent = nilaiPlayer;

    resultText.textContent = "Komputer melempar...";
    turnLabel.textContent = "🤖 Giliran: Komputer";

    // Animasi angka acak untuk komputer
    let intervalCPU = setInterval(() => {
      angkaCPUEl.textContent = Math.floor(Math.random() * 6) + 1;
    }, 100);

    setTimeout(() => {
      clearInterval(intervalCPU);
      nilaiCPU = Math.floor(Math.random() * 6) + 1;
      angkaCPUEl.textContent = nilaiCPU;

      // Tampilkan hasil
      if (nilaiPlayer > nilaiCPU) {
        resultText.textContent = "🎉 Kamu Menang!";
      } else if (nilaiCPU > nilaiPlayer) {
        resultText.textContent = "💻 Komputer Menang!";
      } else {
        resultText.textContent = "🤝 Seri!";
      }

      turnLabel.textContent = "✅ Permainan Selesai";

      // Tampilkan tombol Main Lagi dan sembunyikan tombol Lempar
      document.getElementById("btnUlang").classList.remove("d-none");
      document.getElementById("btnLempar").classList.add("d-none");
    }, 1000);

  }, 1000);
}

function resetGame() {
  nilaiPlayer = null;
  nilaiCPU = null;

  // Reset angka
  document.getElementById("angkaPlayer").textContent = "-";
  document.getElementById("angkaCPU").textContent = "-";

  // Aktifkan tombol Lempar dan sembunyikan tombol Main Lagi
  document.getElementById("btnLempar").disabled = false;
  document.getElementById("btnLempar").classList.remove("d-none");
  document.getElementById("btnUlang").classList.add("d-none");

  // Reset hasil dan label giliran
  document.getElementById("resultText").textContent = "";
  document.getElementById("turnLabel").textContent = "🎯 Giliran: Pemain";
}

// Untuk credit delay muncul
document.addEventListener("DOMContentLoaded", () => {
  const creditDiv = document.getElementById("creditText");
  const creditHTML = `
    <ul class="list-unstyled">
      <li><strong>Dibuat oleh:</strong> Rendi Razalie And Dimas Pradhivta</li>
      <li><strong>Desain & Logika Game:</strong>Rendi RazaLie And Dimas Pradhivta</li>
      <li><strong>Teknologi:</strong> HTML, CSS, JavaScript & Bootstrap</li>
    </ul>
  `;

  // Tambahkan teks dengan efek delay
  setTimeout(() => {
    creditDiv.innerHTML = creditHTML;
    creditDiv.classList.add("visible");
  }, 500);
});
