$(document).ready(function () {
  $("#quizForm").hide();
  $("#gameover").hide();

  //Timer function
  let sec = 10;
  function startTimer() {
    // $("#quizForm").show();
    setInterval(function () {
      document.getElementById("timer").innerHTML = sec;
      if (sec > 0) {
        sec--;
      }
      if (sec == 0) {
        sec = "Time's Up!";
        console.log("times up");
        submitAnswers();
      }
    }, 600);
  }

  function submitAnswers() {
    console.log("test3");
    const total = 4;
    const score = 0;
    const incorrect = total - score;

    // Get user input
    const q1 = document.forms["quizForm"]["q1"].value;
    const q2 = document.forms["quizForm"]["q2"].value;
    const q3 = document.forms["quizForm"]["q3"].value;
    const q4 = document.forms["quizForm"]["q4"].value;

    const userInput = [q1, q2, q3, q4];

    // Set correct answers
    const answers = ["b", "c", "c", "d"];

    // Validation
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] == null || userInput[i] == "") {
        userInput[i] = "g";
      }
    }

    // Score Answers
    for (let i = 1; i <= userInput.length; i++) {
      if (userInput[i] == answers[i - 1]) {
        score++;
        console.log("question" + [i] + "=" + score + "score");
        console.log(incorrect + "incorrect");
      }
    }

    document.getElementById("correct").innerHTML = score;
    document.getElementById("incorrect").innerHTML = incorrect;

    $("#gameover").show();

    return false;
  }

  $("#start").click(function () {
    startTimer();
    $("#instructions").hide();
    $("#quizForm").show();
    $("#start").hide();
    userInput = [];
  });

  //Submit button
  $("#submit").click(function () {
    submitAnswers();
    setInterval(function () {
      document.getElementById("timer").innerHTML = "Submitted";
    });
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
}); //closes the jquery document ready
