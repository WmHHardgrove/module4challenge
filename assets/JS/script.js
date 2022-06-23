var timerEl = document.getElementById('countdown');
var button = document.getElementById('startbutton');
var quiznbuttonEl = document.getElementById('quiznbutton')
var containerEl =   document.getElementById('qacontainer')
var timeLeft = 100;
var timeInterval
var answerBtn = document.getElementById('answers')
var answer1El = document.getElementById('answers1')
var answer2El = document.getElementById('answers2')
var answer3El = document.getElementById('answers3')
var answer4El = document.getElementById('answers4')
var questionEl = document.getElementById("question")
var quizQuestion = [
  { 
    question: "question number 1?", 
    answers: ["answer1", "answer2", "correct", "answer4"],
    correct: "correct"
  },
  { 
    question: "question number 2?", 
    answers: ["answer1", "correct", "answer3", "answer4"],
    correct: "correct"
  },
  {
    question: "question number 3?", 
    answers: ["answer1", "answer2", "correct", "answer4"],
    correct: "correct"
  },
  { 
    question: "question number 4?", 
    answers: ["correct", "answer2", "answer3", "answer4"],
    correct: "correct"
  },
  { 
    question: "question number 5?", 
    answers: ["answer1", "answer2", "answer3", "correct"],
    correct: "correct"
  },
  { 
    question: "question number 6?", 
    answers: ["answer1", "answer2", "correct", "answer4"],
    correct: "correct"
  },
  { 
    question: "question number 7?", 
    answers: ["answer1", "correct", "answer3", "answer4"],
    correct: "correct"
  },
  { 
    question: "question number 8?", 
    answers: ["answer1", "answer2", "answer3", "correct"],
    correct: "correct"
  },
  { 
    question: "question number 9?", 
    answers: ["answer1", "correct", "answer3", "answer4"],
    correct: "correct"
  },
  { 
    question: "question number 10?", 
    answers: ["answer1", "answer2", "answer3", "correct"],
    correct: "answer1"
  },
]

var questionValue = 0

function displayNextQuestion() {
  questionEl.textContent = "Question : " + quizQuestion[questionValue].question
  for (var i = 0; i < quizQuestion[questionValue].answers.length; i ++) {
    if (i === 0){
      
      answer1El.textContent = quizQuestion[questionValue].answers[i]
    }if (i === 1){

      answer2El.textContent = quizQuestion[questionValue].answers[i]
    }if (i === 2){

      answer3El.textContent = quizQuestion[questionValue].answers[i]
    }if (i === 3){

      answer4El.textContent = quizQuestion[questionValue].answers[i]
    }
  }
}




function countdown() {
  quiznbuttonEl.classList.add("hide")
  containerEl.classList.remove("hide")
  displayNextQuestion()

  timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else {
      endGame()
    }
  }, 1000)
}

function endGame() {
  clearInterval(timeInterval);
  containerEl.classList.add("hide");
  timerEl.textContent = "GAME OVER" + "  " +"Score: " + timeLeft ;
}


function buttonClickHandler(event) {
  var userAnswer = event.target.textContent
  console.log(userAnswer)
  if (userAnswer === quizQuestion[questionValue].correct){
   console.log("correct")

  }else{
    timeLeft = timeLeft - 10
  }
  questionValue++
  if (questionValue === quizQuestion.length){
    endGame()
  }else{
    displayNextQuestion()

  }
}


button.onclick = countdown;

answers.onclick = buttonClickHandler

