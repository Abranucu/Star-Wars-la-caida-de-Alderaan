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
    this.x = 210;
    this.y = 600;
    // Actualizar en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    // Velocidad
    this.speed = 10;
    // Disparo
    this.disparosNode = document.createElement("img");
    this.disparosNode.src = "./images/disparo-verde.png";
    this.disparos = [];
    gameBoxNode.append(this.disparosNode);
    // Dimensiones disparo
    this.disparosW = 6;
    this.disparosH = 30;
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
  moveUp = () => {
    if (this.y > this.speed) {
      this.y -= this.speed;
      this.node.style.top = `${this.y}px`;
    }
  };
  moveDown = () => {
    if (this.y <= this.speed + 589) {
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
    if (this.x <= this.speed + 399) {
      this.x += this.speed;
      this.node.style.left = `${this.x}px`;
    }
  };
  // Disparos
  disparar = () => {
    this.disparosNode.style.left = `${this.x + 35}px`;
    this.disparosNode.style.top = `${this.y - 25}px`;
  };
}
