//variables
let userSeq = [];
let simonSeq = [];
let id, color, level = 0;
let strict = false;
let error = false;

let startBtn = document.querySelector(".startBtn");
let onBtn = document.querySelector("#powerOn");
let strictBtn = document.querySelector("#strictOn");

const colorBtns = document.querySelectorAll(".colorBtn");
const total_GAME_LEVELS = 4;

// Load Page with Buttons Disabled

$(document).ready(function () {
 $('.startBtn').attr('disabled','disabled');
 addDisable();
 console.log(startBtn);
 console.log(colorBtns);
 
 // Power Game Board On / Off
 
 $("#powerOn").click(function() {
    if (onBtn.checked == true) {
        console.log("game is on!"); // remove
        playPowerOnSound();
        $("#count").text("HI");
        setTimeout(clearTurnCount, 1200);
        $('.startBtn').removeAttr('disabled');
        console.log(startBtn); // remove
        
    } else {
        resetGame();
        console.log(userSeq); // remove
        console.log(simonSeq); // remove
        $(".startBtn").attr("disabled", "disabled");
        console.log(startBtn); // remove
        console.log("game is off"); // remove
        addDisable();
        console.log(colorBtns); // remove
    }
 });
});

// Press Start to Begin the Game

$(".startBtn").click(function() {
 resetGame();
 level++;
 genSimonSeq();
 setTimeout(removeDisable, 1500);

 console.log("strict is ", strict);
 console.log("error is ", error);
 console.log("userSeq is ", userSeq);
 console.log("simonSeq is ", simonSeq);
 console.log("level is ", level);
});

// Color Button Listener

$(".colorBtn").click(function() {
 id = $(this).attr("id");
 color = $(this).attr("class").split(" ")[2];
 genUserSeq();
});


// Strict Mode Listener

$(".strict").click(function () {
 level = 0;
 level++;
 simonSeq = [];
 userSeq = [];
 strict = true;
 genSimonSeq();
});



// Generate Simon Sequence 

function genSimonSeq() {
 addDisable();
 $("#count").text(level);
 if (!error) {
  getRandomNum();
 }
 var i = 0;
 var myInterval = setInterval(function () {
  id = simonSeq[i];
  color = $("#"+id).attr("class").split(" ")[2]; 
  addClassSound(id, color);
  i++;
  if (i == simonSeq.length) {
   clearInterval(myInterval);
  }
 }, 1000);
 setTimeout(removeDisable, 2000);
}


// Create Player Sequence Array

function genUserSeq() {
 userSeq.push(id);
 console.log(id + " " + color); // remove
 addClassSound(id, color);
 
 // Check user sequence
 if (!checkUserSeq()) {
  // if playing strict mode reset everything lol
  if (strict) {
   console.log("strict"); // remove
   // simonSeq = [];
   // level = 1;
  }
  displayError();
  error = true;
  console.log("User Error"); // remove
  genSimonSeq();
  console.log(simonSeq); // remove
 }
 // Checking end of sequence
 else if (userSeq.length == simonSeq.length && userSeq.length < total_GAME_LEVELS) {
  level++;
  userSeq = [];
  error = false;
  console.log("start simon");
  genSimonSeq();
 }
 // Check if User Wins
 if (userSeq.length == total_GAME_LEVELS) {
  console.log("YOU WON!!!");
  displayWin();
  resetGame();
 }
}


// Check User Seq with Simon Seq

function checkUserSeq() {
 for (var i = 0; i < userSeq.length; i++) {
  if (userSeq[i] != simonSeq[i]) {
   return false;
  }
 }
 return true;
}


// Display Error Function

function displayError() {
 playErrorSound();
 let counter = 0;
 let myError = setInterval(function () {
  $("#count").text("NO");
  counter++;
  if (counter == 3) {
   $("#count").text(level);
   clearInterval(myError);
   userSeq = [];
   counter = 0;
  }
 }, 300);
}


// Display Win Function

function displayWin() {
 let count = 0;
 let winInterval = setInterval(function () {
  count++;
  $("#count").text("WIN");
  $("#topScoreCount").text("🏆");
  if (count == 8) {
   clearInterval(winInterval);
   $("#count").text("--");
   $("#topScoreCount").text("20"); 
   count = 0;
  }
 }, 500);
}


// Generate Random Number

function getRandomNum() {
 let random = Math.floor((Math.random() * 4) + 1);
 simonSeq.push(random);
 console.log('Simon: ', simonSeq); // remove
}


// Create Function to Light Up Color Buttons & Play Sound Effect

function addClassSound(id, color) {
    $("#"+id).addClass(color + "-light");       
    playBtnSound();         
    setTimeout(function() {
        $("#"+id).removeClass(color + "-light");
    }, 500);        
    console.log("id & color are ", id, color);
}


// Add btn-diasble class to color buttons

function addDisable() {
 colorBtns.forEach(function (button) {
  button.classList.add("btn-disabled");
  // console.log(button.className);
 });
}


// Remove btn-disabled class from color buttons

function removeDisable() {
 colorBtns.forEach(function (button) {
  button.classList.remove("btn-disabled");
  // console.log(colorBtns);
 });
}


// Reset the Game 

function resetGame() {
 userSeq = [];
 simonSeq = [];
 level = 0;
 strict = false;
 error = false;
 $("#count").text(" ");
}


// Create Function for Play Button Sound 

function playBtnSound() {
    let btnSound = document.querySelector("#btnSound");
    btnSound.play();
}


// Create Error Sound Function 

function playErrorSound() {
    let errSound = document.querySelector("#errSound");
    errSound.play();
}


// Create Power On Sound Function 

function playPowerOnSound() {
    let powerOnSound = document.querySelector("#powerOnSound");
    powerOnSound.play();
}


// Create Function to Clear Display after Power On 

function clearTurnCount() {
    $("#count").text("--");
}


