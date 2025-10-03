let randomNumber;
let attempts;

function startGame() {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("guessBtn").disabled = false;
}

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (!guess || guess < 1 || guess > 10) {
    document.getElementById("message").textContent = "⚠️ Masukkan angka 1 - 10!";
    return;
  }

  if (guess === randomNumber) {
    document.getElementById("message").textContent = `🎉 Benar! Angkanya ${randomNumber}. Percobaan: ${attempts}`;
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
  } else if (guess < randomNumber) {
    document.getElementById("message").textContent = "📉 Terlalu kecil!";
  } else {
    document.getElementById("message").textContent = "📈 Terlalu besar!";
  }
});

document.getElementById("restartBtn").addEventListener("click", startGame);

// Mulai game pertama kali
startGame();
