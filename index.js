//create a gamboard using the module pattern
const Gameboard = (() => {
  let gameBoardArray = [];
})();

//create a function for creating a player object
function Player(name) {
  this.name = name;
}

//create a function for playing the game using the module pattern
const GameControls = (() => {})();

function addXMarks() {
  const p = document.createElement("p");
  const xMark = (document.querySelector("p").innerText = "X");

  selectBox.addeventlistener("click", function () {});
}

//selecting all of the gameboard boxes
//set html class to the same name
//select class and push objects into the array
