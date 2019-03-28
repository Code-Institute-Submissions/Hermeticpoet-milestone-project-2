// Variables
let playerSeq = [];
let simonSeq = [1, 3, 2, 4]; // For Initial Test purposes ONLY!**!
let id, color, level = 0;
let on = false;
let win = false;

const strictBtn = document.querySelector("#strictOn");
const onBtn = document.querySelector("#powerOn");
const levelNum = 2;


// Page Loads & then Power Game Board Up

$(document).ready(function() {
    
    $("#powerOn").click(function() {
        if (onBtn.checked == true) {
            playPowerOnSound();
            $("#count").text("HI");
            setTimeout(clearTurnCount, 1000);       // Clear HI text & change to --
        } else {
            $("#count").text(" ");      // Blank display if power turned off
        }
    });
    
    // Press the Start Button to Begin Game
    
    $(".startBtn").click(function() {
        level++; 
        play();
    });
    
    // Add Listener to colorBtns 
    
    $(".colorBtn").click(function() {
        id = $(this).attr("id");
        color = $(this).attr("class").split(" ")[2];
        playerSeq.push(id); // add to user's array for matching with simonSeq
        console.log(id +" "+ color);
        addClassSound(id, color);
        
        
        // Check User Sequence is correct match to Simon, if not display error
        
        if (!playerSeqCorrect()) {
            playErrorSound();
            displayError();
            playerSeq = [];
        }
        
        
        // If User guess matches length of simon sequence but not win, then
        // up level and reset player's sequence array & call play function again
        
        if (playerSeq.length == simonSeq.length && playerSeq.length < levelNum) {
            level++;
            playerSeq = []; 
            play();
        }
        
         
        // Check if User has Won Game
        
        if (playerSeq.length == levelNum) {
            $("#count").text("WIN");
        }
    });
});


// Create Play Function for Simon Sequence 

function play() {
    $("#count").text(level); 
    // getRandomNum();      // generate random number for simonSeq ***** uncomment!
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


/*--  Check Player Sequence against Simon to be Correct & Loop
      Thru index of playerSeq and test against same index of simonSeq --*/

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
    console.log("error");
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
    }, 500);
}


// Add Temp colorClass & Play Sound 

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




