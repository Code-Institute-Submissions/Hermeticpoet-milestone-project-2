// Variables
let playerSeq = [];
let simonSeq = [1, 3, 2, 4]; // For Initial Test purposes ONLY!**!
let id, color, level = 0;
// let on = false;
let win = false;

const onBtn = document.querySelector("#powerOn");
const levelNum = 4;

// Page Loads & then Power Game Board Up

$(document).ready(function() {
    $("#powerOn").click(function() {
        if (onBtn.checked == true) {
            playPowerOnSound();
            $("#count").text("HI");
            setTimeout(clearTurnCount, 1000); // Clear HI text & change to --
        } else {
            $("#count").text(" "); // Blank display if power turned off
        }
    });
});


// Create Power On Sound Function 

function playPowerOnSound() {
    powerOnSound = document.querySelector("#powerOnSound");
    powerOnSound.play();
}


// Create Function to Clear Display after Power On 

function clearTurnCount() {
    $("#count").text("--");
}




