var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var reset = document.getElementById('reset');
var p1Score = 0;
var p2Score = 0;
var p1score = document.getElementById('p1score');
var p2score = document.getElementById('p2score');
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector('input');
var dynamicScore = document.querySelector('p span');




p1Button.addEventListener('click', function () {
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1score.classList.add("winner");
            gameOver = true;
        }
        p1score.textContent = p1Score;
    }
});
p2Button.addEventListener('click', function () {
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2score.classList.add("winner");
            gameOver = true;
        }
        p2score.textContent = p2Score;
    }
});
reset.addEventListener('click', function () {
    resetG();
});
function resetG() {
    p1Score = 0;
    p2Score = 0;
    p1score.textContent = p1Score;
    p2score.textContent = p2Score;
    p1score.classList.remove("winner");
    p2score.classList.remove("winner");
    gameOver = false;
}
numInput.addEventListener("change", function (){
    dynamicScore.textContent = numInput.value;
    winningScore = parseInt(numInput.value);
    resetG(); 
})

