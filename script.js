const gameContainer = document.getElementsByClassName("gameContainer")[0];
gameContainer.style.display = "none";

const playWithXButton = document.getElementById("playWithXButton");
const playWithOButton = document.getElementById("playWithOButton");
const restartGameButton = document.getElementById("restartGame");


playWithXButton.addEventListener("click", function () {
    if (gameContainer.style.display = "none") {
        playWithXButton.style.display = "none";
        playWithOButton.style.display = "none";
      gameContainer.style.display = "block";
      restartGameButton.style.display = "block";
    }
  });

  playWithOButton.addEventListener("click", function () {
    if (gameContainer.style.display = "none") {
        playWithXButton.style.display = "none";
        playWithOButton.style.display = "none";
      gameContainer.style.display = "block";
      restartGameButton.style.display = "block";
    }
  });