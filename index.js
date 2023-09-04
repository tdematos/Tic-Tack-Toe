//create a gamboard using the module pattern
const Gameboard = (() => {
  const boxDivs = document.getElementsByClassName("box");
  const gameBoardArray = Array.prototype.slice.call(boxDivs);

  return {
    createPlayer: function () {
      return new Player(gameBoardArray);
    },
  };
})();

//create a function for creating a player object
function Player(gameBoardArray) {
  // this.name = name;
  let xChoice = "X";
  let oChoice = "O";
  let currentChoice = xChoice;

  this.handleMarking = function () {
    for (let i = 0; i < gameBoardArray.length; i++) {
      const currentBox = gameBoardArray[i];

      currentBox.addEventListener("click", function () {
        if (!currentBox.innerText) {
          const p = document.createElement("p");
          p.innerText = currentChoice;
          currentBox.appendChild(p);

          currentChoice = currentChoice === xChoice ? oChoice : xChoice;

          currentBox.removeEventListener("click", arguments.callee);

          currentPlayer = currentPlayer === player1 ? player2 : player1;
          currentPlayer.handleMarking();
        }
      });
    }
  };
}

//create a function for playing the game using the module pattern
function gameFlow() {
  const player1 = Gameboard.createPlayer();
  const player2 = Gameboard.createPlayer();
  let currentPlayer = player1;

  currentPlayer.handleMarking(currentPlayer);
}

gameFlow();
//a function that allows players to add marks to gamebox

// add plaing method to player object
// create logic for winning patterns 3 in a row
//create an option to choose what player you will be
