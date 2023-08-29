//create a gamboard using the module pattern
const Gameboard = (() => {
  const boxDivs = document.getElementsByClassName("box");
  const gameBoardArray = Array.prototype.slice.call(boxDivs);
})();

//create a function for creating a player object
function Player(name) {
  this.name = name;
}

//create a function for playing the game using the module pattern
const GameControls = (() => {})();

//a function that allows players to add marks to gamebox
function addXMarks() {}

const boxDivs = document.getElementsByClassName("box");
const gameBoardArray = Array.prototype.slice.call(boxDivs);

for (let i = 0; i < gameBoardArray.length; i++) {
  const currentBox = gameBoardArray[i];

  currentBox.addEventListener("click", function () {
    if (!currentBox.innerText) {
      const p = document.createElement("p");
      p.innerText = "X";
      currentBox.appendChild(p);
    }
  });
}

//create different marks seperate x's and o's
//create logic for placing marks
//if x's go, then it can't go again the next mark will be o
// add plaing method to player object
//figure out how to access variable inside JS module
// create logic for winning patterns 3 in a row
//create an option to choose what player you will be
