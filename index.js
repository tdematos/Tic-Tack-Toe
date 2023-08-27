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
    const p = document.createElement("p");
    // const xMark = (document.querySelector("p")

    currentBox.appendChild(p);
    p.innerText = "X";
  });
}
