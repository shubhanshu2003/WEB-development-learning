var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage ="dice"+ randomNumber1+".png";
var randomImage= "images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+randomNumber2+".png";
var randomImage= document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 won";
}else{
    document.querySelector("h1").innerHTML="draw";
}