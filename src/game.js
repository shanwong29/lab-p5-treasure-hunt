class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    let x = 0;
    let y = 0;

    stroke("grey");

    for (x = 0; x <= HEIGHT; x += SQUARE_SIDE) {
      line(x, 0, x, WIDTH);
    }

    for (y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }
}

class Player {
  constructor(row, col) {
    this.col = col;
    this.row = row;
  }

  preload() {
    console.log("player is Preloaded");
    this.playerDown = loadImage("assets/character-down.png");
    this.playerUp = loadImage("assets/character-up.png");
    this.playerleft = loadImage("assets/character-left.png");
    this.playerRight = loadImage("assets/character-right.png");

    this.playerImg = this.playerDown;
    //important , needed to be assigned;
  }

  moveDown() {
    if (this.col <= 8) {
      this.col += 1;
    }
    this.playerImg = this.playerDown;
  }
  moveUp() {
    if (this.col >= 1) {
      this.col -= 1;
    }
    this.playerImg = this.playerUp;
  }
  moveRight() {
    if (this.row <= 8) {
      this.row += 1;
    }
    this.playerImg = this.playerRight;
  }
  moveLeft() {
    if (this.row >= 1) {
      this.row -= 1;
    }
    this.playerImg = this.playerleft;
  }

  draw() {
    image(
      this.playerImg,
      this.row * SQUARE_SIDE,
      this.col * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }

  keyPressed() {
    if (keyCode == 39) {
      this.moveRight();
    }
    if (keyCode == 37) {
      this.moveLeft();
    }
    if (keyCode == 38) {
      this.moveUp();
    }
    if (keyCode == 40) {
      this.moveDown();
    }
  }
}

class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
    console.log(this.row, this.col);
  }

  preload() {
    console.log("Treasure is Preloaded");
    this.treasureImg = loadImage("assets/treasure.png");
  }

  drawTreasure() {
    image(
      this.treasureImg,
      this.row * SQUARE_SIDE,
      this.col * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}
