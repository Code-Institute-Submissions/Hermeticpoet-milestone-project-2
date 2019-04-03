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
const NUM_OF_LEVELS = 5;

//1- start board sequence
$(document).ready(function () {
 $('.startBtn').attr('disabled','disabled');
 addDisable();
 console.log(startBtn);
 console.log(colorBtns);
 
 // Power Game Board On / Off
 
 $("#powerOn").click(function() {
    if (onBtn.checked == true) {
        console.log("game is on!"); // remove
        // playPowerOnSound();
        // $("#count").text("HI");
        // setTimeout(clearTurnCount, 1500);
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
 
 
$(".startBtn").click(function() {
 strict = false;
 error = false;
 level++;
 simonSeq = [];
 userSeq = [];
 genSimonSeq();

 console.log("strict is ", strict);
 console.log("error is ", error);
 console.log("userSeq is ", userSeq);
 console.log("simonSeq is ", simonSeq);
 console.log("level is ", level);
 });

 /*//user pad listener
 $(".colorBtn").click(function () {
  id = $(this).attr("id");
  color = $(this).attr("class").split(" ")[1];
  userSequence();
 });

 //strict mode listener
 $(".strict").click(function () {
  level = 0;
  level++;
  simonSeq = userSeq = [];
  strict = true;
  simonSequence();
 });*/
});


// simon sequence 

function genSimonSeq() {
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
}


// generate random number
function getRandomNum() {
 let random = Math.floor((Math.random() * 4) + 1);
 simonSeq.push(random);
 console.log('Simon: ', simonSeq); // remove
}


// Create Function to Light Up Color Buttons & Play Sound Effect

function addClassSound(id, color) {
    $("#"+id).addClass(color + "-light");       
    // playBtnSound();         
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


/* reset game */
function resetGame() {
 userSeq = [];
 simonSeq = [];
 level = 0;
 strict = false;
 $("#count").text(" ");
}