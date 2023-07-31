let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let scoreItem = document.querySelector("#score-list")


populateScore();

function populateScore() {

    let savedScore = `${localStorage.getItem("initials")} ${localStorage.getItem("score")}` 

    document.querySelector("#score-list").textContent = savedScore

}

clear.addEventListener("click",function (event) {
    event.preventDefault()
    localStorage.clear()
    document.getElementById("score-list").style.display = "none"

})

goBack.addEventListener("click", function(event) {
    event.preventDefault()
    window.location="index.html"


})