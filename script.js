let sketchScreen = document.querySelector('.sketch-screen');

function makeGrid(size) {
  for (let i = 0; i < size; i++) {
    let column = document.createElement('div');
    column.classList.add('column', 'sketchDiv');

    for (let j = 1; j <= size; j++) {
      let row = document.createElement('div');
      row.classList.add('row', 'sketchDiv');
      column.appendChild(row);
    }

    sketchScreen.appendChild(column);
  }
}

makeGrid(16);

sketchScreen.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = '#212121';
});

let classicBtn = document.querySelector('.classic');

classicBtn.addEventListener('click', () => {
  sketchScreen.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = '#212121';
  });
});

let rainbowBtn = document.querySelector('.rainbow');

rainbowBtn.addEventListener('click', () => {
  sketchScreen.addEventListener('mouseover', (e) => {
    const h = Math.floor(Math.random() * 360); // Hue: 0-360
    const s = 100; // Saturation: fixed at 100 for full color
    const l = 85; // Lightness: fixed at 85 for pastel (adjust for different pastel shades)

    rainbowColor = `hsl(${h}deg, ${s}%, ${l}%)`;
    e.target.style.backgroundColor = rainbowColor;
  });
});

let eraserBtn = document.querySelector('.eraser');

eraserBtn.addEventListener('click', () => {
  sketchScreen.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'white';
  });
});

let resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
  location.reload();
});

let gridBtn = document.querySelector('.grid');

gridBtn.addEventListener('click', () => {
  let sketchScreen = document.querySelector('.sketch-screen');
  let size = parseInt(prompt('Enter grid number (1-100)'));

  while (size < 1 || size > 100 || isNaN(size)) {
    size = parseInt(
      prompt('Invalid input. Please enter a number between 1 and 100.')
    );
  }

  sketchScreen.innerHTML = '';
  makeGrid(size);
});
