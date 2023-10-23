// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn");
let restartBtnNode = document.querySelector("#restart-btn");
let startScreenNode = document.querySelector("#start-screen");
let gameScreenNode = document.querySelector("#game-screen");
let gameBoxNode = document.querySelector("#game-box");
let gameOverScreenNode = document.querySelector("#gameover-screen");
let vidasH1Node = document.querySelector("#text-vidas");
let scoreH1Node = document.querySelector("#text-score");
let isEnemigosMovingRight = true;

let sonidoDisparosJugador = new Audio("./sonidos/disparo-laser.mp3");
let sonidosDisparosEnemigo = new Audio("./sonidos/bomba-laser.mp3");
let sonidoGameover = new Audio("./sonidos/game-over.mp3");
let sonidoExplosion = new Audio("./sonidos/explosion.mp3");
let musicaFondo = document.getElementById("musica-fondo");
let score;
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
    gameObject.disparosJugadorAppear();
    sonidoDisparosJugador.currentTime = 0;
    sonidoDisparosJugador.play();
  }
});
