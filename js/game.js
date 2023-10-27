// Class Game
class Game {
  // Constructor
  constructor() {
    // Jugador
    this.jugador = new Jugador();
    // Enemigos
    this.enemigos = new Enemigos("enemigos", 1);
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
    this.enemigos.aceleracionEnemigos();
    this.enemigos.moveEnemigosIzquierdaDerecha();
    this.enemigos.moveEnemigosZigzag();
    this.enemigos.moverEnemigosRandom();
    this.enemigos.enemigosColisionCheckIzquierdaDerecha();
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
    this.transitionScreen();
    this.gameOver();
    this.reponerEnemigo()

    // Recursion
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  // Vidas
  vidas = () => {
    vidasH1Node.innerText = `${this.jugador.vidas}`;
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
      this.enemigosDestroy();
      this.jugadorDestroy();
      this.jugador.vidas = 3;
      tiempoTranscurrido = 0;
      setTimeout(() => {
        sonidoGameover.volume = 0.1;
        sonidoGameover.play();
      }, 1000);
      musicaFondo.pause();
    }
  };

  // Transition screen
  transitionScreen = () => {
    if (this.enemigos.hp <= 0 && countLvl <= 5) {
      this.score += this.enemigos.score;
      gameScreenNode.style.display = "none";
      transitionScreenNode.style.display = "flex";
      this.isGameOn = false;
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
      this.jugador.jugadorRecieveDmg(this.enemigos.dmg);
      this.jugador.x = 360;
      this.jugador.y = 870;
      this.jugador.node.style.left = `${this.jugador.x}px`;
      this.jugador.node.style.top = `${this.jugador.y}px`;
      sonidoExplosionEnemigo.volume = 0.1;
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
        this.jugador.jugadorRecieveDmg(eachDisparo.dmg);
        sonidoExplosionJugador.volume = 0.3;
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
        this.enemigos.enemigosRecieveDmg(eachDisparo.dmg);
        let index = this.disparosJugadorArr.indexOf(eachDisparo);
        sonidoExplosionEnemigo.volume = 0.1;
        sonidoExplosionEnemigo.currentTime = 0;
        sonidoExplosionEnemigo.play();
        if (index !== -1) {
          this.disparosJugadorArr.splice(index, 1);
        }
        this.score += eachDisparo.dmg;
        this.reproducirExplosionGifNormal();
        eachDisparo.node.remove();
      }
    });
  };

  // Eliminar elementos
  enemigosDestroy = () => {
    this.enemigos.node.remove();
    this.disparosEnemigosArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    this.disparosEnemigosArr = [];
  };

  jugadorDestroy = () => {
    this.jugador.node.remove();
    this.disparosJugadorArr.forEach((eachDisparo) => {
      eachDisparo.node.remove();
    });
    this.disparosJugadorArr = [];
  }

  // Disparo enemigo
  disparosEenemigosAppear = () => {
    if (this.timer % 150 === 0 && tiempoTranscurrido <= 60) {
      let xPosition = this.enemigos.x;
      let yPosition = this.enemigos.y;
      let newDisparosEnemigos = new DisparosEnemigos(xPosition, yPosition);
      this.disparosEnemigosArr.push(newDisparosEnemigos);
      sonidosDisparosEnemigo.volume = 0.1;
      sonidosDisparosEnemigo.currentTime = 0;
      sonidosDisparosEnemigo.play();
    } else if (this.timer % 120 === 0 && tiempoTranscurrido >= 60) {
      let xPosition = this.enemigos.x;
      let yPosition = this.enemigos.y;
      let newDisparosEnemigos = new DisparosEnemigos(xPosition, yPosition);
      this.disparosEnemigosArr.push(newDisparosEnemigos);
      sonidosDisparosEnemigo.volume = 0.1;
      sonidosDisparosEnemigo.currentTime = 0;
      sonidosDisparosEnemigo.play();
    } else if (this.timer % 90 === 0 && tiempoTranscurrido >= 120) {
      let xPosition = this.enemigos.x;
      let yPosition = this.enemigos.y;
      let newDisparosEnemigos = new DisparosEnemigos(xPosition, yPosition);
      this.disparosEnemigosArr.push(newDisparosEnemigos);
      sonidosDisparosEnemigo.volume = 0.1;
      sonidosDisparosEnemigo.currentTime = 0;
      sonidosDisparosEnemigo.play();
    } else if (this.timer % 60 === 0 && tiempoTranscurrido >= 180) {
      let xPosition = this.enemigos.x;
      let yPosition = this.enemigos.y;
      let newDisparosEnemigos = new DisparosEnemigos(xPosition, yPosition);
      this.disparosEnemigosArr.push(newDisparosEnemigos);
      sonidosDisparosEnemigo.volume = 0.1;
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
    musicaFondo.volume = 0.1;
    musicaFondo.play();
  };

  // Gif
  reproducirExplosionGifNormal = () => {
    explosionGifNormal.style.display = "block";
    explosionGifNormal.style.animation = "explosion-normal 1s";
    explosionGifNormal.style.left = `${this.enemigos.x}px`;
    explosionGifNormal.style.top = `${this.enemigos.y}px`;
    setTimeout(function () {
      explosionGifNormal.style.display = "none";
    }, 200);
  };

  // Tiempo de juego
  startTimer() {
    setInterval(() => {
      tiempoTranscurrido++;
    }, 1000);
  }

  // Reponer enemigo random persecucion
  reponerEnemigo() {
    if (this.enemigos.hp <= 0) {
      this.score += this.enemigos.score
      this.enemigos.node.remove();
      let numRandom = Math.floor(Math.random() * 3) + 1;
      if (numRandom === 1) {
        gameObject.enemigos = new Enemigos("enemigos", 1);
      } else if (numRandom === 2) {
        gameObject.enemigos = new Enemigos("enemigos", 2);
      } else if (numRandom === 3) {
        gameObject.enemigos = new Enemigos("enemigos", 3);
      }
    }

  }
}
