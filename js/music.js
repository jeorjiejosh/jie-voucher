document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("musicToggle");
  const music = document.getElementById("backgroundMusic");

  if (!btn || !music) return;

  music.volume = 0.7;
  let isPlaying = true;

  // Restore music position if coming from form page
  const savedTime = sessionStorage.getItem('musicCurrentTime');
  if (savedTime) {
    const restoreAndPlay = () => {
      if (music.readyState >= 2) {
        music.currentTime = parseFloat(savedTime);
        sessionStorage.removeItem('musicCurrentTime');
        // Music will autoplay, but ensure it plays
        music.play().catch(e => console.log('Autoplay prevented:', e));
      } else {
        music.addEventListener('canplay', restoreAndPlay, { once: true });
      }
    };
    restoreAndPlay();
  } else {
    // No saved time, just try to play (autoplay should handle it)
    music.play().catch(e => console.log('Autoplay prevented:', e));
  }

  btn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      btn.textContent = "🔊";
    } else {
      music.play();
      btn.textContent = "🔇";
    }
    isPlaying = !isPlaying;
  });
});

