// Create a single snowflake
function createSnowflake() {
  const snowContainer = document.querySelector('.snow-container');
  if (!snowContainer) return;

  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.innerHTML = '❄';
  
  // Random horizontal position, start from top
  snowflake.style.left = Math.random() * 100 + '%';
  snowflake.style.top = '-20px';
  snowflake.style.opacity = Math.random() * 0.7 + 0.3;
  snowflake.style.fontSize = (Math.random() * 15 + 15) + 'px';
  snowflake.style.animationDuration = (Math.random() * 8 + 8) + 's'; // 8-16 seconds
  
  snowContainer.appendChild(snowflake);
  
  // Remove snowflake after it finishes falling to prevent memory buildup
  setTimeout(() => {
    if (snowflake.parentNode) {
      snowflake.parentNode.removeChild(snowflake);
    }
  }, parseFloat(snowflake.style.animationDuration) * 1000 + 1000);
}

// Initialize continuous snow
function initSnow() {
  const snowContainer = document.querySelector('.snow-container');
  if (!snowContainer) return;

  // Create initial batch of snowflakes
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createSnowflake();
    }, i * 200); // Stagger initial creation
  }

  // Continuously create new snowflakes
  setInterval(() => {
    createSnowflake();
  }, 300); // Create a new snowflake every 300ms
}

// Initialize snow when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSnow);
} else {
  initSnow();
}

