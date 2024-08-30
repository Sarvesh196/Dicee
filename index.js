var randomNumber1 = Math.floor(Math.random()*6)+1;
const randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

const resultHeading = document.querySelector('h1');

if(randomNumber1 > randomNumber2){
     resultHeading.innerHTML = "🚩Player 1 wins";
} 
else if(randomNumber1 < randomNumber2){
    resultHeading.innerHTML = "🚩Player 2 wins";
}
else{
     resultHeading.innerHTML = "Its a draw";
}

const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', function() {
    location.reload(); // Refreshes the page
});

