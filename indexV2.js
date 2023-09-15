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
    });
  }
}

markingBoxes();
