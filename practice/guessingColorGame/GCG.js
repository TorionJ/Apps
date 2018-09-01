var numOfSquares = 6;
var colors = []; //array of [rgb(0, 0, 0)]
var squares = document.querySelectorAll('.square');
var pickedColor;
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeBtns = document.querySelectorAll('.mode');
var rulesButton = document.getElementsByClassName('rules')[0];
var rules = document.getElementById('overlay');



colorDisplay.textContent = pickedColor;



init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

resetButton.addEventListener('click', function(){
    reset();
});

rulesButton.addEventListener('click', function(){
    document.getElementById('overlay').style.display= 'block';
});
rules.addEventListener('click', function(){
    if(document.getElementById('overlay').style.display === 'block'){
        document.getElementById('overlay').style.display= 'none';
    }
});


function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to the pickedColor
        squares[i].style.backgroundColor = color;
    } 

}

function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into the arr
         arr.push(randomColor());
    }
    //return that color to the array
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r =Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g =Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b =Math.floor(Math.random() * 256);
    
    return "rgb(" + r +", " + g +", " + b + ")";
}

function setupModeButtons(){
    //mode button event listeners
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click event to squares
        squares[i].addEventListener('click', function(){
            //grab color of the picked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
    
            }
        });
    }
}

function reset(){
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor (in rgb form in the header)
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    //then change the color of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display ='none';
        }

    }
    h1.style.backgroundColor = 'steelblue';
}
