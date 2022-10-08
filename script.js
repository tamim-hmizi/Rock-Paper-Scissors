function getComputerChoice() {
  let arr = ["ROCK", "PAPER", "SCISSORS"];
  let i = Math.floor(Math.random() * 3);
  return arr[i];
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toUpperCase()) {
    case "ROCK":
      if (computerSelection === "PAPER") return "You Lose! Paper beats Rock";
      else if (computerSelection === "ROCK")
        return "Draw ! Rock Is friends with other Rocks";
      else return "you win ! Rock beats Scissors";
      break;
    case "PAPER":
      if (computerSelection === "SCISSORS")
        return "You Lose! Scissor beats Paper";
      else if (computerSelection === "PAPER")
        return "Draw ! Paper Is friends with other Papers";
      else return "you win ! Paper beats Rock";
      break;
    case "SCISSORS":
      if (computerSelection === "ROCK") return "You Lose! Rock beats Scissors";
      else if (computerSelection === "SCISSORS")
        return "Draw ! Sissor Is friends with other Sissors";
      else return "you win ! Scissors beats Paper";
      break;
  }
}

function ui_game() {
  const btns = document.querySelectorAll("button");
  const div = document.querySelector(".result");
  const result = document.createElement("p");
  const player = document.querySelector(".player");
  const computer = document.querySelector(".computer");
  let playerscore = 0,
    computerscore = 0;
  player.textContent = playerscore;
  computer.textContent = computerscore;

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
      let str = playRound(btns[i].textContent, getComputerChoice());
      if (str.match(/you win/i)) playerscore++;
      else if (str.match(/you lose/i)) computerscore++;
      result.textContent = str;
      div.appendChild(result);
      player.textContent = playerscore;
      computer.textContent = computerscore;
       if (playerscore == 5) {
         result.textContent =
           "Player wins the game with " + playerscore + " to " + computerscore;
         div.appendChild(result);
         playerscore = 0;
         computerscore = 0;
         player.textContent = playerscore;
         computer.textContent = computerscore;
       } else if (computerscore == 5) {
         result.textContent =
           "Computer wins the game with " +
           computerscore +
           " to " +
           playerscore;
         div.appendChild(result);
         playerscore = 0;
         computerscore = 0;
         player.textContent = playerscore;
         computer.textContent = computerscore;
       }
    });
  }
 
}

ui_game();
