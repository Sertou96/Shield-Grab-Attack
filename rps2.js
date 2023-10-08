let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};

updateScore();


 const rockPick =  document.querySelector('.move-shield');
 rockPick.addEventListener('click', () => {
  getWinner('shield');
 });

 const paperPick =  document.querySelector('.move-grab');
 paperPick.addEventListener('click', () => {
  getWinner('grab');
 });

const scissorsPick = document.querySelector('.move-attack');
scissorsPick.addEventListener('click', () => {
  getWinner('attack');
})



function getComputerChoice() {
  const choices = ['shield', 'grab', 'attack'];
  const randomNumber = Math.floor(Math.random() * 3);
return choices[randomNumber];
};


let computerMove = getComputerChoice();



function getWinner(playerChoice) {
  let computerMove = getComputerChoice();

  let result = '';
  
  if (playerChoice === 'shield') {
    if (computerMove === 'shield') {
      result = 'Tie.';
    } else if (computerMove === 'grab') {
      result = 'You lose.';
    } else if (computerMove === 'attack') {
      result = 'You win.';
    }
  } 
  else if (playerChoice === 'grab') {
    if(computerMove === 'shield') {
      result = 'You win.';
    } else if (computerMove === 'grab') {
      result = 'Tie.';
    } else if (computerMove === 'attack') {
      result = 'You lose.';
    }
  }
  else if (playerChoice ===  'attack') {
    if (computerMove === 'shield') {
      result = 'You lose.';
    } else if (computerMove === 'grab') {
      result = 'You win.';
    } else if (computerMove === 'attack') {
      result = 'Tie.';
    }
  }

  if (result === 'You win.') {
    score.wins = score.wins += 1;
  } else if (result === 'You lose.') {
    score.loses = score.loses += 1;
  } else if (result === 'Tie.') {
    score.ties = score.ties += 1;
  }
  
  localStorage.setItem('score', JSON.stringify(score));


  document.querySelector('.result-text').innerHTML = `You picked: <img src="${playerChoice}.png" class="move-result-picture"> Computer picked: <img src="${computerMove}.png" class="move-result-picture"> ${result}`;

  updateScore();

 

};




function updateScore() {
  document.querySelector('.result-score').innerHTML = `Wins: ${score.wins} |
  Loses: ${score.loses} |
   Ties: ${score.ties}`;
}