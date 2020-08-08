//I.A. Start button that will (a) call function start game. Start game will make sure the timer will be set to 60 seconds; It will also push the questions to the array.
$(document).ready(function() {

$("#start").on("click", startGame); //On click, call function, startGame

function startGame() { //StartGame will startClock and start Questions
  startClock();
  console.log(startClock);
  startQuestions();
}

function startClock() {
  var number = 60;
  var intervalId;
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
  number--;
  $("#time").html("<h2>" + number + "</h2>");
  if (number === 0) {
  stop();
  alert("Time Up!");
    }
  }

function stop() {
  clearInterval(intervalId);
}
run();
}

// //I.B. Set up array where each question is an object with the properties of question, guesses, and correct answer. the guesses are an array so that we can easily take the index number of the array and compare it to the correct choice. Push these questions to the div "questions"

var questions = [
    { //Question 1
    q: "1. Which President signed the act creating the National Park Service?",
    g: ["Woodrow Wilson", "Theodore Roosevelt", "George H.W. Bush", "Franklin D. Roosevelt", "John F. Kennedy"],
    c1: 0,
  },          
    { //Question 2
    q: "2. Which National Park is the oldest U.S. National Park?",
    g: ["Zion, Bryce, Yellowstone, Shenandoah, Glacier"],
    c2: 1,
  },
    { //Question 3
    q: "3. The three highest waterfalls in the world are located in which National Park?",
    g: ["Zion, Bryce, Yellowstone, Shenandoah, Glacier"],
    c3: 3,
  },
    { //Question 4
    q: "4. Which National Park is known as one of the Seven National Wonders of the World?",
    g: ["Zion, Bryce, Yosemite, Shenandoah, Grand Canyon"],
    c4: 4,
  },
];

function startQuestions() {
  for (var i = 0; i < questions.length; i++) {
    questionRow();

      function questionRow () {
        var qRow = $("<div>");
        $("#questions").append(qRow);
        qRow.html('<row>' + questions[i].q + '</row>');
          for (var j = 0; j < questions[i].g[j]; j++) {
          guessButtons();
          }

          function guessButtons() { //This function is supposed to create a button for each guess for each question, but i coudln't get it to work
            var gBtn = $('<input type="button" value="test"/>');
            $("#questions").append(gBtn); 
          }
        }
    }
  }

// I.C. create click button events for correct answers, and if they click the correct answer, add one to wins, and if they click incorrect answer, then add one to losses - I did not get to this!

// I.D. Function to compare userchoices to answers and if correct, win++, else losses++ - I did not complete this
var correctAnswer;
var userAnswer;
var Correct = 0;
var Incorrect = 0;

if (userAnswer === correctAnswer) {
    Correct++;
  } else if (userAnswer === "") {
    numUnanswered++;
  } else {
      Incorrect++;
    }
  }

}); //closes the jquery document ready
