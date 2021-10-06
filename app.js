// Saving player order
var activePlayer = 0;
// Saving player's point
var score = [0, 0];
// Saving player's current point
var roundScore = 0;
// Saving cube's value
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
document.querySelector(".btn-roll").addEventListener("click", function () {
  var dice = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".png";
  if (dice !== 1) {
    roundScore = roundScore + dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none ";
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  score[activePlayer] = score[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
});
