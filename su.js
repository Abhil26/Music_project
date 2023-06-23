
var len = document.querySelectorAll(".drum").length
for (var i = 0; i < len; i++) {
  $(".drum")[i].addEventListener("click", function () {
        var buttontext = this.innerHTML;
        makeSound(buttontext);
buttonanime(currentKey);
       
     } );}


document.addEventListener("keypress", function(e){
makeSound(e.key.toUpperCase())
buttonanime(e.key);
}
);
  function makeSound(key){
switch (key) {

    case "W":
        var tom1 = new Audio("sound/smalltom.mp3");
        tom1.play();
        break;
    case "A":
        var tom2 = new Audio("sound/mediumtom.mp3");
        tom2.play();
        break;
    case "S":
        var tom3 = new Audio("sound/floortom.mp3");
        tom3.play();
        break;
    case "Q":
        var tom4 = new Audio("sound/Snare.mp3");
        tom4.play();
        break;
    case "D":
        var tom5 = new Audio("sound/drum.mp3");
        tom5.play();
        break;
    case "F":
        var tom6 = new Audio("sound/Splash-.mp3");
        tom6.play();
        break;
    case "C":
        var tom7 = new Audio("sound/closedhit.mp3");
        tom7.play();
        break;
    default: console.log(key);
}
}
function buttonanime(currentKey)
{
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}
