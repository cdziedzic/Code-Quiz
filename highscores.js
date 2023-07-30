let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
let scoreItem = document.querySelector("#score-list")
let initials = highScores[0].initials
let score = highScores[0].score

populateScore();

function populateScore() {
    let newLi = document.createElement("li")
    newLi.textContent = initials + ": " + score
    scoreItem.appendChild(newLi)
    

}

clear.addEventListener("click",function (event) {
    event.preventDefault()
    localStorage.clear()
    document.getElementById("score-list").style.display = "none"

})