class DisparosEnemigos {
  constructor(xPosition, yPosition) {
    // Nodo
    this.node = document.createElement("img");
    this.node.src = "./images/disparo-rojo.png";
    gameBoxNode.append(this.node);
    // Dimensiones disparo
    this.w = 10;
    this.h = 10;
    this.bR = 15;
    this.x = xPosition + 33;
    this.y = yPosition + 80;
    // Propiedades del disparo
    this.dmg = 1;
    // Actualizar en el DOM
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.borderRadius = `${this.bR}px`;
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    // Velocidad disparo
    this.speed = 2;
  }
  disparosMovimientoAutoEnemigos = () => {
    this.y += this.speed;
    this.node.style.top = `${this.y}px`;
  };
}
