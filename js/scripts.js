 
 //!PHASE 1
 //?step 1 Create Ship class and the Objects inside it
class Ship {
  constructor(length){
  this.length= length
  this.hits= 0
  this.sunk= false
}
//? Step 2: Create the methods for recording hits and wether or not the ship has sunk
  // Method to record a hit on the ship and if statement for seeing if the ship has sunk 
  hit() {
    this.hits++;
    if (this.hits === this.length) {
      this.sunk = true;
    }
  }
}
//? Step 3: Create the variables of all 5 ships and assign them a length from the constructor
const carrier = new Ship(5);
const battleship = new Ship(4);
const cruiser = new Ship(3);
const submarine = new Ship(3);
const destroyer = new Ship(2);
console.log(cruiser)


// //!PHASE 2 (Similar steps as PHASE 1 but class is focused on the board)
//?step 1 Create board class and the functions inside it
class Gameboard {
  constructor() {
    this.grid = []; // gameboard grid
    this.ships = []; // store the ships on the board
    this.rows = 10; // Num of rows in board
    this.cols = 10; // Num of columns in board

    //? step2 Initialize the grid with empty cells
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = Array(this.cols).fill(null);
    }
console.log(Gameboard)
  }

  //? step 3 Method to place a ship on the gameboard at specific coordinates
  placeShip(ship, row, col, orientation) {
    // Check if the placement is valid
    if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) {
      throw new Error("Invalid placement coordinates.");
    }

    // Check if the ship fits within the gameboard boundaries
    if (orientation === "horizontal") {
      if (col + ship.length > this.cols) {
        throw new Error("Ship placement out of bounds.");
      }
    } else if (orientation === "vertical") {
      if (row + ship.length > this.rows) {
        throw new Error("Ship placement out of bounds.");
      }
    } else {
      throw new Error("Invalid ship orientation.");
    }

    // Check if the placement is not occupied by another ship
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "horizontal") {
        if (this.grid[row][col + i] !== null) {
          throw new Error("Invalid ship placement.");
        }
      } else if (orientation === "vertical") {
        if (this.grid[row + i][col] !== null) {
          throw new Error("Invalid ship placement.");
        }
      }
    }

    // If all checks pass, place the ship on the grid
    for (let i = 0; i < ship.length; i++) {
      if (orientation === "horizontal") {
        this.grid[row][col + i] = ship;
      } else if (orientation === "vertical") {
        this.grid[row + i][col] = ship;
      }
    }

    // Store the ship in the list of ships on the gameboard
    this.ships.push(ship);
  }
  receiveAttack(row, col) {
    // Check if the attack is within the gameboard boundaries
    if (row < 0 || col < 0 || row >= this.rows || col >= this.cols) {
      throw new Error("Invalid attack coordinates.");
    }

    // Check if the cell has been attacked before
    if (this.grid[row][col] === "miss" || this.grid[row][col] === "hit") {
      throw new Error("Already attacked this cell.");
    }

    // Check if there's a ship at the attacked coordinates
    const ship = this.grid[row][col];
    if (ship) {
      // It's a hit
      ship.hit();
      this.grid[row][col] = "hit";
    } else {
      // It's a miss
      this.grid[row][col] = "miss";
    }
  }
}


// Example usage:
const gameboard = new Gameboard();
gameboard.placeShip(carrier, 0, 0, "horizontal");
gameboard.placeShip(battleship, 1, 2, "vertical");

// Now you have a `Gameboard` class that can place ships on a grid.























// //!PHASE (This can be done later)

// //?render the 10x10 grids on javascript with css modelling

// function renderBoard () {

//   const board = document.querySelector('.board')

//   //create variables for creating the cell count
//   const width= 10
//   const height= 10
//   const cellCount = width * height 
   
//   //cell count renders the cells on the board with a for loop

//   for(let i = 0;i < cellCount; i++){
//   const cell = document.createElement('div')
//    cell.innerText = i
//    board.appendChild(cell)
   
//   }
// }


//  window.addEventListener('DOMContentLoaded', renderBoard )