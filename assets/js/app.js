// Variables

let sequence = [];
let playerSeq = [];
let flash;
let count;
let correctSeq;
let compTurn;
let strict = false;
let sound = true;
let on = false;
let win;

// Element Referencing Variables

const turnCount = document.querySelector("#count"); // Score Counter
const topLeft = document.querySelector("#red"); //redBtn
const topRight = document.querySelector("#green"); // greenBtn
const bottomLeft = document.querySelector("#yellow"); // yellowBtn
const bottomRight = document.querySelector("#blue"); // blueBtn
const strictBtn = document.querySelector("#strictOn");
const onBtn = document.querySelector("#powerOn");
const startBtn = document.querySelector("#startBtn");

// ***** EVENT LISTENERS *****

// Switch Power to Game on

$("#powerOn").click(function() {
    if (onBtn.checked == true) {
        on = true;
        turnCount.textContent = "HI";
        setTimeout(clearTurnCount, 1500);
    } else {
        on = false;
        turnCount.textContent = "";
        clearColor();
    }
});

// Switch Strict Mode on

$("#strictOn").click(function() {
    if (strictBtn.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

// Start Button to Initialize the Game

$(".startBtn").click(function() {
    if (on || win) {
        play();
    }
});

// Reset all variables for New Game
function play() {
    
}







