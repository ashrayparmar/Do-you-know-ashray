var readlineSync = require("readline-sync");
var ck = require("chalk");
var score = 0;

var userName = readlineSync.question(
  ck.rgb(248, 248, 255).bgBlack("What is your name? ")
);

console.log(
  ck.blue.underline.bold(
    "\nHi " +
      ck.underline.red(userName) +
      " welcome to " +
      ck.underline.red("~DO YOU KNOW Ashray~\n")
  )
);

//array of questions
questions = [
  {
    question:
      "I'm currently in which year of Engineering? \n1. Third Year\n2. Fourth Year\n3. First Year\n",
    answer: "2",
  },
  {
    question: "What is my age? \n1. 21\n2. 23\n3. 22\n",
    answer: "3",
  },
  {
    question:
      "What do I love the most in the given options? \n1. Travelling\n2. Coding\n3. Gaming\n",
    answer: "1",
  },
];

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(ck.green("You are right"));
    score += 1;
  } else {
    console.log(ck.red("You are wrong"));
    score -= 1;
  }

  console.log("Your current score is: ", score);
  console.log(ck.yellowBright("\n~~~~~~~~~~~~~~~~~~~~~~~~\n"));
}

//loop for giving answers
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(ck.bgCyan("YAY! Your Scored: ", score));
