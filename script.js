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

function game() {
  let playerscore = 0,
    computerscore = 0;
  for (let i = 0; i < 5; i++) {
    let str = playRound(window.prompt("ROCK PAPER SCISSORS ?"), getComputerChoice());
    console.log(str);
    if (str.match(/you win/i)) playerscore++;
    else if (str.match(/you lose/i)) computerscore++;
  }
  if (playerscore > computerscore)
    console.log("Player wins ! with :" + playerscore + " to " + computerscore);
  else if (playerscore < computerscore)
    console.log("Player Lose ! with :" + playerscore + " to " + computerscore);
    else console.log("Player Draws with computer ! with :" + playerscore + " to " + computerscore);
}

game();