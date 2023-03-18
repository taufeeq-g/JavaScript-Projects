// Random number for Image 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;

// Random number for Image 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;

// Generating path for random Image 1
var image1 = "images/dice" + randomNumber1 + ".png"

// Generating path for random Image 2
var image2 = "images/dice" + randomNumber2 + ".png"


// Updating random Images
document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

// Showing the user result of which player won
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}
