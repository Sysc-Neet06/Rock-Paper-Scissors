const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Not valid input, Please try again');
    }
  }

function getComputerChoice(){
 let randomNum = Math.floor(Math.random()*3);
  switch(randomNum){
    case 0: 
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice){
  if(userChoice === computerChoice){
    return 'Tied Game';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'Human Won';
   	 }
    else{ 
      return 'Computer Won';
  	}
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'Human Won';
    	}
    else{ 
      return 'Computer Won';
  	}
  }
  else if(userChoice === 'scissors'){
   if(computerChoice === 'paper'){
      return 'Human Won';
    }
    else{ 
      return 'Computer Won';
 	 	}
  }
  else if(userChoice === 'bomb'){
    return 'Human Won';
    }
}

const playGame = () => {
  userChoice = getUserChoice('BOMB');
  computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
