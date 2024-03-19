var randomNumer1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumer1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //dice1.png-dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player 1 wins!
if (randomNumer1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} 
else if (randomNumber2 > randomNumer1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} 
else {
    document.querySelector("h1").innerHTML = "Draw!"
}