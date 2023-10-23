// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn");
let restartBtnNode = document.querySelector("#restart-btn");
let startScreenNode = document.querySelector("#start-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");
let isEnemigosMovingRight = true;

let gameObject;

// * STATE MANAGEMENT FUNCTIONS
// Start game
const startGame = () => {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameObject = new Game();
  gameObject.gameLoop();
};

// Restart game
const restartGame = () => {
  gameOverScreenNode.style.display = "none";
  startScreenNode.style.display = "flex";
};

// * EVENT LISTENERS
// Start game pulsando boton start
startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);
// Movimiento jugador
document.addEventListener("keydown", (event) => {
  if (event.code === "KeyS") {
    gameObject.jugador.moveDown();
  } else if (event.code === "KeyW") {
    gameObject.jugador.moveUp();
  } else if (event.code === "KeyA") {
    gameObject.jugador.moveLeft();
  } else if (event.code === "KeyD") {
    gameObject.jugador.moveRight();
  }
});
// Disparar
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    gameObject.jugador.disparar();
  }
});
