
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
const onBtn = document.querySelector("#powerOn");


// User's Turn

function playerTurn() {  
    playerFlag = true
    $(".colorBtn").click(function() {
        id = $(this).attr("id");
        color = $(this).attr("class").split(" ")[2];
        playerSeq.push(id); // add to user's array for matching with simonSeq
        addClassSound(id, color);
        
        // Check User Sequence & display error if wrong
        
        if (!playerSeqCorrect()) {
            playErrorSound();
            displayError();
            playerSeq = [];
            gamePlay();
        }
        
         // Check User Sequence & up level & reset sequence if not a win 
        
        if (playerSeqCorrect()) {
            if (playerSeq.length == simonSeq.length && playerSeq.length < levelNum) {
                level++;
                playerSeq = [];
                gamePlay();
                playerTurn();
            }
        }
        
        // Check if User has Won Game
        
        if (playerSeqCorrect) {
            if (playerSeq.length == levelNum) {
                $("#count").text("WIN");
            }
        }
    });
}


// Computor's Turn

function compTurn() {  
    playerFlag = false;
    $(".colorBtn").off("click");
}



// Power Game Board On / Off

$("#powerOn").click(function() {
    if (onBtn.checked == true) {
        playPowerOnSound();
        $("#count").text("HI");
        setTimeout(clearTurnCount, 1000);
    
        // Press Start Button to Begin Game
    
        $(".startBtn").click(function() {
            if (onBtn) {
                level = 0;
                level++;
                gamePlay();
                playerTurn();
            }
        });
        
    } else {
        $("#count").text(" ");
        $(".colorBtn").off("click");
        $(".startBtn").off("click");
        strictFlag = false;
        level = 0;
        playerSeq = [];
        simonSeq = [];
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
}


// Generate Random Number Sequence 

function getRandomNum() {
    let random = Math.floor((Math.random() * 4) + 1);
    simonSeq.push(random);
}


// Check Player Sequence Against Simon Sequence

function playerSeqCorrect() {
    for (i = 0; i < playerSeq.length; i++) {
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
        if (counter == 3) {
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


// Create Function to Clear Display after Power On 

function clearTurnCount() {
    $("#count").text("--");
}

