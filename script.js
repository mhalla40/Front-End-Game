let begin = document.querySelector(".begin");
let directions = document.querySelector(".directions");
let correct = document.querySelectorAll(".correct");
let wrong = document.querySelectorAll(".wrong");
let answers = document.querySelectorAll(".answers");
let ask = document.querySelectorAll(".ask");
let results = document.querySelector("results");
let restart = document.querySelector("restart");

let currentQuestion = 0;
let lastQuestion = 0;
let nextQuestion = 0;
let score = 00;
let questionAnswered = 0;

begin.addEventListener("click", beginTrivia);
function beginTrivia() {
  ask[currentQuestion].style.display = "block";
  //this will make the first question load
  // console.log("current", ask[currentQuestion]);
  directions.style.display = "none";
  //removes the directions and start button
}
console.log(ask);

correct.forEach((buttons) => {
  buttons.addEventListener("click", next);
});
wrong.forEach((buttons) => {
  buttons.addEventListener("click", next);
});

function next(e) {
  console.log("Next Question");
  e.preventDefault();
  //this prevents the page from default
  lastQuestion = currentQuestion;
  currentQuestion++;
  console.log(currentQuestion);
  console.log(lastQuestion);
  ask[lastQuestion].style.display = "none";
  if (ask[currentQuestion] === undefined) {
    //console.log("undefined");
  } else {
    ask[currentQuestion].style.display = "block";
  }
}
for (let i = 0; i < correct.length; i++) {
  correct[i].addEventListener("click", correctAnswer);
  //console.log("correct");
}
for (let i = 0; i < wrong.length; i++) {
  wrong[i].addEventListener("click", wrongAnswer);
}

function correctAnswer(e) {
  score++;
  questionAnswered++;
  document.querySelector(".score").innerHTML = score;
  checkScore();
}
function checkScore() {
  if (questionAnswered == 10) {
    if (score > 7) {
      document.querySelector(".winner").style.display = "block";
    } else if (score === 7) {
      document.querySelector(".average").style.display = "block";
    } else {
      document.querySelector(".help").style.display = "block";
    }
  }
}

function wrongAnswer(e) {
  questionAnswered++;
  if (e.target.classList.contains("wrong")) {
    //console.log("this is wrong");
    checkScore();
  }
}

function refreshPage() {
  window.location.reload();
}
