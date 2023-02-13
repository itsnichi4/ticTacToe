const gameContainer = document.getElementsByClassName("gameContainer")[0];
gameContainer.style.display = "none";

const playWithXButton = document.getElementById("playWithXButton");
const playWithOButton = document.getElementById("playWithOButton");
const restartGameButton = document.getElementById("restartGame");

function handlePlayWithXButtonClick() {
  if (gameContainer.style.display === "none") {
    playWithXButton.style.display = "none";
    playWithOButton.style.display = "none";
    gameContainer.style.display = "block";
    restartGameButton.style.display = "block";
  }
}

function handlePlayWithOButtonClick() {
  if (gameContainer.style.display === "none") {
    playWithXButton.style.display = "none";
    playWithOButton.style.display = "none";
    gameContainer.style.display = "block";
    restartGameButton.style.display = "block";
  }
}

playWithXButton.addEventListener("click", handlePlayWithXButtonClick);
playWithOButton.addEventListener("click", handlePlayWithOButtonClick);

function createPlayer(name, symbol) {
  return {
    name: name,
    symbol: symbol,
  };
}
const player1 = createPlayer("Player 1", "");
const player2 = createPlayer("Player 2", "");

function playGame(player1, player2, startingPlayer) {
  console.log(`player 1 symbol is ${player1.symbol}`);
  console.log(`player 2 symbol is ${player2.symbol}`);

  const cells = document.getElementsByClassName("cell");

  let currentPlayer = startingPlayer;

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
      const divX = this.getElementsByClassName("X")[0];
      const divO = this.getElementsByClassName("O")[0];

      if (divX.style.display === "block" || divO.style.display === "block") {
        return;
      }

      if (currentPlayer === player1.symbol) {
        divX.style.display = "block";
        divO.style.display = "none";
        currentPlayer = player2.symbol;
      } else {
        divX.style.display = "none";
        divO.style.display = "block";
        currentPlayer = player1.symbol;
      }
      checkWin();
      
    });
  }
}

function playWithX() {
  player1.symbol = "X";
  player2.symbol = "O";
  playGame(player1, player2, player1.symbol);
}

function playWithO() {
  player1.symbol = "O";
  player2.symbol = "X";
  playGame(player1, player2, player2.symbol);
}

document.getElementById("playWithXButton").addEventListener("click", playWithX);
document.getElementById("playWithOButton").addEventListener("click", playWithO);

let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin() {
  const cells = document.getElementsByClassName("cell");
  let win = false;
  let winner = "";

  winningCombinations.forEach((combination) => {
    const cell1 =
      cells[combination[0]].getElementsByClassName("X")[0].style.display;
    const cell2 =
      cells[combination[1]].getElementsByClassName("X")[0].style.display;
    const cell3 =
      cells[combination[2]].getElementsByClassName("X")[0].style.display;

    if (cell1 === "block" && cell2 === "block" && cell3 === "block") {
      win = true;
      winner = "X";
      
    }

    const cell4 =
      cells[combination[0]].getElementsByClassName("O")[0].style.display;
    const cell5 =
      cells[combination[1]].getElementsByClassName("O")[0].style.display;
    const cell6 =
      cells[combination[2]].getElementsByClassName("O")[0].style.display;

    if (cell4 === "block" && cell5 === "block" && cell6 === "block") {
      win = true;
      winner = "O";
    }

  });

  if (win) {
    console.log(`The winner is ${winner}`);
    alert(`The winner is ${winner}`);
    restartGame();
  } else {
    checkDraw();
  }
}

function checkDraw() {
  const cells = document.querySelectorAll(".cell");
  let filledCount = 0;
  for (const cell of cells) {
    const x = cell.querySelector(".X");
    const o = cell.querySelector(".O");
    if (x.style.display === "block" || o.style.display === "block") {
      filledCount++;
    }
  }
  if (filledCount === 9) {
    alert("It's a draw");
    restartGame();
  }
}

    function restartGame() {
      window.location.reload();
    }
    
    restartGameButton.addEventListener("click", function () {
      window.location.reload();
    });