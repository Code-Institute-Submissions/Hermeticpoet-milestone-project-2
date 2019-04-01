// Test all buttons & divs needed for click events

$("#red").click(function() {
    console.log("topLeft Btn Clicked!");
});

$("#green").click(function() {
    console.log("topRight Btn Clicked!");
});

$("#yellow").click(function() {
    console.log("bottomLeft Btn Clicked!");
});

$("#blue").click(function() {
    console.log("bottomRight Btn Clicked!");
});

$(".startBtn").click(function() {
    console.log("startBtn clicked!");
});

$("#powerOn").click(function() {
    console.log("Power Btn Clicked!");
});

$("#strictBtn").click(function() {
    console.log("Strict Btn Clicked!");
});

// Users will click the power button to turn on Game...
// Counter should say 'HI' & then show '-' to show Game is on & ready...
// User clicks startBtn to get the Game going (addEventListener)... 
// - when startBtn clicked it should call a function to reset all variables
//     and then a loop to create the array (var sequence) for the light 
//     flashing sequence.
// - the counter should show 1 and the first random colorBtn should flash 
//     while also making a sound. After which the AI should wait and allow 
//     the user to take a turn to repeat the sequence (var playerSeq).
// - Variables will also be needed to store; The current count, a boolean to
//     check if users answer is correct, when the user wins the game (function
//     needed here to create end of game effect), boolean that signals if the
//     game is powered on, and a boolean to know if strict mode is in play...
// - a function may be needed to regulate the interval between light flash of
//     each of the colorBtns??
// - when the AI sequence finishes, the game board should return to original
//     state awaiting for user to repeat sequence (colorBtns go back to original).
    
// Variables will also be needed to store the correct placement of html elements
// from the index page that are dynamic - the divs that will hold the count score,
// the colorBtns to show which one is flashing and then what was pressed by user!

// After the game is won, or a user has lost (strict mode) a function needs to be 
// called to reset everything again and [store local data if I get to it for 
// high score]. 


// Power on the Game and counter says hi then returns to -- ready state after
// a short pause - timeout. On variable used to hold state of game too
$("#powerOn").click(function() {
    $("#count").text("HI");
    setTimeout(clearTurnCount, 1500); // Clear HI text & change to --
    on = true;
});

// Create the setTimeout function argument clearTurnCount
function clearTurnCount() {
    $("#count").text("--");
}

// When power switched off everything should return to original position
// and the game should not be playable. Add true / false (on/off) to powerOn
// Use a variable to store state for this & then use if / else statements
const onBtn = document.querySelector("#powerOn");

$("#powerOn").click(function() {
    if (onBtn.checked == true) {
        on = true;
        $("#count").text("HI");
        setTimeout(clearTurnCount, 1500); // Clear HI text & change to --
    } else {
        on = false; // buttons cannot be pressed
        $("#count").text("");
        resetColors(); // Function to reset all colors
    }
});

// Create resetGame function to clear all colors
function resetColors() {
    $("#red").removeClass(".litRed");
    $("#green").removeClass(".litGreen");
    $("#yellow").removeClass(".litYellow");
    $("#blue").removeClass(".litBlue");
}

// The above classes are not good for attaching. Best to use a hyphenated add-on
// such as a '-light' or '-active' class that can dynamically added when Game
// or user activates the specific button. Classes for these buttons should be
// changed therefore also to allow for this... use actual colors themselves
// e.g. .red & then can dynamically attach -light => .red-light


// Create variables to hold above variables
const topLeft = document.querySelector("#red"); //redBtn
const topRight = document.querySelector("#green"); // greenBtn
const bottomLeft = document.querySelector("#yellow"); // yellowBtn
const bottomRight = document.querySelector("#blue"); // blueBtn
// Is this any shorter for code?? Maybe not!

// Press Start button to initialize the Game, set variables to hold sequence
// arrays to empty and then fill with random numbers between 1 & 4, therefore 
// need variables to hold those arrays. Counter needs to move up level so will
// require a variable to hold its value. If player wins there will be an
// occurence so need variable to hold that boolean & same for if they make error
// !error can check if users sequence is correct each time. Win variable
// will need to be set to false initially and will need to specify if its 
// players turn or computors as well. 
let simonSeq = [];
let playerSeq = [];
let count;
let win;
let error;
let playerTurn;
let compTurn;


