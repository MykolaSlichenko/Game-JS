const gamesBoardContainer = document.querySelector('#gamesboard-container');
const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');

// Option choosing
let angle = 0;
function flip() {
  //if (angle === 0) {
  //angle = 90;
  //} else {
  //angle = 0;
  //}
  angle = angle === 0 ? 90 : 0;
  const optionShips = Array.from(optionContainer.children);
  optionShips.forEach(
    (optionShip) => (optionShip.style.transform = `rotate(${angle}deg)`)
  );
}

// Creating Boards
const width = 10;

function createBoard(color) {
  const gameBoardContainer = document.createElement('div');
  gameBoardContainer.classList.add('game-board');
  gameBoardContainer.style.backgroundColor = color;

  gamesBoardContainer.append(gameBoardContainer);
}

createBoard('olive');
createBoard('darkGreen');

flipButton.addEventListener('click', flip);
