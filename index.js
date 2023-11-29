//  Adding an Event Listener :1

/* document.querySelector(".button").addEventListener("click", handleClick);

function handleClick() {
  alert("I got clicked");
}
 */

//  Adding an Event Listener :2

/* document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked");
}); */



// DOM FOR Mouse click

var numbrOfDrumButtons = document.querySelectorAll(".drum").length;
// Add for loop for mouse click ..
for (var i = 0; i < numbrOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

// DOM FOR KEYPRESS IN KEYBOARD

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

// Adding Sounds to each key through Switch Statement. By passing a finction makeSound and Parameter (key);

function makeSound(key) {
  switch (key) { 
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}
