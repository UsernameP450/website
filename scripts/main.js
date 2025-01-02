function updateDots() {
  const dots = document.querySelectorAll('.dots span');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function goToPage(index) {
  const container = document.getElementById('container');
  const totalPages = document.querySelectorAll('.page').length;

  currentIndex = Math.max(0, Math.min(index, totalPages - 1));
  const percentage = currentIndex * -100;
  container.style.transform = `translateX(${percentage}vw)`;

  updateDots(); // Update dots
}

// Initialize dots
updateDots();
