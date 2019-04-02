
// Variables
let playerSeq = [];
let simonSeq = []; 
let level = 0;
let playerFlag = false;
let strictFlag = false;
let id;
let color;

const levelNum = 3; // Testing with low level Num
const strictBtn = document.querySelector("#strictOn");
const startBtn = document.querySelector(".startBtn");
const onBtn = document.querySelector("#powerOn");
const levelDisplay = document.querySelector("#count");
const topScoreDisplay = document.querySelector("#topScoreCount");
const colorBtns = document.querySelectorAll(".colorBtn");


// No buttons working on page load except power / strict

$(document).ready(function () {
 startBtn.classList.add("disabled");
 addDisable();
});


// User's Turn

$(".colorBtn").click(function() {
    id = $(this).attr("id");
    color = $(this).attr("class").split(" ")[2];
    playerSeq.push(parseInt(id)); // add to user's array for matching with simonSeq
    addClassSound(id, color);
    
    console.log('Player: ', playerSeq);
    console.log('Simon: ', simonSeq);
    // Check User Sequence & display error if wrong
    
    // if (!playerSeqCorrect()) {
    //     playErrorSound();
    //     displayError();
    //     playerSeq = [];
    //     // playerTurn();
    // } else if (playerSeq.length == simonSeq.length && playerSeq.length < levelNum) {
    //     level++;
    //     playerSeq = []; 
    //     gamePlay();
    //     playerTurn();
    // }
    
    
    if (playerSeq.length == simonSeq.length && playerSeq.length < levelNum) {
        
        console.log('Arrays are the same length!');
        
        let correct = true;
        
        for(let i =0; i < simonSeq.length; i++) {
            if(simonSeq[i] != playerSeq[i]) {
                correct = false;
            }
        }
        if(correct) {
            console.log('Arrays match!')
            level++;
            playerSeq = []; 
            gamePlay();
        }
        
    } else {
        console.log('Arrays have different lengths!')
        
        // first click the playerSeq will be 1 item long
        // second click it will be 2, etc...
        // since they're different lengths, we just need to know if
        // playerSeq == simonSeq[0:playerSeq.length] (look up the .slice() function)
    }
    
    console.log('playerSeq Now: ', playerSeq);
    
     // Check User Sequence & up level & reset sequence if not a win 
    
    // if (playerSeqCorrect()) {
    //     if (playerSeq.length == simonSeq.length && playerSeq.length < levelNum) {
    //         level++;
    //         playerSeq = []; 
    //         gamePlay();
    //         playerTurn();
    //     }
    // }
    
    // // Check if User has Won Game
    
    // else if (playerSeqCorrect) {
    //     if (playerSeq.length == levelNum) {
    //         $("#count").text("WIN");
    //     }
    // }
});

function playerTurn() {  
    playerFlag = true
    removeDisable();
}


// Computor's Turn

function compTurn() {  
    playerFlag = false;
    addDisable();
}


// Power Game Board On / Off

$("#powerOn").click(function() {
    if (onBtn.checked == true) {
        playPowerOnSound();
        $("#count").text("HI");
        setTimeout(clearTurnCount, 1500);
        startBtn.classList.remove("disabled");
    
        // Press Start Button to Begin Game
    
        /*$(".startBtn").click(function() {
            if (onBtn) {
                level = 0;
                simonSeq = [];
                playerSeq = [];
                level++;
                gamePlay();
                playerTurn();
            }
        });*/
        
    } else {
        $("#count").text(" ");
        startBtn.classList.add("disabled");
        addDisable();
        strictFlag = false;
        level = 0;
        playerSeq = [];
        simonSeq = [];
    }
});

// Press Start Button to Begin Game
    
$(".startBtn").click(function() {
    if (onBtn.checked) {
        level = 0;
        simonSeq = [];
        playerSeq = [];
        level++;
        gamePlay();
    }
});


// Create Play Function

function gamePlay() {
    compTurn();
    $("#count").text(level);
    getRandomNum();
    let i = 0;
        // set an interval of time between each pad lighting up
    let gameInterval = setInterval(function() {
        id = simonSeq[i];       // grab id match of the random generated Num
        color = $("#"+id).attr("class").split(" ")[2];      // grab its 3rd class
        addClassSound(id, color);       // call function to add color class & btnSound
        i++;
        if (i == simonSeq.length) {
        clearInterval(gameInterval);        // clear the interval
        }
    }, 1200);
    playerTurn();
}


// Generate Random Number Sequence 

function getRandomNum() {
    let random = Math.floor((Math.random() * 4) + 1);
    simonSeq.push(random);
}


// Check Player Sequence Against Simon Sequence

function playerSeqCorrect() {
    for (let i = 0; i < playerSeq.length; i++) {
        if (playerSeq[i] != simonSeq[i]) {
            return false;
        }
    }
    return true;
}


// Display Error Function

function displayError() {
    compTurn();
    let counter = 0;
    let playerError = setInterval(function() {
        $("#count").text("NO");
        counter++;
        if (counter == 4) {
            $("#count").text(level);
            clearInterval(playerError);
            playerSeq = [];
            counter = 0;
        }
    }, 400);
}


// Create Function to Light Up Color Buttons & Play Sound Effect

function addClassSound(id, color) {
    $("#"+id).addClass(color + "-light");       // add light class to change color
    playBtnSound();         // play button sound at same time
    setTimeout(function() {
        $("#"+id).removeClass(color + "-light");
    }, 500);        // remove light class again after 1/2 second 
}


// Create Function for Play Button Sound 

function playBtnSound() {
    btnSound = document.querySelector("#btnSound");
    btnSound.play();
}


// Create Error Sound Function 

function playErrorSound() {
    errSound = document.querySelector("#errSound");
    errSound.play();
}


// Create Power On Sound Function 

function playPowerOnSound() {
    powerOnSound = document.querySelector("#powerOnSound");
    powerOnSound.play();
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


// Create Function to Clear Display after Power On 

function clearTurnCount() {
    $("#count").text("--");
}

