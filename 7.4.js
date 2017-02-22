'use strict';

// Design a chess game using object oriented principles.

class Game() {
  constructor() {
    // constructor:
    // Create a 8x8 matrix to use as the chessboard.
    this.board = [][];
    // Rows 0,1: initialize Black's pieces
    // Rows 6,7 are White's pieces

  }

}

class Pawn() {

  constructor(colorName, x, y) {
    this.colorName = colorName;
    this.x = x;
    this.y = y;
    this.alive = true;
  }

}

class Castle extends Pawn() {
  constructor(colorName, x, y) {

  }
}

// Make an appointment for 11:30 today or 12 or 1 tomorrow 
// He was in emergency room yesterday so he has to see a dr appointment
// C O P D Exasperation
// Dr Anita Walton
// Jul 1 1948
// Chien Nguyen
// If you have walk-in hours, what are they?

