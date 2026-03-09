let humanScore = 0, computerScore = 0;

const div = document.querySelector("div");

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
// game is is callback function, which refers to function playRound() later
function playGame(game) {

  const buttonPaper = document.querySelector('#button-paper');
  const buttonRock = document.querySelector('#button-rock');
  const buttonScissors = document.querySelector('#button-scissors');

  let humanSelection = "";
  buttonPaper.addEventListener("click", () => humanSelection = "paper");
  buttonRock.addEventListener("click", () => humanSelection = "rock");
  buttonScissors.addEventListener("click", () => humanSelection = "scissors");


  // Initial and call human and computer selection by calling corresponding function
  //which will be used by playAround function as an argument

  const computerSelection = getComputerChoice();
  game(humanSelection, computerSelection)


  const div_result = document.createElement("div");
  const p_result = document.createElement("p");
  div_result.appendChild(p_result);

  if (humanScore == 5) {
  if (humanScore > computerScore) {
    p_result.textContent = `You will, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `;

    div.appendChild(div_result);

  } else if (humanScore < computerScore) {
    p_result.textContent = `You lose, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `;

    div.appendChild(div_result);
  }
  else {
   p_result.textContent = `It is a tie, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `;

    div.appendChild(div_result);
  }
}
  

}

