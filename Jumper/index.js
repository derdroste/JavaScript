"use strict";

class Renderer {
  constructor(element) {
    this.element = element;
    this.setup();
  }

  //Box Style & Setup
  setup() {
    let box = document.createElement("div");
    box.style.position = "absolute";
    box.style.top = "20px";
    box.style.left = "20px";
    box.style.backgroundColor = "red";
    box.style.width = "20px";
    box.style.height = "20px";

    this.element.appendChild(box);
    //Zugriff in der Render Methode
    this.box = box;
  }

  //Box rendern
  render(position) {
    this.box.style.top = position + "px";
  }
}

// Bewegung der Box outsourcen
class Box {
  constructor() {
    this.position = 0;
    //Newtonscher Fall
    this.speed = 0;
  }
  runLoop() {
    this.speed++;
    this.position = this.position + this.speed;
  }
  moveUp() {
    // Speed umkehren
    this.speed = -20;
  }
}

class Game {
  constructor(element) {
    this.renderer = new Renderer(element);
    //neue Box zeichnen
    this.box = new Box();
    // Element merken
    this.element = element;
    //Variable um Game zu stoppen bzw starten
    this.isRunning = true;
    this.setup();
  }

  setup() {
    // Aktion wenn das Spielfeld geklickt wird
    this.element.addEventListener(
      "click",
      () => {
        this.box.moveUp();
      },
      false
    );
  }

  start() {
    //Punktezahl
    let counter = 0;
    //Jede Sek Renderer ausführen, Box bewegen
    let timer = setInterval(() => {
      this.box.runLoop();
      counter++;
      //Abfrage: Ist die Box über dem Rand?
      if (this.box.position < 0) {
        this.isRunning = false;
        clearInterval(timer);
        alert("Versuchs nochmal! Du hast " + counter + " Punkte erreicht!");
      }
      if (this.box.position + 20 > this.element.clientHeight) {
        this.isRunning = false;
        clearInterval(timer);
        alert("Fantastisch! Du hast " + counter + " Punkte erreicht!");
      }
      // Renderer nur ausführen wenn True
      if (this.isRunning == true) {
        this.renderer.render(this.box.position);
      }
    }, 50);
  }
}

//Element an das Spielfeld übergeben
let game = new Game(document.getElementById("game"));
game.start();
