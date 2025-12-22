const form = document.getElementById("voucherForm");
const dateInput = document.getElementById("redeem_date");

// Set minimum date to December 25 of current year
const currentYear = new Date().getFullYear();
const minDate = `${currentYear}-12-25`;
dateInput.setAttribute('min', minDate);

function popConfetti() {
  confetti({
    particleCount: 180,
    spread: 80,
    origin: { y: 0.6 }
  });
}

form.addEventListener("submit", (e) => {
  // Prevent default form submission for local testing
  // Remove this line when deploying to Netlify if you want actual form submission
  e.preventDefault();
  
  const name = form.name.value;
  const date = form.redeem_date.value;
  const request = form.request.value;

  // Pop confetti!
  popConfetti();
  
  // Save current music playback time before navigating
  const music = document.getElementById("backgroundMusic");
  if (music && !music.paused) {
    sessionStorage.setItem('musicCurrentTime', music.currentTime.toString());
  }
  
  // Redirect to success page with data after confetti
  setTimeout(() => {
    const params = new URLSearchParams({
      name: name,
      date: date,
      request: request
    });
    window.location.href = `success.html?${params.toString()}`;
  }, 1000);
});

