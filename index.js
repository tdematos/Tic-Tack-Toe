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
        }
      });
    }
  };
}

const player = Gameboard.createPlayer();
player.handleMarking();
//create a function for playing the game using the module pattern
const GameControls = (() => {})();

//a function that allows players to add marks to gamebox

//create different marks seperate x's and o's
//create logic for placing marks
//if x's go, then it can't go again the next mark will be o
// add plaing method to player object
//figure out how to access variable inside JS module
// create logic for winning patterns 3 in a row
//create an option to choose what player you will be
