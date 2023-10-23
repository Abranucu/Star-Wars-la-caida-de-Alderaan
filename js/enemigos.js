// Class Jugador
class Enemigos {
  // Constructor (type, yPosition)
  constructor() {
    // Nodo
    this.node = document.createElement("img");
    this.node.src = "./images/tie-bomber.png";
    gameBoxNode.append(this.node);
    // Dimensiones
    this.w = 80;
    this.h = 80;
    this.x = 210;
    this.y = 20;
    // Actualizar en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    // Velocidad
    this.speed = 2;
    // Disparo
    this.disparosNode = document.createElement("img");
    this.disparosNode.src = "./images/disparo-rojo.png";
    this.disparos = [];
    gameBoxNode.append(this.disparosNode);
    // Dimensiones disparo
    this.disparosW = 10;
    this.disparosH = 10;
    this.disparoBr = 15;
    this.disparosX = `${this.x}px`;
    this.disparosY = `${this.y}px`;
    // Actualizar en el DOM
    this.disparosNode.style.width = `${this.disparosW}px`;
    this.disparosNode.style.height = `${this.disparosH}px`;
    this.disparosNode.style.borderRadius = `${this.disparoBr}px`;
    this.disparosNode.style.position = "absolute";
    this.disparosNode.style.left = `${this.disparosX}px`;
    this.disparosNode.style.top = `${this.disparosY}px`;
    // Velocidad disparo
    this.disparosSpeed = 10;
  }

  // Metodos
  // Movimiento
  moveEnemigos = () => {
    if (isEnemigosMovingRight === true) {
      this.x += this.speed;
      this.node.style.left = `${this.x}px`;
    } else {
      this.x -= this.speed;
      this.node.style.left = `${this.x}px`;
    }
  };

  // Colision
  enemigosColisionCheck = () => {
    if (this.x + 80 > 500) {
      isEnemigosMovingRight = false;
    } else if (this.x < 0) {
      isEnemigosMovingRight = true;
    }
  };
  // Disparo
  disparar = () => {
    this.disparosNode.style.left = `${this.x + 33}px`;
    this.disparosNode.style.top = `${this.y + 60}px`;
  };
  // BONUS
  // Añadir mas enemigos
  // Añadir jefes
}
