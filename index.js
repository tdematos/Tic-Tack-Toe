// Create a gamboard using the module pattern
const Gameboard = (() => {
  const boxDivs = document.getElementsByClassName("box");
  const gameBoardArray = Array.prototype.slice.call(boxDivs);

  return {
    createPlayer: function () {
      return new Player(gameBoardArray);
    },
  };
})();

// Create a function for creating a player object
function Player(gameBoardArray) {
  let xChoice = "X";
  let oChoice = "O";
  let currentChoice = xChoice;

  let player1; // Declare player1 and player2 variables
  let player2;

  function clickHandler() {
    if (!this.innerText) {
      const p = document.createElement("p");
      p.innerText = currentChoice;
      this.appendChild(p);

      currentChoice = currentChoice === xChoice ? oChoice : xChoice;

      this.removeEventListener("click", clickHandler);
      currentPlayer = currentPlayer === player1 ? player2 : player1;

      if (currentPlayer) {
        currentPlayer.handleMarking(currentPlayer); // Call handleMarking with the current player if defined
      }
    }
  }

  this.handleMarking = function (player) {
    if (!player1) {
      player1 = this; // Initialize player1 on first call
    } else if (!player2) {
      player2 = this; // Initialize player2 on second call
    }

    currentPlayer = this;

    for (let i = 0; i < gameBoardArray.length; i++) {
      const currentBox = gameBoardArray[i];

      currentBox.addEventListener("click", clickHandler);
    }
  };
}

// Create a function for playing the game using the module pattern
const GameFlow = (() => {
  const player1 = Gameboard.createPlayer();
  const player2 = Gameboard.createPlayer();
  let currentPlayer = player1;

  currentPlayer.handleMarking(currentPlayer);
})();

// create logic for winning patterns 3 in a row
//create an option to choose what player you will be
//create button for reseting the game
