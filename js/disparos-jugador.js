class DisparosJugador {
  constructor(xPosition, yPosition) {
    // Nodo
    this.node = document.createElement("img");
    this.node.src = "./images/disparo-verde.png";
    gameBoxNode.append(this.node);
    // Dimensiones disparo
    this.w = 6;
    this.h = 30;
    this.bR = 15;
    this.x = xPosition + 35;
    this.y = yPosition - 15;
    // Propiedades del disparo
    this.dmg = 10;
    // Actualizar en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.borderRadius = `${this.bR}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    // Velocidad disparo
    this.speed = 8;
  }
  disparosMovimientoAutoJugador = () => {
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
