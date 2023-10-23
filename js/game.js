// Class Game
class Game {
  // Constructor
  constructor() {
    // Jugador
    this.jugador = new Jugador();
    // Enemigos
    this.enemigos = new Enemigos();
    // Disparos
    this.disparosEnemigosArr = [];
    this.disparosJugadorArr = [];
    // Timer
    this.timer = 0;
    this.isGameOn = true;
  }

  // Metodos

  // GameLoop
  gameLoop = () => {
    this.enemigos.moveEnemigos();
    this.enemigos.enemigosColisionCheck();
    this.disparosEenemigosAppear();
    this.disparosEnemigosArr.forEach((eachDisparo) => {
      eachDisparo.disparosMovimientoAutoEnemigos();
    });
    this.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.disparosMovimientoAutoJugador();
    });
    this.colisionCheckJugadorEnemigos();
    this.colisionCheckDisparosEnemigosJugador();
    // Recursion
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  // GameOver
  gameOver = () => {
    if (this.jugador.vidas <= 0) {
      this.isGameOn = false;
      gameScreenNode.style.display = "none";
      gameOverScreenNode.style.display = "flex";
      this.jugadorEnemigosDestroy();
      this.jugador.vidas = 3;
    }
  };

  // Colisiones
  colisionCheckJugadorEnemigos = () => {
    if (
      this.enemigos.x < this.jugador.x + this.jugador.w &&
      this.enemigos.x + this.enemigos.w > this.jugador.x &&
      this.enemigos.y < this.jugador.y + this.jugador.h &&
      this.enemigos.y + this.enemigos.h > this.jugador.y
    ) {
      this.jugador.recieveJugadorDmg(this.enemigos.dmg);
      this.jugador.x = 210;
      this.jugador.y = 600;
      this.jugador.node.style.left = `${this.jugador.x}px`;
      this.jugador.node.style.top = `${this.jugador.y}px`;
    }
  };
  colisionCheckDisparosEnemigosJugador = () => {
    this.disparosEnemigosArr.forEach((eachDisparo) => {
      if (
        eachDisparo.x < this.jugador.x + this.jugador.w &&
        eachDisparo.x + eachDisparo.w > this.jugador.x &&
        eachDisparo.y < this.jugador.y + this.jugador.h &&
        eachDisparo.y + eachDisparo.h > this.jugador.y
      ) {
        this.jugador.recieveJugadorDmg(eachDisparo.atackEnemigos());
        eachDisparo.node.remove();
      }
    });
    this.disparosJugadorArr.forEach((eachDisparo) => {
      if (
        eachDisparo.x < this.enemigos.x + this.enemigos.w &&
        eachDisparo.x + eachDisparo.w > this.enemigos.x &&
        eachDisparo.y < this.enemigos.y + this.enemigos.h &&
        eachDisparo.y + eachDisparo.h > this.enemigos.y
      ) {
        eachDisparo.node.remove();
      }
    });
  };

  // Eliminar elementos
  jugadorEnemigosDestroy = () => {
    this.jugador.node.remove();
    this.enemigos.node.remove();
    this.disparosEnemigosArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    this.disparosEnemigosArr = [];
    this.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    this.disparosJugadorArr = [];
  };

  // Disparo enemigo
  disparosEenemigosAppear = () => {
    if (this.timer % 120 === 0) {
      let xPosition = this.enemigos.x;
      let newDisparosEnemigos = new DisparosEnemigos(xPosition);
      this.disparosEnemigosArr.push(newDisparosEnemigos);
    }
  };
  disparosJugadorAppear = () => {
    let xPosition = this.jugador.x;
    let newDisparosJugador = new DisparosJugador(xPosition);
    this.disparosJugadorArr.push(newDisparosJugador);
  };
}

// BONUS

// Score
// Vidas
// Sonido
