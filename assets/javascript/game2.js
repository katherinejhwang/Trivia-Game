//index.html page --> Button to start the Game and start the counter-ticking down - DONE!
$(document).ready(function() {
  function startGame() {
    
}

$("#start").on("click", startGame); //Works

// Timer function set at 100 seconds, decrement 1 second and when the timer hits 0, alerts Time's Up and then opens the done html window -- ?Not working!
var number = 100; //sets Timer to 100
var intervalId;
function run() {
    clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
function decrement() {
    number--;
$("#timer").html(number); 
};

// var timeleft = 60;
// var downloadTimer = setInterval(function(){
//   document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
//   timeleft -= 1;
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = "Finished"
//   }
// }, 1000);

if (number === 0) { //when timer hits 0, alerts Timeup, and then goes to the end.html
    stop();
    alert("Time Up!");
    }
function stop() {
    clearInterval(intervalID);
    window.open("./done.html", "_self");
}

//for question, if it matches answer, then win++
var questions = [
    { //Question 1
    q: "Which President signed the act creating the National Park Service?",
    a: ["Woodrow Wilson", "Theodore Roosevelt", "George H.W. Bush", "Franklin D. Roosevelt", "John F. Kennedy"],
    correct1: 0,
},          
    { //Question 2
    q: "Which National Park is the oldest U.S. National Park?",
    ans: ["Zion, Bryce, Yellowstone, Shenandoah, Glacier"],
    correct2: 1,
},
    { //Question 3
    q: "The three highest waterfalls in the world are located in which National Park?",
    ans: ["Zion, Bryce, Yellowstone, Shenandoah, Glacier"],
    correct3: 3,
},
    { //Question 4
    q: "Which National Park is known as one of the Seven National Wonders of the World?",
    ans: ["Zion, Bryce, Yosemite, Shenandoah, Grand Canyon"],
    correct4: 4,
},
];

var labels = ["first", "second", "third", "fourth"];

// function for displaying questions
var questionDisplay = function() {
    $("#questions").empty();
    for (var i = 0; i < 4; i++) {
    $('.questions').prepend('<div class="' + q[i].name + '"></div>');
    $(q[i].divClass).append('<div class ="ques-title">' + q[i].q + '</div>');

// loops through answers for each radio button
    for (var i = 0; i <= 3; i++) {
    $(questions[i].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + q[i].a[i] + '"/><label for="' + labels[i] + '">' + questions[i].ans[i] + '</label>');
    }
    $('.questions').prepend('<hr />');    
    }
}

//conditional statement for wins and losses and unanswered
var correctAnswer;
var userAnswer;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

if (userAnswer === correctAnswer) {
    numCorrect++;
  } else if (userAnswer === "") {
    numUnanswered++;
  } else if (userAnswer !== correctAnswer) {
    {
      numIncorrect++;
    }
  }
}); //closes jquery tag
