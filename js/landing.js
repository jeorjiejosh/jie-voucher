document.addEventListener("DOMContentLoaded", () => {
  const gift = document.getElementById("giftIcon");
  const music = document.getElementById("backgroundMusic");

  // Preload and prepare music immediately when page loads
  music.volume = 0.7;
  music.load(); // Force load the audio

  function popConfetti() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 }
    });
  }

  // Add hover effect - mini confetti on hover
  gift.addEventListener("mouseenter", () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#c62828', '#ff6b6b', '#ffd700', '#2e7d32']
    });
  });

  gift.addEventListener("click", () => {
    // Pop confetti!
    popConfetti();
    
    // Extra confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#c62828', '#ff6b6b', '#ffd700', '#2e7d32', '#ff8c42']
      });
    }, 200);
    
    // Small delay to show confetti before navigating
    setTimeout(() => {
      window.location.href = "form.html";
    }, 800);
  });
});

