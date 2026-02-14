let humanScore = 0, computerScore = 0;

playGame(playRound);

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
  return userInput;
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

//  Function playGame is used to play 5 rounds and decide the final winner
function playGame(game) {

  // Play game five times
  let gameTimes = 0;
  while (gameTimes !== 5) {
   
  // Initial and call human and computer selection by calling corresponding function
  //which will be used by playAround function as an argument
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    game(humanSelection, computerSelection)
    ++gameTimes;
  }

  if (humanScore > computerScore) {
    console.log(`You will, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `);
  } else if (humanScore < computerScore) {
    console.log(`You lose, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `);
  }
  else {
    console.log(`It is a tie, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `);
  }

  // reset the socre for next time game playing
  humanScore = 0;
  computerScore = 0;

}

