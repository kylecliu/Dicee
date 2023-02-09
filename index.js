//generates a random number
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
console.log(randomNumber1);

//generates another random number
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
console.log(randomNumber2);

//url for the image of player 1's dice
var dice1 = "images/dice" + randomNumber1 +".png";

//url for the image of player 2's dice
var dice2 = "images/dice" + randomNumber2 +".png";

//setting "src" attribute to above url
document.querySelector(".img1").setAttribute("src", dice1); 
document.querySelector(".img2").setAttribute("src", dice2); 

//display the results by comparing the two random numbers
if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").textContent = "🏆Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").textContent = "Player 2 Wins!🏆";
}
else {

    document.querySelector("h1").textContent = "Draw!🍜";
}