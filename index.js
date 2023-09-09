// Create a gamboard using the module pattern
const Gameboard = (() => {
  const boxDivs = document.getElementsByClassName("box");
  const gameBoardArray = Array.prototype.slice.call(boxDivs);
  console.log(gameBoardArray);

  return {
    createPlayer: function () {
      return new Player(gameBoardArray);
    },
    getGameBoardArray: function () {
      return gameBoardArray;
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

    function checkOutcome(playerChoice) {
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
          alert("You Win!");
          return;
        }
      }

      if (gameBoardArray.every((box) => box.innerText !== "")) {
        alert("It's a Draw");
      }
    }
    checkOutcome(currentChoice);
  };
  resetGame();
}

// Create a JS Module pattern for playing the game
const GameFlow = (() => {
  const player1 = Gameboard.createPlayer();
  const player2 = Gameboard.createPlayer();
  let currentPlayer = player1;

  currentPlayer.handleMarking(currentPlayer);
})();

//create button for reseting the game
function resetGame() {
  const resetButton = document.querySelector(".reset-game");

  resetButton.addEventListener("click", function () {
    const allBoxes = Gameboard.getGameBoardArray();

    for (let i = 0; i < allBoxes.length; i++) {
      const currentBox = allBoxes[i];
      while (currentBox.firstChild) {
        currentBox.firstChild.remove();
      }
    }
  });
}

//create an option to choose what player you will be

//create function that checks for draw
//Make win counter functional
//create winning condition modal
