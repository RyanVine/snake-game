// create a grid of squares
// create queryselect of board squares
// buttons on screen to move snake
// global variables for snake
// interval timer (set interval)
// array push for the snake body

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
let currentFood = 6;
let currentScore = scoreNum.innerhtml;
// At the start of the game setting the current direction to nothing
let currentDirection = "";

//Adding the starting class to be visable at the center of board
tiles[currentSnake[0]].classList.add("snake");
tiles[currentFood].classList.add("food");

// counting every second and updating the location of currrent snake on the board
// The snake is not moving at the start because it has no directio

currentSpeed = 250;
const interval = setInterval(() => moveSnake(currentDirection, currentSnake), currentSpeed); 

const isWin = (snakeArray, food) => {
  if (snakeArray[0] == food) {
    return true;
  }
  return false;
};


//random integer finder
const randomTileNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// make function with currentSnake[0] == currentFood

// Buttons that listens click and updates the current direction
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

//Detect Key presses

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
  //!!food eating section
  const winCon = () => {
    if (isCurrentWin == true) {
      tiles[currentFood].classList.remove("food");
      currentFood = randomTileNumber(1, 400);
      tiles[currentFood].classList.add("food");
      currentSnake.push(currentFood);
      scoreNum.innerHTML = parseInt(scoreNum.innerHTML) + 1;
      console.log(currentSpeed);
    }
  };

  if (direction === "right") {
    const isCurrentWin = isWin(currentSnake, currentFood);
    if (isCurrentWin) {
      winCon();
    }
    let snakeHead = snake[0];
    //Checking direction -
    let snakeTail = snake[snake.length - 1];
    let newSnakeHead = ++snakeHead;
    tiles[newSnakeHead].classList.add("snake");
    tiles[snakeTail].classList.remove("snake");
    snake.unshift(newSnakeHead);
    snake.pop();
    console.log(snake);
    return;

    //left movement
  } else if (direction === "left") {
    const isCurrentWin = isWin(currentSnake, currentFood);
    if (isCurrentWin) {
      winCon();
    }
    let snakeHead = snake[0];
    let snakeTail = snake[snake.length - 1];
    let newSnakeHead = --snakeHead;
    tiles[newSnakeHead].classList.add("snake");
    tiles[snakeTail].classList.remove("snake");
    snake.unshift(newSnakeHead);
    snake.pop();
    console.log(snake);
    return;
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
    console.log(snake);
    return;
  } else if (direction === "down") {
    const isCurrentWin = isWin(currentSnake, currentFood);
    if (isCurrentWin) {
      winCon();
    }
    let snakeHead = snake[0];
    //Checking direction -
    let snakeTail = snake[snake.length - 1];
    let newSnakeHead = snakeHead + 20;
    tiles[newSnakeHead].classList.add("snake");
    tiles[snakeTail].classList.remove("snake");
    snake.unshift(newSnakeHead);
    snake.pop();
    console.log(snake);
    return;
  }
  return;
};

//!!              Things to add:

/* . Food appears on random tile when eaten by snake
   . Snake increases in size when food is eaten
   . Score increases when food is eaten
   . Game Over pops up when touching the floor or ceiling
   . Game Over pops up when the snake touches itself
   . Increase size of grid
   . Difficulty increase/decrease button that increases setInterval
   ?? Ask about hitting edges
   ?? Ask about eating food
   !!tiles[currentSnake[currentSnake.length -1]].classList.add("snake"); + class list + array push
    !!if currentSnake & Currentsnake +1 == class death then game over
    !!add coments so I understand and can explain the code  
    !currentspeed  !=
*/
