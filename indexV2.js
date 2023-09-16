// Create a gamboard using the module pattern
const Gameboard = (() => {
  const boxDivs = document.getElementsByClassName("box");
  const gameBoardArray = Array.prototype.slice.call(boxDivs);

  return {
    gameBoardArray: gameBoardArray,
  };
})();

// Create a factory function function for creating a player object
const createPlayer = (name, markingChoice) => {
  return {
    name: name,
    markingChoice: markingChoice,
    handleMarking: (currentPlayer) => {},
  };
};

const player1 = createPlayer("Player 1");
const player2 = createPlayer("Player 2");

let currentPlayer = player1;

// Create a JS Module pattern for playing the game
const GameFlow = (() => {})();

//create a function for handleing the clicking on the boxes

let currentChoice = "X";
const xChoice = "X";
const oChoice = "O";

function markingBoxes() {
  let filledBoxes = 0;
  const totalBoxes = Gameboard.gameBoardArray.length;

  for (let i = 0; i < Gameboard.gameBoardArray.length; i++) {
    const currentBox = Gameboard.gameBoardArray[i];

    currentBox.addEventListener("click", () => {
      if (filledBoxes >= totalBoxes) {
        return;
      }

      const p = document.createElement("p");
      p.innerText = currentChoice;
      currentBox.appendChild(p);

      filledBoxes++;

      currentChoice = currentChoice === xChoice ? oChoice : xChoice;

      currentPlayer = currentPlayer === player1 ? player2 : player1;

      if (currentPlayer) {
        currentPlayer.handleMarking(currentPlayer);
      }

      checkOutcome(currentChoice, Gameboard.gameBoardArray);
    });
  }
}

markingBoxes();
//create a function for checking winning conditions
function checkOutcome(playerChoice, gameBoardArray) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      gameBoardArray[a].innerText === playerChoice &&
      gameBoardArray[b].innerText === playerChoice &&
      gameBoardArray[c].innerText === playerChoice
    ) {
      updateScores(playerChoice);
      alert("You Win!");
      return;
    }
  }

  if (gameBoardArray.every((box) => box.innerText !== "")) {
    updateScores("Draw");
    alert("It's a Draw");
  }
}
//create a function for updating the score on the scoreboard
let xCounter = 0;
let oCounter = 0;
let drawCounter = 0;

function updateScores(player) {
  if (player === "X") {
    xCounter++;
  } else if (player === "O") {
    oCounter++;
  } else if (player === "Draw") {
    drawCounter++;
  }

  const playerXScoreElement = document.querySelector("#player-x-score");
  const playerOScoreElement = document.querySelector("#player-o-score");
  const drawScoreElement = document.querySelector("#draw-score");

  playerXScoreElement.innerText = xCounter;
  playerOScoreElement.innerText = oCounter;
  drawScoreElement.innerText = drawCounter;
}

//create function for that resets the board when a button is clicked
function resetGame() {
  const resetButton = document.querySelector(".reset-game");

  resetButton.addEventListener("click", function () {
    const allBoxes = Gameboard.gameBoardArray;

    for (let i = 0; i < allBoxes.length; i++) {
      const currentBox = allBoxes[i];
      while (currentBox.firstChild) {
        currentBox.firstChild.remove();
      }
    }
  });
}
resetGame();
