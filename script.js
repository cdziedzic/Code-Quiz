let questions = [ {question: "commonly used data types do NOT include?", answers:["strings", "booleans", "alerts", "numbers"], correctAnswer: "alerts" }, 
{question: "The condition in an if/else statement is enclosed with _______.", answers:["quotes", "curly brackets", "parenthesis", "square brackets"], correctAnswer: "parenthesis" },
{question: "Arrays in JavaScript can be used to store ______.", answers: ["numbers and strings", "other arrays","booleans","all of the above"], correctAnswer: "all of the above" },
{question: "String values must be enclodes within ______ when being assigned to variables.", answers:["commas","curly brackets","quotes","parenthesis"], correctAnswer: "quotes"},
{question: "A very useful tool used during development and debugging for printing content to the debugger is:", answers: ["JavaScript","terminal","for loops","console.log"], correctAnswer: "console.log"} ];


let quiz = document.querySelector("#quiz");
let currentQuestion = document.querySelector("#question");
let answerOne = document.querySelector("#answer1");
let answerTwo = document.querySelector("#answer2");
let answerThree = document.querySelector("#answer3");
let answerFour = document.querySelector("#answer4");
let isCorrect = document.querySelector("#isCorrect");
let clickedAnswer = "";

let questionNumber = 0;
let score = 0;
let time = 100;

function showHome() {
    document.getElementById("start").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("end").style.display = "none";
}

quiz.addEventListener("click", function(event) {
    if(event.target.matches("button")){
        clickedAnswer = event.target.innerText;
        
        if (questionNumber < questions.length) {
            questionNumber++;
            
            nextQuestion();
            checkAnswer();
        }   

        else {
            checkAnswer();
            endQuiz();
        }
    }
})

start.addEventListener("click", (showQuiz))

function showQuiz() {
    
    document.getElementById("quiz").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("start").style.display = "none";

    currentQuestion.textContent = questions[questionNumber].question
    answerOne.textContent = questions[questionNumber].answers[0]
    answerTwo.textContent = questions[questionNumber].answers[1]
    answerThree.textContent = questions[questionNumber].answers[2]
    answerFour.textContent = questions[questionNumber].answers[3]
    };

function nextQuestion() {
    currentQuestion.textContent = questions[questionNumber].question
    answerOne.textContent = questions[questionNumber].answers[0]
    answerTwo.textContent = questions[questionNumber].answers[1]
    answerThree.textContent = questions[questionNumber].answers[2]
    answerFour.textContent = questions[questionNumber].answers[3]
}

function checkAnswer() {
    if (clickedAnswer === questions[questionNumber-1].correctAnswer) {
        
        isCorrect.textContent = "Correct!"
        score+20;
    }
    else {
        isCorrect.textContent = "Incorrect!"
        time-5;
    }
};

function endQuiz() {};


showHome();