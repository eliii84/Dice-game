  var randomNum1= Math.floor(Math.random()*6)+1; //random number between 1-6

 
  var randomDiceImage= "dice"+ randomNum1 + ".png" // dice1.png - dice6.png

  var randomImageSrc="images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSrc);


 //we have to set the second dice in my way!

 var randomNum2=Math.floor(Math.random()*6)+1;

 var randomdiceImg="images/dice"+randomNum2+".png";

 document.querySelector(".img2").setAttribute("src", randomdiceImg);


 if(randomNum1 === randomNum2){
  document.querySelector("h1").innerHTML="Draw!"
 }
 else if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML="Player 1 wins!"

 }
 else{
  document.querySelector("h1").innerHTML="Player 2 wins!"
 }
 