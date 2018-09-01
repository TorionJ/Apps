var rule = document.createElement('div');
var close = document.getElementById('close');

rule.setAttribute('id', 'rule');
rule.innerHTML= displayRules();
document.body.appendChild(rule);

close.addEventListener('click', function(){
    closeRules();
});

function closeRules() {
    document.body.removeChild(rule);
}

function displayRules(){
    var msg = '<div class= \"header\"><a id=\"close\" href=\"#\"> x</a></div>';
    msg += '<div><h2>Guessing Color Game</h2>';
    msg += '<p>You have to guess the color of the rgb inputs(Red, Green, and Blue). ';
    msg += '255 is the max of each color. Goodluck!</p>'; 
}