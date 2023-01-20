function getComputerChoice(){
    let element = Math.floor((Math.random()*3)+1);
    let selection;
    switch(element){
        case 1:
            selection = 'rock';
            break;
        case 2:
            selection = 'scissor';
            break;
        case 3:
            selection = 'paper';
            break;
    }
    return selection;
}


function playRound(playerSelection, computerSelection){

    playerSelection = prompt("Rock, Paper or Scissor?").toLowerCase();
    computerSelection = getComputerChoice();
    

    if((playerSelection == 'rock' && computerSelection == 'scissor') || (playerSelection == 'paper' && computerSelection =='rock') || (playerSelection == 'scissor' && computerSelection == 'paper')){
        return 1;
    }
    else if (playerSelection == computerSelection){
        return 0;
    }
    else{
        return -1;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0;i<5;i++){
        let result = playRound();
        if(result == 1){
            ++playerScore;
        }
        else if(result == -1){
            ++computerScore;
        }
        else{
            continue;
        }
        
    }
    console.log('player score is ' + playerScore);
    console.log('computer score is ' + computerScore);
    if(playerScore == computerScore){
        console.log('it\'s a tie');
    }
    else if(playerScore > computerScore){
        console.log('you won');
    }
    else{
        console.log('computer won');
    }
}


game();