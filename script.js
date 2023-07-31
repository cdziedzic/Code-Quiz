let questions = [ {question: "1. Commonly used data types do NOT include?", answers:["strings", "booleans", "alerts", "numbers"], correctAnswer: "alerts" }, 
{question: "2. The condition in an if/else statement is enclosed with _______.", answers:["quotes", "curly brackets", "parenthesis", "square brackets"], correctAnswer: "parenthesis" },
{question: "3. Arrays in JavaScript can be used to store ______.", answers: ["numbers and strings", "other arrays","booleans","all of the above"], correctAnswer: "all of the above" },
{question: "4. String values must be enclosed within ______ when being assigned to variables.", answers:["commas","curly brackets","quotes","parenthesis"], correctAnswer: "quotes"},
{question: "5. A very useful tool used during development and debugging for printing content to the debugger is:", answers: ["JavaScript","terminal","for loops","console.log"], correctAnswer: "console.log"} ];


let quiz = document.querySelector("#quiz");
let currentQuestion = document.querySelector("#question");
let answerOne = document.querySelector("#answer1");
let answerTwo = document.querySelector("#answer2");
let answerThree = document.querySelector("#answer3");
let answerFour = document.querySelector("#answer4");
let isCorrect = document.querySelector("#isCorrect");
let timeEl= document.querySelector("#timer")

let clickedAnswer = "";
let questionNumber = 0;
let score = 0;
let time;
let timeLeft= 100;

showHome();
function showHome() {
    document.getElementById("start").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("end").style.display = "none";
    timeEl.textContent = timeLeft  +  " seconds"

}

quiz.addEventListener("click", function(event) {
    if(event.target.matches("button")){
        clickedAnswer = event.target.innerText;
            questionNumber++;
        
        if (questionNumber < questions.length) {
        
            checkAnswer();
            nextQuestion();
        }   

        else {
            checkAnswer();
            endQuiz();
        }
    }
})

startButton.addEventListener("click", function (event) {
    event.preventDefault()
    startQuiz()

})

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    saveScores()
    window.location="highscores.html"
    
})

tryAgain.addEventListener("click", function(event) {
    event.preventDefault()
    location.reload()


})

function startQuiz() {
    
    document.getElementById("quiz").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("start").style.display = "none";

    currentQuestion.textContent = questions[questionNumber].question
    answerOne.textContent = questions[questionNumber].answers[0]
    answerTwo.textContent = questions[questionNumber].answers[1]
    answerThree.textContent = questions[questionNumber].answers[2]
    answerFour.textContent = questions[questionNumber].answers[3]

    timeLeft = 100
    time = setInterval(function() {
        timeLeft--;
        timeEl.textContent = timeLeft  +  " seconds"

        if (timeLeft <= 0) {
            clearInterval(time);
            endQuiz();
        }
        if (questionNumber >= questions.length) {
            clearInterval(time);
            endQuiz();
        }
     
    
    
    
    }, 1000) 
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
        
        score += 20;
        isCorrect.textContent = "Correct!";
    }
    
    else {
        isCorrect.textContent = "Incorrect!";
        timeLeft -= 5;
        timeEl.textContent = timeLeft  +  " seconds"
    }
};

function endQuiz() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("start").style.display = "none";
    document.querySelector("#score").textContent = "Your Score was " + score + "."
    timeEl.textContent = timeLeft  +  " seconds"
    isCorrect

};

function saveScores() {
    let initials = document.getElementById("initials").value
    localStorage.setItem("initials", initials)
    localStorage.setItem("score", score)
   
}



