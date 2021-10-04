var randomNumber1 = Math.round(Math.random() * 5 + 1);
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.round(Math.random() * 5 + 1);
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
