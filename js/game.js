// Class Game
class Game {
  // Constructor
  constructor() {
    // Jugador
    this.jugador = new Jugador();
    // Enemigos
    this.enemigos = new Enemigos();
    // Timer
    this.timer = 0;
    this.isGameOn = true;
  }

  // Metodos

  // GameLoop
  gameLoop = () => {
    this.enemigos.moveEnemigos();
    this.enemigos.enemigosColisionCheck();
    this.enemigos.disparar();
    this.jugador.disparar();
    this.colisionCheckJugadorEnemigos();
    // Recursion
    this.timer++;
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

  // GameOver
  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    this.jugadorEnemigosDestroy();
  };

  // Colisiones
  colisionCheckJugadorEnemigos = () => {
    if (
      this.enemigos.x < this.jugador.x + this.jugador.w &&
      this.enemigos.x + this.enemigos.w > this.jugador.x &&
      this.enemigos.y < this.jugador.y + this.jugador.h &&
      this.enemigos.y + this.enemigos.h > this.jugador.y
    ) {
      this.gameOver();
    }
  };

  // Eliminar elementos
  jugadorEnemigosDestroy = () => {
    this.jugador.node.remove();
    this.enemigos.node.remove();
  };
}
// BONUS

// Score
// Vidas
// Sonido
