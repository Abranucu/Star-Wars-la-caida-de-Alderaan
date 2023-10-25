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
let sonidoGameover = new Audio("./sonidos/darth-vader-no.mp3");
let sonidoExplosionEnemigo = new Audio("./sonidos/explosion-enemigo.mp3");
let sonidoExplosionJugador = new Audio("./sonidos/explosion-jugador.mp3");
let musicaFondo = document.getElementById("musica-fondo");
let btnMusicaFondo = document.getElementById("btn-musica-fondo");
let btnEfectosSonido = document.getElementById("btn-efectos");
let h1GameoverScore = document.getElementById("score-gameover");

let canShoot = true;
let lastShootTime = 0;
const shootCooldown = 200;

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
  gameObject.score = 0;
};

// * EVENT LISTENERS
// Start game pulsando boton start
startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);

// Movimiento jugador
document.addEventListener("keydown", (event) => {
  if (event.code === "KeyS") {
    gameObject.jugador.isMovingDown = true;
  } else if (event.code === "KeyW") {
    gameObject.jugador.isMovingUp = true;
  } else if (event.code === "KeyA") {
    gameObject.jugador.isMovingLeft = true;
  } else if (event.code === "KeyD") {
    gameObject.jugador.isMovingRight = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "KeyS") {
    gameObject.jugador.isMovingDown = false;
  } else if (event.code === "KeyW") {
    gameObject.jugador.isMovingUp = false;
  } else if (event.code === "KeyA") {
    gameObject.jugador.isMovingLeft = false;
  } else if (event.code === "KeyD") {
    gameObject.jugador.isMovingRight = false;
  }
});

// Disparar
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && canShoot) {
    const currentTime = Date.now();
    if (currentTime - lastShootTime >= shootCooldown) {
      gameObject.disparosJugadorAppear();
      sonidoDisparosJugador.volume = 0.3;
      sonidoDisparosJugador.currentTime = 0;
      sonidoDisparosJugador.play();
      lastShootTime = currentTime;
    }
  }
});
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    canShoot = true;
  }
});

// Sonido
btnMusicaFondo.addEventListener("click", function () {
  if (musicaFondo.muted && btnMusicaFondo.classList.contains("activo")) {
    musicaFondo.muted = false;
    btnMusicaFondo.classList.remove("activo");
    this.blur();
  } else {
    musicaFondo.muted = true;
    btnMusicaFondo.classList.add("activo");
    this.blur();
  }
});
btnEfectosSonido.addEventListener("click", function () {
  if (
    sonidoDisparosJugador.muted &&
    sonidosDisparosEnemigo.muted &&
    sonidoGameover.muted &&
    sonidoExplosionEnemigo.muted &&
    sonidoExplosionJugador.muted &&
    btnEfectosSonido.classList.contains("activo")
  ) {
    sonidoDisparosJugador.muted = false;
    sonidosDisparosEnemigo.muted = false;
    sonidoGameover.muted = false;
    sonidoExplosionEnemigo.muted = false;
    sonidoExplosionJugador.muted = false;
    btnEfectosSonido.classList.remove("activo");
    this.blur();
  } else {
    sonidoDisparosJugador.muted = true;
    sonidosDisparosEnemigo.muted = true;
    sonidoGameover.muted = true;
    sonidoExplosionEnemigo.muted = true;
    sonidoExplosionJugador.muted = true;
    btnEfectosSonido.classList.add("activo");
    this.blur();
  }
});