// if power on & then start clicked call play function or if game has already
// been won then restart game when pressed
$(".startBtn").click(function() {
    if (on || win) {
        play(); 
    }
});

// Create play function
function play() {
    win = false;
    simonSeq = [];
    playerSeq = [];
    count = 1;
    $("#count").text("01");
    error = false;
    
    // Loop to create our sequence array
    for (i = 0; i < 20; i++) {
        simonSeq.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    // check that this has worked & generated 20 random Nums of 1-4
    console.log(simonSeq);
    
    // Now need to function to run the computers sequence with light & sound
    setInterval(gameTurn, 1000);
}

// Create the gameTurn function to play out compTurn sequence (need a variable
// to hold the simonSeq index value: flash)
let flash;

function gameTurn() {
    on = false; // buttons cannot be pressed
    
    if (flash == count) {
        resetColors();
        on = true;
    }
    
    if (compTurn) {
        setTimeout(function() {
            if(simonSeq[flash] == 1) red(); // if 1 call red function
            if (simonSeq[flash] == 2) green(); // if 2 call green function
            if (simonSeq[flash] == 3) yellow(); // if 3 call yellow function
            if (simonSeq[flash] == 4) blue(); // if 4 call blue function
            flash++;
        }, 300);
    }
}

// Create functions to add light colors to game as needed in sequence
function red() {
    $("#red").addClass(".litRed");
}

function green() {
   $("#green").removeClass(".litGreen"); 
}

function yellow() {
    $("#yellow").removeClass(".litYellow");
}  

function blue() {
    $("#blue").removeClass(".litBlue");
}  

// These ids are not great either. Considering I change the classes for easier
// importing of dynamic classes, these ids should be changed to numbers
// e.g. '#red' = '#1' etc,.. & classes for each button are then colors...


/*-- ************************************************
***************************************************** --*/
// Stop users from clicking buttons when game not in play or powered on

    $(".colorBtn").click(function() {
        if (!on) {
            return;
        }
    });  
    
$('.colorBtn, #startBtn').prop('disabled',true); //disabled buttons
$('.colorBtn, #startBtn').prop('disabled',false); //enabled buttons

function disableBtns () {
    // (3)
    // Flag for whether "delete answer" is enabled
    var deleteAnswerEnabled = true;


    $('.delete-answer').click(function(event) {
        event.preventDefault();

        // (4)
        // Don't do it if we're disabled
        if (!deleteAnswerEnabled) {
            return false;
        }

$("p").on("click", function(){
  alert("The paragraph was clicked.");
});

$("p").off("click", function(){
  alert("The paragraph was clicked.");
});

$(document).ready(function() {
    $("#startBtn").off("click");
    $(".colorBtn").off("click");

        
    });
});



/*-- ************************************************
***************************************************** --*/
// User Chooses Strict Mode

let userInput = $(this).class(".colorBtn");
console.log(this);
userInput = false;

if (strictOn) {
    if (displayError = true) {
        playErrorSound();
        gameOver();
    }
}

function gameOver() {
    $(".colorBtn").off("click");
    $("#count").text("--");
}

$("#strictOn").click(function() {
    if (strictBtn.checked == true) {
        strict = true;
        strictGameMode();
    } else {
        strict = false;
    }
});

//If player makes an INCORRECT move:
      if(!playerSeqCorrect()) {
        displayError();
        playerSeq = [];
        console.log("Incorrect move. Game ended.");
        setTimeout(strictAlert, 2500);
        simonSeq = [];
      }
      
      
/*-- *********************
*************************--*/
// winning color display loops through all buttons twice

function gameWin(){
    let i = 1;
    while (i <= 4) {
        $(".colorBtn")[2].addClass("-light");
    }
}

// Testing for ^ 
$(".red").click(function() {
    console.log(this);
    id = $(this).attr("id"); // 1
    color = $(this).attr("class").split(" ")[2]; // red
    console.log(color);
    console.log(id); 
    $("#"+id).addClass(color + "-light"); 
    console.log(this);
});


// ****************************************** // ******************************************
// ****************************************** // ******************************************
// ****************************************** // ******************************************

