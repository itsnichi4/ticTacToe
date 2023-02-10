const gameContainer = document.getElementsByClassName("gameContainer")[0];
gameContainer.style.display = "none";

const playWithXButton = document.getElementById("playWithXButton");
const playWithOButton = document.getElementById("playWithOButton");
const restartGameButton = document.getElementById("restartGame");

playWithXButton.addEventListener("click", function () {
  if ((gameContainer.style.display = "none")) {
    playWithXButton.style.display = "none";
    playWithOButton.style.display = "none";
    gameContainer.style.display = "block";
    restartGameButton.style.display = "block";
  }
});

playWithOButton.addEventListener("click", function () {
  if ((gameContainer.style.display = "none")) {
    playWithXButton.style.display = "none";
    playWithOButton.style.display = "none";
    gameContainer.style.display = "block";
    restartGameButton.style.display = "block";
  }
});

function createPlayer(name, symbol) {
  return {
    name: name,
    symbol: symbol,
  };
}
const player1 = createPlayer("Player 1", "");
const player2 = createPlayer("Player 2", "");


function playGame (player1, player2) {
  console.log(`player 1 symbol is ${player1.symbol}`)
  console.log(`player 2 symbol is ${player2.symbol}`)

  const cells = document.getElementsByClassName("cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
      const divX = this.getElementsByClassName("X")[0];
      const divO = this.getElementsByClassName("O")[0];

      if (player1.symbol === "X") {
        divX.style.display = "block";
        divO.style.display = "none";
      } else {
        divX.style.display = "none";
        divO.style.display = "block";
      }
    });
  }
}

document
  .getElementById("playWithXButton")
  .addEventListener("click", function () {
    player1.symbol = "X";
    player2.symbol = "O";
    playGame(player1, player2);
  });

document
  .getElementById("playWithOButton")
  .addEventListener("click", function () {
    player1.symbol = "O";
    player2.symbol = "X";
    playGame(player1, player2);
  });

