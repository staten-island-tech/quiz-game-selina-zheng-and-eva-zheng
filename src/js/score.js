let score = 0
const scoreboard = document.createElement("span");
document.body.prepend(scoreboard);
scoreboard.prepend(score);
scoreboard.innerHTML = "Your Score: " + score;
scoreboard.hide = true;