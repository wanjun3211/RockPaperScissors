function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum >= 0 && randomNum < (1/3)) {
    return "rock";
  }
  else if (randomNum >= 1/3 && randomNum < (2/3)) {
    return "paper";
  }
  else {
    return "scissors";
  }
}


