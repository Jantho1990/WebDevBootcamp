function changeColors(color){
  // Loop through all squares.
  for(var i = 0; i < squares.length; i++){
    // Change each color to match given color.
    squares[i].style.background = color;
  }
}

function randomNumber(max){
  return Math.floor(Math.random() * max);
}

function pickColor(){
  var random = randomNumber(colors.length);
  return colors[random];
}

function randomColor(){
  var r = randomNumber(256);
  var g = randomNumber(256);
  var b = randomNumber(256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num){
  // Make an array.
  var colors = [];
  // Add num random colors to array.
  for(var i = 0; i < num; i++){
    colors.push(randomColor());
  }
  // Return array.
  return colors;
}

function reset(){
  // Generate all new colors.
  colors = generateRandomColors(numSquares);
  // Pick a new random color.
  pickedColor = pickColor();
  // Change color display to match picked color.
  colorDisplay.textContent = pickedColor;
  // Change colors of the squares.
  Object.keys(squares).forEach(function(s){
    squares[s].style.background = colors[s];
  });
  // Reset button text.
  resetButton.textContent = 'New Colors';
  // Reset h1 color.
  h1.style.backgroundColor = 'steelblue';
  messageDisplay.textContent = '';
  // Change colors of squares
  Object.keys(squares).forEach(function(s){
    if(colors[s]){
      squares[s].style.display = 'block';
      squares[s].style.background = colors[s];
    }else{
      squares[s].style.display = 'none';
    }
  });
}

var numSquares = 6;
var pickedColor;
var colors = [];

var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#color-display');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){

  setupModeButtons();
  setupSquares();

  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  Object.keys(squares).forEach(function(s){
    // Add click listeners to squares.
    squares[s].addEventListener('click', function(){
      // Grab color of clicked square.
      var clickedColor = this.style.backgroundColor;
      // Compare to picked color.
      if(clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        h1.style.background = clickedColor;
        changeColors(clickedColor);
      }else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = 'Try Again';
      }
    });
  });
}

resetButton.addEventListener('click', function(){
  reset();
});
