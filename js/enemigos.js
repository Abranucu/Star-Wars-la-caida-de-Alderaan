// Class Enemigos
class Enemigos {
  // Constructor (type, num)
  constructor(type, num) {
    // Nodo 1
    this.node = document.createElement("img");
    if (type === "enemigos" && num === 1) {
      this.node.src = "./images/tie-bomber.png";
      gameBoxNode.append(this.node);
      // Dimensiones
      this.w = 80;
      this.h = 80;
      this.x = Math.floor(Math.random() * (720 - 80 + 1)) + 80;
      this.y = 20;
      // Propiedades
      this.hp = 300;
      this.armor = 0;
      this.dmg = 1;
      this.score = 600;
      // Actualizar en el DOM
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      // Velocidad
      this.speed = 2;
    } else if (type === "jefes" && num === 1) {
      this.node.src = "./images/trade-federation-batlle-ship.png";
      gameBoxNode.append(this.node);
      // Dimensiones
      this.w = 300;
      this.h = 210;
      this.x = Math.floor(Math.random() * (500 - 300 + 1)) + 300;;
      this.y = 20;
      // Propiedades
      this.hp = 1000;
      this.armor = 0;
      this.dmg = 1;
      this.score = 2000;
      // Actualizar en el DOM
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      // Velocidad
      this.speed = 2;
    } else if (type === "jefes" && num === 2) {
      this.node.src = "./images/imperial-star-destroyer.png";
      gameBoxNode.append(this.node);
      // Dimensiones
      this.w = 290;
      this.h = 300;
      this.x = Math.floor(Math.random() * (510 - 290 + 1)) + 290;;
      this.y = 20;
      // Propiedades
      this.hp = 500;
      this.armor = 0;
      this.dmg = 1;
      this.score = 2500;
      // Actualizar en el DOM
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      // Velocidad
      this.speed = 2;
      this.zigzagTimer = 0;
    } else if (type === "jefes" && num === 3) {
      this.node.src = "./images/death-star-transition-img.png";
      gameBoxNode.append(this.node);
      // Dimensiones
      this.w = 300;
      this.h = 248;
      this.x = Math.floor(Math.random() * (500 - 300 + 1)) + 300;;
      this.y = 20;
      // Propiedades
      this.hp = 1000;
      this.armor = 500;
      this.dmg = 1;
      this.score = 3000;
      // Actualizar en el DOM
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      // Velocidad
      this.speed = 2;
      // Movimiento
      this.zigzagTimer = 0;
    } else if (type === "enemigos" && num === 2) {
      // Nodo 2
      this.node = document.createElement("img");
      this.node.src = "./images/tie-interceptor.png";
      gameBoxNode.append(this.node);
      // Dimensiones
      this.w = 80;
      this.h = 80;
      this.x = Math.floor(Math.random() * (720 - 80 + 1)) + 80;
      this.y = 20;
      // Propiedades
      this.hp = 150;
      this.armor = 0;
      this.dmg = 1;
      this.score = 900;
      // Actualizar en el DOM
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      // Velocidad
      this.speed = 2;
      this.zigzagTimer = 0;
    } else if (type === "enemigos" && num === 3) {
      // Nodo 3
      this.node = document.createElement("img");
      this.node.src = "./images/tie-defender.png";
      gameBoxNode.append(this.node);
      // Dimensiones
      this.w = 80;
      this.h = 80;
      this.x = Math.floor(Math.random() * (720 - 80 + 1)) + 80;
      this.y = 20;
      // Propiedades
      this.hp = 300;
      this.armor = 150;
      this.dmg = 1;
      this.score = 1200;
      // Actualizar en el DOM
      this.node.style.width = `${this.w}px`;
      this.node.style.height = `${this.h}px`;
      this.node.style.position = "absolute";
      this.node.style.left = `${this.x}px`;
      this.node.style.top = `${this.y}px`;
      // Velocidad
      this.speed = 2;
      // Movimiento
      this.zigzagTimer = 0;
    }
    // Acceso a type
    this.type = type;
    // Acceso a num
    this.num = num;
  }

  // Metodos
  // Movimiento
  moveEnemigosIzquierdaDerecha = () => {
    if (
      (this.type === "enemigos" && this.num === 1) ||
      (this.type === "jefes" && this.num === 1)
    ) {
      if (isEnemigosMovingRight === true) {
        this.x += this.speed;
        this.node.style.left = `${this.x}px`;
      } else {
        this.x -= this.speed;
        this.node.style.left = `${this.x}px`;
      }
    }
  };
  moveEnemigosZigzag = () => {
    if (
      (this.type === "enemigos" && this.num === 2) ||
      (this.type === "jefes" && this.num === 2)
    ) {
      this.movementTimer++;
      if (this.x <= 0 || this.x >= 800 - this.w) {
        this.isMovingRight = !this.isMovingRight;
      }
      if (this.isMovingRight) {
        this.x += this.speed;
      } else {
        this.x -= this.speed;
      }
      if (this.y <= 0 || this.y >= 700 - this.h) {
        this.isMovingDown = !this.isMovingDown;
      }
      if (this.isMovingDown) {
        this.y += this.speed;
      } else {
        this.y -= this.speed;
      }
      this.node.style.top = `${this.y}px`;
      this.node.style.left = `${this.x}px`;
    }
  };

  moverEnemigosRandom() {
    if (
      (this.type === "enemigos" && this.num === 3) ||
      (this.type === "jefes" && this.num === 3)
    ) {
      this.movementTimer++;
      if (this.y <= 0 || this.y >= 700 - this.h) {
        this.isMovingRight = !this.isMovingRight;
      }
      if (this.isMovingRight) {
        this.y += this.speed;
      } else {
        this.y -= this.speed;
      }
      if (this.x <= 0 || this.x >= 800 - this.w) {
        this.isMovingDown = !this.isMovingDown;
      }
      if (this.isMovingDown) {
        this.x += this.speed;
      } else {
        this.x -= this.speed;
      }
      this.node.style.top = `${this.y}px`;
      this.node.style.left = `${this.x}px`;
    }
  }

  // Aumento velocidad movimiento
  aceleracionEnemigos = () => {
    if (tiempoTranscurrido <= 60) {
      this.speed = 3;
    } else if (tiempoTranscurrido <= 90) {
      this.speed = 4;
    } else if (tiempoTranscurrido <= 120) {
      this.speed = 5;
    }
  };

  // Colision
  enemigosColisionCheckIzquierdaDerecha = () => {
    if (this.type === "enemigos" && this.num === 1) {
      if (this.x + 80 > 800) {
        isEnemigosMovingRight = false;
      } else if (this.x < 0) {
        isEnemigosMovingRight = true;
      }
    } else if (this.type === "jefes" && this.num === 1) {
      if (this.x + 300 > 800) {
        isEnemigosMovingRight = false;
      } else if (this.x < 0) {
        isEnemigosMovingRight = true;
      }
    }
  };

  // Recibir dmg
  enemigosRecieveDmg = (dmg) => {
    if (this.armor > 0) {
      this.armor -= dmg;
    } else if (this.armor <= 0 && this.hp > 0) {
      this.hp -= dmg;
    }
  };
}
