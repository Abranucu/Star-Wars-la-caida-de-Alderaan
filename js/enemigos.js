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
    // Propiedades
    this.dmg = 1;
    // Actualizar en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    // Velocidad
    this.speed = 2;
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

  // Aumento velocidad movimiento
  aceleracionEnemigos = () => {
    if (this.speed < 6 && tiempoTranscurrido % 10 === 0) {
      this.speed += 0.01;
    } else {
      this.speed = 6;
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

  // BONUS
  // Añadir mas enemigos
  // Añadir jefes
}
