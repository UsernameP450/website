let rotateX = 0;
let rotateY = 0;

document.addEventListener("wheel", (event) => {
  const cube = document.getElementById("cube");

  // Adjust rotation based on scroll
  const deltaY = Math.min(Math.max(event.deltaY, -50), 50); // Clamp scroll speed
  const deltaX = Math.min(Math.max(event.deltaX, -50), 50);

  rotateY += deltaY * 0.1; // Rotate horizontally
  rotateX += deltaX * 0.1; // Rotate vertically

  // Apply the transformation
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
