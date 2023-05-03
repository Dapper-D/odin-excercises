function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(\${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(\${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    container.appendChild(square);
  }
}

function getRandomColor() {
  return `rgb(\${Math.random() * 255}, \${Math.random() * 255}, \${Math.random() * 255})`;
}

function changeColor(event) {
  event.target.style.backgroundColor = getRandomColor();
}

document.getElementById("newGrid").addEventListener("click", () => {
  const input = prompt("Enter the number of squares per side (1-100):");
  const newSize = parseInt(input);

  if (!isNaN(newSize)) {
    createGrid(Math.min(Math.max(newSize, 1), 100));
  }
});

createGrid(16);
