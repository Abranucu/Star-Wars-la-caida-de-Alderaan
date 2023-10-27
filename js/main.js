// * DOM ELEMENTS & GLOBAL VARIABLES
let startBtnNode = document.querySelector("#start-btn");
let restartBtnNode = document.querySelector("#restart-btn");
let continueBtnNode = document.querySelector("#continue-btn");
let startScreenNode = document.querySelector("#start-screen");
let gameScreenNode = document.querySelector("#game-screen");
let transitionScreenNode = document.querySelector("#transition-screen");
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
let btnPause = document.getElementById("btn-pause");
let h1GameoverScore = document.getElementById("score-gameover");
let explosionGifNormal = document.getElementById("explosion-normal");
let imgTransitionText = document.getElementById("transition-text");
let imgTransitionBoss = document.getElementById("boss-image");
let videoFinal = document.getElementById("video-final");

let countLvl = 0;
let moveInterval;
let canShoot = true;
let lastShootTime = 0;
const shootCooldown = 300;
let tiempoTranscurrido = 0;

let gameObject;

// * STATE MANAGEMENT FUNCTIONS
// Start game
const startGame = () => {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameObject = new Game();
  gameObject.gameLoop();
  gameObject.startTimer();
};

// Restart game
const restartGame = () => {
  gameOverScreenNode.style.display = "none";
  startScreenNode.style.display = "flex";
  gameObject.score = 0;
};

// Continue to battle
const continueToBattle = () => {
  if (countLvl === 0) {
    gameObject.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    gameObject.enemigosDestroy();
    transitionScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    imgTransitionText.src = "./images/lvl-2.png";
    imgTransitionText.style.whidth = "600px";
    imgTransitionText.style.height = "98px";
    imgTransitionBoss.style.visibility = "hidden";
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    gameObject.startTimer();
    gameObject.enemigos = new Enemigos("jefes", 1);
    gameObject.jugador.x = 360;
    gameObject.jugador.y = 870;
    gameObject.jugador.node.style.left = `${gameObject.jugador.x}px`;
    gameObject.jugador.node.style.top = `${gameObject.jugador.y}px`;
    return countLvl++;
  } else if (countLvl === 1) {
    gameObject.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    gameObject.enemigosDestroy();
    transitionScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    imgTransitionBoss.src = "./images/imperial-star-destroyer.png";
    imgTransitionBoss.style.visibility = "visible";
    imgTransitionBoss.style.whidth = "580px";
    imgTransitionBoss.style.height = "600px";
    imgTransitionText.src = "./images/boss-battle.png";
    imgTransitionText.style.whidth = "600px";
    imgTransitionText.style.height = "59px";
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    gameObject.startTimer();
    gameObject.enemigos = new Enemigos("enemigos", 2);
    gameObject.jugador.x = 360;
    gameObject.jugador.y = 870;
    gameObject.jugador.node.style.left = `${gameObject.jugador.x}px`;
    gameObject.jugador.node.style.top = `${gameObject.jugador.y}px`;
    return countLvl++;
  } else if (countLvl === 2) {
    gameObject.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    gameObject.enemigosDestroy();
    transitionScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    imgTransitionBoss.src = "./images/imperial-star-destroyer.png";
    imgTransitionBoss.style.visibility = "hidden";
    imgTransitionBoss.style.whidth = "580px";
    imgTransitionBoss.style.height = "600px";
    imgTransitionText.src = "./images/lvl-3.png";
    imgTransitionText.style.whidth = "600px";
    imgTransitionText.style.height = "100px";
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    gameObject.startTimer();
    gameObject.enemigos = new Enemigos("jefes", 2);
    gameObject.jugador.x = 360;
    gameObject.jugador.y = 870;
    gameObject.jugador.node.style.left = `${gameObject.jugador.x}px`;
    gameObject.jugador.node.style.top = `${gameObject.jugador.y}px`;
    return countLvl++;
  } else if (countLvl === 3) {
    gameObject.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    gameObject.enemigosDestroy();
    transitionScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    imgTransitionBoss.src = "./images/death-star-transition-img.png";
    imgTransitionBoss.style.visibility = "visible";
    imgTransitionBoss.style.whidth = "600px";
    imgTransitionBoss.style.height = "497px";
    imgTransitionText.src = "./images/boss-battle.png";
    imgTransitionText.style.whidth = "600px";
    imgTransitionText.style.height = "59px";
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    gameObject.startTimer();
    gameObject.enemigos = new Enemigos("enemigos", 3);
    gameObject.jugador.x = 360;
    gameObject.jugador.y = 870;
    gameObject.jugador.node.style.left = `${gameObject.jugador.x}px`;
    gameObject.jugador.node.style.top = `${gameObject.jugador.y}px`;
    return countLvl++;
  } else if (countLvl === 4) {
    gameObject.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    gameObject.enemigosDestroy();
    transitionScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    videoFinal.style.display = "block";
    videoFinal.play();
    videoFinal.volume = 0.1;
    imgTransitionBoss.style.display = "none";
    imgTransitionText.style.display = "none";
    continueBtnNode.style.display = "none";
    setTimeout(function () {
      videoFinal.style.display = "none";
      continueBtnNode.style.display = "block";
      imgTransitionText.style.display = "block";
      imgTransitionText.src = "./images/you-win.png";
      imgTransitionText.style.whidth = "600px";
      imgTransitionText.style.height = "600px";
    }, 12000);
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    gameObject.startTimer();
    gameObject.enemigos = new Enemigos("jefes", 3);
    gameObject.jugador.x = 360;
    gameObject.jugador.y = 870;
    gameObject.jugador.node.style.left = `${gameObject.jugador.x}px`;
    gameObject.jugador.node.style.top = `${gameObject.jugador.y}px`;
    return countLvl++;
  } else {
    gameObject.enemigosDestroy();
    gameObject.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    transitionScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    gameObject.startTimer();
    let numRandom = Math.floor(Math.random() * 3) + 1;
    if (numRandom === 1) {
      gameObject.enemigos = new Enemigos("enemigos", 1);
    } else if (numRandom === 2) {
      gameObject.enemigos = new Enemigos("enemigos", 2);
    } else if (numRandom === 3) {
      gameObject.enemigos = new Enemigos("enemigos", 3);
    }
    gameObject.jugador.x = 360;
    gameObject.jugador.y = 870;
    gameObject.jugador.node.style.left = `${gameObject.jugador.x}px`;
    gameObject.jugador.node.style.top = `${gameObject.jugador.y}px`;
    return countLvl++;
  }
};

// * EVENT LISTENERS
startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", restartGame);
continueBtnNode.addEventListener("click", continueToBattle);

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
    event.preventDefault();
    const currentTime = Date.now();
    if (currentTime - lastShootTime >= shootCooldown) {
      gameObject.disparosJugadorAppear();
      sonidoDisparosJugador.volume = 0.1;
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

btnPause.addEventListener("click", function () {
  if (gameObject.isGameOn === true) {
    gameObject.isGameOn = false;
    btnPause.classList.remove("activo");
    this.blur();
  } else {
    gameObject.isGameOn = true;
    gameObject.gameLoop();
    gameObject.startTimer();
    btnPause.classList.add("activo");
    this.blur();
  }
});
