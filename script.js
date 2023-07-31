const container = document.querySelector('.container');
const resetBtn = document.getElementById('reset-btn');

function createGrid(size) {
  container.innerHTML = ''; // Clear previous grid

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }

  container.style.width = `${size * 20}px`; // Adjust container width based on grid size
}

function addHoverEffect() {
  container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square')) {
      // Generate a random color for each interaction
      const randomColor = getRandomColor();
      e.target.style.backgroundColor = randomColor;
      
      // Apply progressive darkening effect
      const currentColor = e.target.style.backgroundColor;
      const newColor = darkenColor(currentColor);
      e.target.style.backgroundColor = newColor;
    }
  });
}

function getRandomColor() {
  const randomRGB = () => Math.floor(Math.random() * 256);
  return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

function darkenColor(color) {
  const match = color.match(/\d+/g);
  const [r, g, b] = match.map((val) => parseInt(val));
  const darkenedR = Math.floor(r * 0.9);
  const darkenedG = Math.floor(g * 0.9);
  const darkenedB = Math.floor(b * 0.9);
  return `rgb(${darkenedR}, ${darkenedG}, ${darkenedB})`;
}

// Create initial grid
createGrid(16);
addHoverEffect();

// Event listener for reset button
resetBtn.addEventListener('click', () => {
  let newSize = prompt('Enter the number of squares per side (1 - 100):');
  newSize = parseInt(newSize);

  if (Number.isInteger(newSize) && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
    addHoverEffect();
  } else {
    alert('Invalid input! Please enter a number between 1 and 100.');
  }
});
