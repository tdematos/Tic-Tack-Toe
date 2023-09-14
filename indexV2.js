document.addEventListener("DOMContentLoaded", () => {
  const Gameboard = (() => {
    const boxDivs = document.getElementsByClassName("box");
    const gameBoardArray = Array.prototype.slice.call(boxDivs);

    return {
      gameBoardArray: gameBoardArray,
    };
  })();

  const createPlayer = (name) => {
    return {
      name: name,
      handleMarking: (currentBox) => {
        console.log("Marking box...");
        if (filledBoxes >= totalBoxes) {
          return;
        }

        const p = document.createElement("p");
        p.innerText = currentChoice;
        currentBox.appendChild(p);

        filledBoxes++;

        currentChoice = currentChoice === xChoice ? oChoice : xChoice;

        currentPlayer = currentPlayer === player1 ? player2 : player1;
      },
    };
  };

  const player1 = createPlayer("Player 1");
  const player2 = createPlayer("Player 2");

  let currentPlayer = player1;
  let currentChoice = "X";
  const xChoice = "X";
  const oChoice = "O";

  let filledBoxes = 0;
  const totalBoxes = Gameboard.gameBoardArray.length;

  const handleBoxClick = (currentBox) => {
    currentPlayer.handleMarking(currentBox);
  };

  for (let i = 0; i < Gameboard.gameBoardArray.length; i++) {
    const currentBox = Gameboard.gameBoardArray[i];

    currentBox.addEventListener("click", () => {
      handleBoxClick(currentBox);
    });
  }

  const GameFlow = (() => {
    let gameIsOver = false;

    const checkForWin = () => {
      console.log("Checking for win...");
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
          gameBoardArray[a].getElementsByTagName("p")[0]?.innerText ===
            currentChoice &&
          gameBoardArray[b].getElementsByTagName("p")[0]?.innerText ===
            currentChoice &&
          gameBoardArray[c].getElementsByTagName("p")[0]?.innerText ===
            currentChoice
        ) {
          alert(`Player ${currentChoice} wins!`);
          gameIsOver = true; // Set gameIsOver to true on win
          return true; // Indicate that a win condition is met
        }
      }

      if (filledBoxes === totalBoxes) {
        alert("It's a draw!");
        gameIsOver = true; // Set gameIsOver to true on draw
        return true; // Indicate that it's a draw
      }

      return false; // No win or draw condition met
    };

    const switchPlayer = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      currentChoice = currentChoice === xChoice ? oChoice : xChoice;
    };

    return {
      playMove: (currentBox) => {
        console.log("playMove called!");
        if (!gameIsOver && filledBoxes < totalBoxes) {
          handleBoxClick(currentBox);
          if (checkForWin()) {
            switchPlayer();
          }
        }
      },
    };
  })();
});
