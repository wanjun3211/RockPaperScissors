let humanScore = 0, computerScore = 0;

const div = document.querySelector("div");
const buttonPaper = document.querySelector('#button-paper');
const buttonRock = document.querySelector('#button-rock');
const buttonScissors = document.querySelector('#button-scissors');

let humanSelection = "";
buttonPaper.addEventListener("click", () => {
  humanSelection = "paper";
  playGame(playRound);

});
buttonRock.addEventListener("click", () => {
  humanSelection = "rock";
   playGame(playRound);
});
buttonScissors.addEventListener("click", () => {
  humanSelection = "scissors"
  playGame(playRound);
});


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
  const div_result = document.createElement("div");
  const p_result = document.createElement("p");
  div_result.appendChild(p_result);

  if (humanChoice === computerChoice) {
    p_result.textContent = `You chose ${humanChoice} 
      while computer opted ${computerChoice}, and it is a tie`;
    div.appendChild(div_result);
  } else {

    if (humanChoice === 'rock' && computerChoice === 'paper') {
      p_result.textContent = `You chose ${humanChoice} 
      while computer opted ${computerChoice}, you lose as paper beats rock`;
      div.appendChild(div_result);
      ++computerScore;
    }

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
      p_result.textContent = `You chose ${humanChoice} 
      while computer opted ${computerChoice}, you win as rock beats scissors`;
      div.appendChild(div_result);
      ++humanScore;
    }

    if (humanChoice === 'scissors' && computerChoice === 'paper') {
      p_result.textContent = `You chose ${humanChoice} 
      while computer opted ${computerChoice}, you win as scissors beats paper`;
      div.appendChild(div_result);
      ++humanScore;
    }

    if (humanChoice === 'scissors' && computerChoice === 'rock') {
      p_result.textContent = `You chose ${humanChoice} 
      while computer opted ${computerChoice}, you lose as rock beats scissors`;
      div.appendChild(div_result);
      ++computerScore;
    }


    if (humanChoice === 'paper' && computerChoice === 'rock') {
      p_result.textContent = `You chose ${humanChoice} 
      while computer opted ${computerChoice}, you win as paper beats rock`;
      div.appendChild(div_result);
      ++humanScore;
    }


    if (humanChoice === 'paper' && computerChoice === 'scissors') {
      p_result.textContent = `You chose ${humanChoice} 
      while computer opted ${computerChoice}, you lose as scissors beats paper`;
      div.appendChild(div_result);
      ++computerScore;
    }
  }
}

//  Function playGame is used to play 5 rounds and decide the final winner
// game is is callback function, which refers to function playRound() later
function playGame(game) {
  // Initial and call human and computer selection by calling corresponding function
  //which will be used by playAround function as an argument

  const computerSelection = getComputerChoice();
  game(humanSelection, computerSelection)


  const div_final_result = document.createElement("div");
  const p_final_result = document.createElement("p");
  div_final_result.appendChild(p_final_result);

  if (humanScore >= 5) {
    if (humanScore > computerScore) {
      p_final_result.textContent = `You will, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `;

      div.appendChild(div_final_result);

    } else if (humanScore < computerScore) {
      p_final_result.textContent = `You lose, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `;

      div.appendChild(div_final_result);
    }
    else {
      p_final_result.textContent = `It is a tie, as your score is ${humanScore} 
      while computer get a score of ${computerScore} `;

      div.appendChild(div_final_result);
    }
  }


}

