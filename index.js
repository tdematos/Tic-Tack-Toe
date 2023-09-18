document.addEventListener("DOMContentLoaded", function () {
  // Create a gamboard using the module pattern
  const Gameboard = (() => {
    const boxDivs = document.getElementsByClassName("box");
    const gameBoardArray = Array.prototype.slice.call(boxDivs);

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

    return {
      createPlayer: function () {
        return new Player(gameBoardArray, updateScores);
      },
      getGameBoardArray: function () {
        return gameBoardArray;
      },
    };
  })();

  // Create a function for creating a player object
  function Player(gameBoardArray, updateScores) {
    let xChoice = "X";
    let oChoice = "O";
    let currentChoice = xChoice;

    let player1;
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
          currentPlayer.handleMarking(currentPlayer);
        }
      }
    }

    this.handleMarking = function (player) {
      if (!player1) {
        player1 = this;
      } else if (!player2) {
        player2 = this;
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
      checkOutcome(currentChoice);
    };
  }

  // Create a JS Module pattern for playing the game
  const GameFlow = (() => {
    const player1 = Gameboard.createPlayer();
    const player2 = Gameboard.createPlayer();
    let currentPlayer = player1;

    currentPlayer.handleMarking(currentPlayer, Gameboard.updateScores);
  })();

  //create a function for reseting the game
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
  resetGame();
});

//create winning condition modal
//create an option to choose what player you will be
// Make code mobile friendly
//refactor code
//add jquery to the code
//Change color of x's in box to be green and o's to be pink
