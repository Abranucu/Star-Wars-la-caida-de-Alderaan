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
    // GameOn
    this.isGameOn = true;
    // Score
    this.score = 0;
  }

  // Metodos

  // GameLoop
  gameLoop = () => {
    this.musicaFondoOn();
    this.enemigos.moveEnemigos();
    this.enemigos.enemigosColisionCheck();
    this.disparosEenemigosAppear();
    this.jugador.actualizarPosicionJugador();
    this.disparosEnemigosArr.forEach((eachDisparo) => {
      eachDisparo.disparosMovimientoAutoEnemigos();
    });
    this.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.disparosMovimientoAutoJugador();
    });
    this.vidas();
    this.scoreGameOVer();
    this.actualizarScore();
    this.colisionCheckJugadorEnemigos();
    this.colisionCheckDisparosEnemigosJugador();
    this.gameOver();

    // Recursion
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  // Vidas
  vidas = () => {
    vidasH1Node.innerText = `X ${this.jugador.vidas}`;
  };

  // Score
  actualizarScore = () => {
    scoreH1Node.innerText = `SCORE:\n${this.score}`;
  };

  // Score gameover screen
  scoreGameOVer = () => {
    h1GameoverScore.innerText = `${this.score}`;
  };

  // GameOver
  gameOver = () => {
    if (this.jugador.vidas <= 0) {
      this.isGameOn = false;
      gameScreenNode.style.display = "none";
      gameOverScreenNode.style.display = "flex";
      this.jugadorEnemigosDestroy();
      this.jugador.vidas = 3;
      setTimeout(() => {
        sonidoGameover.volume = 0.2;
        sonidoGameover.play();
      }, 1000);
      musicaFondo.pause();
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
      sonidoExplosionEnemigo.volume = 0.3;
      sonidoExplosionEnemigo.currentTime = 0;
      sonidoExplosionEnemigo.play();
      sonidoExplosionJugador.volume = 0.3;
      sonidoExplosionJugador.currentTime = 0;
      sonidoExplosionJugador.play();
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
        this.jugador.recieveJugadorDmg(eachDisparo.dmg);
        sonidoExplosionJugador.volume = 1;
        sonidoExplosionJugador.currentTime = 0;
        sonidoExplosionJugador.play();
        let index = this.disparosEnemigosArr.indexOf(eachDisparo);
        if (index !== -1) {
          this.disparosEnemigosArr.splice(index, 1);
        }
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
        let index = this.disparosJugadorArr.indexOf(eachDisparo);
        sonidoExplosionEnemigo.volume = 0.3;
        sonidoExplosionEnemigo.currentTime = 0;
        sonidoExplosionEnemigo.play();
        if (index !== -1) {
          this.disparosJugadorArr.splice(index, 1);
        }
        this.score += eachDisparo.dmg;
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
      sonidosDisparosEnemigo.volume = 0.2;
      sonidosDisparosEnemigo.currentTime = 0;
      sonidosDisparosEnemigo.play();
    }
  };
  disparosJugadorAppear = () => {
    let yPosition = this.jugador.y;
    let xPosition = this.jugador.x;
    let newDisparosJugador = new DisparosJugador(xPosition, yPosition);
    this.disparosJugadorArr.push(newDisparosJugador);
  };

  // Sonido
  musicaFondoOn = () => {
    musicaFondo.volume = 0.4;
    musicaFondo.play();
  };
}

// BONUS
