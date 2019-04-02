// Global Variables

let simonSeq = []; // ai sequence array
let playerSeq = []; // player sequence array
let level = 0; // Game level
let onFlag = false; // Flag to suspend button presses at wrong time
let playerFlag = false; // Player's move
let error; // If player's move is wrong
let id, color;

const levelNum = 3; // Max Num of levels to complete Game
const powerBtn = document.querySelector("#powerOn");
const startBtn = document.querySelector(".startBtn");
const strictBtn = document.querySelector("#strictOn");
const levelDisplay = document.querySelector("#count");
const topScoreDisplay = document.querySelector("#topScoreCount");
const colorBtns = document.querySelectorAll(".colorBtn");


// No buttons working on page load except power / strict

$(document).ready(function(e) {
    startBtn.classList.add("disabled");
    addDisable();
    
    // // Power on Game Board to allow functionality
    
    // powerBtn.addEventListener("click", function() {
    //     if (powerBtn.checked == true) {
    //         // console.log("true");
    //         playPowerOnSound();
    //         levelDisplay.textContent = "HI";
    //         setTimeout(clearDisplay, 1200);
    //         startBtn.classList.remove("disabled");
    //         // console.log(startBtn);
    
    //     }
    //     else if (powerBtn.checked == false) {
    //         startBtn.classList.add("disabled");
    //         addDisable();
    //         levelDisplay.textContent = " ";
    //         topScoreDisplay.textContent = "BYE";
    //         // console.log("false");
    //     }
    // });
});


// Power on Game Board to allow functionality
    
powerBtn.addEventListener("click", function() {
    if (powerBtn.checked == true) {
        // console.log("true");
        playPowerOnSound();
        levelDisplay.textContent = "HI";
        setTimeout(clearDisplay, 1200);
        startBtn.classList.remove("disabled");
        // console.log(startBtn);

    }
    else if (powerBtn.checked == false) {
        startBtn.classList.add("disabled");
        addDisable();
        levelDisplay.textContent = " ";
        topScoreDisplay.textContent = "BYE";
        // console.log("false");
    }
});


// Press Start Button to Begin or Reset the Game

startBtn.addEventListener("click", function() {
    level = 0;
    level++;
    playerSeq = [];
    simonSeq = [];
    levelDisplay.textContent = level;
    gamePlay();
    playerFlag = true;
    playerTurn();
});


// Player's Attempt to Repeat Sequence

function playerTurn() {
    if (playerFlag == true) {
        // console.log("play away!");
        removeDisable();
        $(".colorBtn").click(function() {
            id = $(this).attr("id");
            color = $(this).attr("class").split(" ")[2];
            playerSeq.push(id); // add to user's array for matching with simonSeq
            console.log(id + " " + color);
            addClassSound(id, color);

            // If player makes a wrong move

            if (!compareSeq()) {
                playerSeq = [];
                error = true;
                console.log("Wrong, sorry");
                playErrorSound();
                setTimeout(displayError, 400);
                simonSeq = [];
            }


            // If player makes correct move

            if (playerSeq.length == simonSeq.length && playerSeq.length < levelNum) {
                level++;
                playerSeq = [];
                error = false;
                gamePlay();
                playerTurn();
            }


            // Game Win

            else if (playerSeq.length == levelNum) {
                win();
                console.log("You've Won!!!");
            }
        });
    }
}


// Create Game Play Function to Run AI program

function gamePlay() {
 getRandomNum();
 let i = 0;
 // set an interval of time between each pad lighting up
 let gameInterval = setInterval(function () {
  id = simonSeq[i]; // grab id match of the random generated Num
  color = $("#" + id).attr("class").split(" ")[2]; // grab its 3rd class
  addClassSound(id, color); // call function to add color class & btnSound
  i++;
  if (i == simonSeq.length) {
   clearInterval(gameInterval); // clear the interval
  }
 }, 1400);
}


// Compare Player Sequence for Match with Simon or Display Error

function compareSeq() {
 for (var i = 0; i < playerSeq.length; i++) {
  if (playerSeq[i] != simonSeq[i]) {
   return false;
  }
 }
 return true;
}


// Display Error Function

function displayError() {
 console.log("error");
 let counter = 0;
 let playerError = setInterval(function () {
  $("#count").text("NO");
  counter++;
  if (counter == 4) {
   $("#count").text(level);
   clearInterval(playerError);
   playerSeq = [];
   counter = 0;
  }
 }, 500);
}

// let updateLevel = function () {
//  level++;
//  displayLevel.textContent(level);
// };


// Generate Random Number for simonSeq

function getRandomNum() {
 let random = Math.floor((Math.random() * 4) + 1);
 simonSeq.push(random);
 console.log(simonSeq);
}


// Check Player Sequence is a Match to Simon Sequence

function playerSeqCorrect() {
 for (i = 0; i < playerSeq.length; i++) {
  if (playerSeq[i] != simonSeq[i]) {
   return false;
  }
 }
 return true;
}


// Add Class & Sound Function

function addClassSound(id, color) {
 $("#" + id).addClass(color + "-light"); // add light class to change color
 playBtnSound(); // play button sound at same time
 setTimeout(function () {
  $("#" + id).removeClass(color + "-light");
 }, 500); // remove light class again after 1/2 second 
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


// Display Text Fuction

function clearDisplay() {
 levelDisplay.textContent = "--";
}