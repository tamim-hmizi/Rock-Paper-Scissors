function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "It's a Draw!";
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return "You Win!";
  }
  return "You Lose!";
}

function ui_game() {
  const buttons = document.querySelectorAll("button");
  const resultDiv = document.querySelector(".result");
  const playerScoreSpan = document.querySelector(".player");
  const computerScoreSpan = document.querySelector(".computer");

  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const playerChoice = button.getAttribute("data-choice");
      const computerChoice = getComputerChoice();
      const result = playRound(playerChoice, computerChoice);

      if (result === "You Win!") playerScore++;
      else if (result === "You Lose!") computerScore++;

      resultDiv.textContent = `${result} (You: ${playerChoice}, Computer: ${computerChoice})`;
      playerScoreSpan.textContent = playerScore;
      computerScoreSpan.textContent = computerScore;

      if (playerScore === 5 || computerScore === 5) {
        resultDiv.textContent =
          playerScore === 5
            ? "🎉 You won the game!"
            : "💻 Computer won the game!";
        playerScore = 0;
        computerScore = 0;
        playerScoreSpan.textContent = playerScore;
        computerScoreSpan.textContent = computerScore;
      }
    });
  });
}

ui_game();
