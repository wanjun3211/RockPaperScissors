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

  switch (userInput) {

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

function playRound(humanChoice, computerChoice) {

  const modify_humanChoice = humanChoice.toLowerCase();

  if (modify_humanChoice === computerChoice) {
    console.log(`You chose ${humanChoice} 
      while computer opted ${computerChoice}, and it is a tie`);
  } else {

    if (modify_humanChoice === 'rock' && computerChoice === 'paper') {
      console.log(`You chose ${humanChoice} 
      while computer opted ${computerChoice}, you lose as paper beats rock`);

      ++computerScore;
    }

    if (modify_humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log(`You chose ${humanChoice} 
      while computer opted ${computerChoice}, you win as rock beats scissors`);

      ++humanScore;
    }

    if (modify_humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log(`You chose ${humanChoice} 
      while computer opted ${computerChoice}, you win as scissors beats paper`);

      ++humanScore;
    }

    if (modify_humanChoice === 'scissors' && computerChoice === 'rock') {
      console.log(`You chose ${humanChoice} 
      while computer opted ${computerChoice}, you lose as rock beats scissors`);

      ++computerScore;
    }


    if (modify_humanChoice === 'paper' && computerChoice === 'rock') {
      console.log(`You chose ${humanChoice} 
      while computer opted ${computerChoice}, you win as paper beats rock`);

      ++humanScore;
    }


     if (modify_humanChoice === 'paper' && computerChoice === 'scissors') {
      console.log(`You chose ${humanChoice} 
      while computer opted ${computerChoice}, you lose as scissors beats paper`);

      ++computerScore;
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);