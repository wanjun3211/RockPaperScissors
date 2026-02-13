let humanScore = 0, computerScore = 0;


function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum >= 0 && randomNum < (1 / 3)) {
    return "rock";
  }
  else if (randomNum >= 1 / 3 && randomNum < (2 / 3)) {
    return "paper";
  }
  else {
    return "scissors";
  }
}


function getHumanChoice() {
  const userInput = prompt("Please input your choice: rock, scissors, or paper", "");

  const modify_Input = userInput.toLowerCase();

  switch (modify_Input) {

    case "rock":
      return "rock";

    case "scissors":
      return "scissors";

    case "paper":
      return "paper";

    default:
      return 'User input is not correct. Should be rock, scissors, or paper'
  }

}

