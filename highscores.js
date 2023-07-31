let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let scoreItem = document.querySelector("#score-list")


populateScore();
// pulls variables from local storage and adds to score-list
function populateScore() {

    let savedScore = `${localStorage.getItem("initials")} ${localStorage.getItem("score")}` 

    document.querySelector("#score-list").textContent = savedScore

}

//clears high scores
clear.addEventListener("click",function (event) {
    event.preventDefault()
    localStorage.clear()
    document.getElementById("score-list").style.display = "none"

})
// redirect to quiz splash screen
goBack.addEventListener("click", function(event) {
    event.preventDefault()
    window.location="index.html"


})