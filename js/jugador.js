// Class Jugador
class Jugador {
  // Constructor (type, yPosition)
  constructor() {
    // Nodo
    this.node = document.createElement("img");
    this.node.src = "./images/millenium-falcon.png";
    gameBoxNode.append(this.node);
    // Dimensiones
    this.w = 80;
    this.h = 80;
    this.x = 360;
    this.y = 870;
    // Propiedades jugador
    this.vidas = 3;
    // Actualizar en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    // Velocidad
    this.speed = 10;
    // Movimiento
    this.isMovingUp = false;
    this.isMovingDown = false;
    this.isMovingLeft = false;
    this.isMovingRight = false;

  }

  // Metodos
  // Movimiento
  moveUp = () => {
    if (this.y > this.speed) {
      this.y -= this.speed;
      this.node.style.top = `${this.y}px`;
    }
  };
  moveDown = () => {
    if (this.y <= this.speed + 850) {
      this.y += this.speed;
      this.node.style.top = `${this.y}px`;
    }
  };
  moveLeft = () => {
    if (this.x > this.speed) {
      this.x -= this.speed;
      this.node.style.left = `${this.x}px`;
    }
  };
  moveRight = () => {
    if (this.x <= this.speed + 699) {
      this.x += this.speed;
      this.node.style.left = `${this.x}px`;
    }
  };
  actualizarPosicionJugador = () => {
    if (this.isMovingUp) {
      this.moveUp();
    }
    if (this.isMovingDown) {
      this.moveDown();
    }
    if (this.isMovingLeft) {
      this.moveLeft();
    }
    if (this.isMovingRight) {
      this.moveRight();
    }
  }
  
  // Recibir dmg
  jugadorRecieveDmg = (dmg) => {
    this.vidas -= dmg;
  };
}
