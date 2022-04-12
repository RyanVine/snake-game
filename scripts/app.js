//Query Selectors
const tiles = document.querySelectorAll(".snake-game__grid-tile");
const buttonLeft = document.querySelector(".snake-game__button--left");
const buttonRight = document.querySelector(".snake-game__button--right");
const buttonUp = document.querySelector(".snake-game__button--up");
const buttonDown = document.querySelector(".snake-game__button--down");
const buttonPause = document.querySelector(".snake-game__button--pause");
const scoreNum = document.querySelector(".snake-game__score-number");


// Global Variables
// Adding current snake to the center of the board
let currentSnake = [45];
// Adds food to the board
let currentFood = 6;
// Preps the score
let currentScore = scoreNum.innerhtml;
// At the start of the game setting the current direction to nothing so no movement occurs
let currentDirection = "";

// Adding the starting class to be visable at the center of board
tiles[currentSnake[0]].classList.add("snake");
tiles[currentFood].classList.add("food");


// counting every second and updating the location of currrent snake on the board
// The snake is not moving at the start because it has no direction
currentSpeed = 250;
const interval = setInterval(() => moveSnake(currentDirection, currentSnake), currentSpeed); 

//Win condition to check if the first index of the snake array is the same as the food
const isWin = (snakeArray, food) => {
  if (snakeArray[0] == food) {
    return true;
  }
  return false;
};



//lose condition
const isLose = (snakeArray) => {
  tiles[snakeArray[0]].classList.contains("death_tile-right")
  if (tiles[snakeArray[0]].classList.contains("death_tile-right") && tiles[snakeArray[1]].classList.contains("death_tile-left")){ 
    console.log("You lose!")
    return true;

  } else if (tiles[snakeArray[0]].classList.contains("death_tile-left") && tiles[snakeArray[1]].classList.contains("death_tile-right")){
    return true;
  }
  return false;
};

  //lose condition
  const loseCon = (snakeArray) => {
    alert("Lol get rekt scrub")
    if (isLose(snakeArray) == true) {
      ;
    }
  }
 

//random integer finder
const randomTileNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};



// Buttons that listen for a click and updates the current direction
buttonRight.addEventListener("click", () => {
  if (currentDirection != "left") {
    currentDirection = "right";
  }
});
buttonLeft;
buttonLeft.addEventListener("click", () => {
  if (currentDirection != "right") {
    currentDirection = "left";
  }
});

buttonUp.addEventListener("click", () => {
  if (currentDirection != "down") {
    currentDirection = "up";
  }
});
buttonDown.addEventListener("click", () => {
  if (currentDirection != "up") {
    currentDirection = "down";
  }
});
buttonPause.addEventListener("click", () => {
  currentDirection = "";
});

//Detect Key presses for the above
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39 && currentDirection != "left")
    currentDirection = "right";
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37 && currentDirection != "right")
    currentDirection = "left";
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 38 && currentDirection != "down")
    currentDirection = "up";
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 40 && currentDirection != "up")
    currentDirection = "down";
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 32) currentDirection = "";
});

// function to move snake which is called upon every second
const moveSnake = (direction, snake) => {
  //Getting first index from snakeHead
  const isCurrentWin = isWin(currentSnake, currentFood);
  console.log(isCurrentWin);
  // Checks for win condition, if true then it moves the food to a random location, adds a piece to the snake and updates the score
  const winCon = () => {
    if (isCurrentWin == true) {
      tiles[currentFood].classList.remove("food");
      currentFood = randomTileNumber(1, 400);
      tiles[currentFood].classList.add("food");
      currentSnake.push(currentFood);
      scoreNum.innerHTML = parseInt(scoreNum.innerHTML) + 1;
    }
  };



      // Movement direction is checked, and then functions are ran
      //right Movement
  if (direction === "right") {
    const isCurrentWin = isWin(currentSnake, currentFood);
    if (isCurrentWin) {
      winCon();
    } else{
    let isCurrentLose = isLose(currentSnake)
    if (isCurrentLose) {
      loseCon()
    }
    }
    let snakeHead = snake[0];
    let snakeTail = snake[snake.length - 1];
    let newSnakeHead = ++snakeHead;
    tiles[newSnakeHead].classList.add("snake");
    tiles[snakeTail].classList.remove("snake");
    snake.unshift(newSnakeHead);
    snake.pop();
    return;
    

    //left Movement
  } else if (direction === "left") {
    const isCurrentWin = isWin(currentSnake, currentFood);
    if (isCurrentWin) {
      winCon();
    } else{
      let isCurrentLose = isLose(currentSnake)
      if (isCurrentLose) {
        loseCon()
      }
    }  
    let snakeHead = snake[0];
    let snakeTail = snake[snake.length - 1];
    let newSnakeHead = --snakeHead;
    tiles[newSnakeHead].classList.add("snake");
    tiles[snakeTail].classList.remove("snake");
    snake.unshift(newSnakeHead);
    snake.pop();
    return;
    // Up movement
  } else if (direction === "up") {
    const isCurrentWin = isWin(currentSnake, currentFood);
    if (isCurrentWin) {
      winCon();
    }
    let snakeHead = snake[0];
    let snakeTail = snake[snake.length - 1];
    let newSnakeHead = snakeHead - 20;
    tiles[newSnakeHead].classList.add("snake");
    tiles[snakeTail].classList.remove("snake");
    snake.unshift(newSnakeHead);
    snake.pop();
    return;
    // Down movement
  } else if (direction === "down") {
    const isCurrentWin = isWin(currentSnake, currentFood);
    if (isCurrentWin) {
      winCon();
    }
    let snakeHead = snake[0];
    let snakeTail = snake[snake.length - 1];
    let newSnakeHead = snakeHead + 20;
    tiles[newSnakeHead].classList.add("snake");
    tiles[snakeTail].classList.remove("snake");
    snake.unshift(newSnakeHead);
    snake.pop();
    return;
  }
  return;
};

//!!              Things to add:

/*  Lose condition if current tile and next tile is a death tile, and vice versa
    Lose condition if  snake hits itself
    decrease set interval when wincon is true until 150
*/
