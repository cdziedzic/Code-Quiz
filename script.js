let questions = [ {question: "commonly used data types do NOT include?", answers:["strings", "booleans", "alerts", "numbers"], correctAnswer: "alerts" }, ] 
let quiz = document.querySelector("#quiz");
let currentQuestion = document.querySelector("#question");
let answerOne = document.querySelector("#answer1")
let answerTwo = document.querySelector("#answer2")
let answerThree = document.querySelector("#answer3")
let answerFour = document.querySelector("#answer4")
let isCorrect = document.querySelector("#isCorrect")
let clickedAnswer = "";

let questionNumber =0;

function showQuestion() {

currentQuestion.textContent = questions[questionNumber].question
answerOne.textContent = questions[questionNumber].answers[0]
answerTwo.textContent = questions[questionNumber].answers[1]
answerThree.textContent = questions[questionNumber].answers[2]
answerFour.textContent = questions[questionNumber].answers[3]


}

quiz.addEventListener("click", function(event) {
    if(event.target.matches("button")){
        
        showQuestion();

        clickedAnswer = event.target.innerText;

        checkAnswer();

        
    }

})


function checkAnswer() {
    if (clickedAnswer === questions[questionNumber].correctAnswer) {
        
        isCorrect.textContent = "Correct!"
    }
    else {
        isCorrect.textContent = "Incorrect!"
    }
}

showQuestion();
