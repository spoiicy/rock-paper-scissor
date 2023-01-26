function getComputerChoice(){
    let element = Math.floor((Math.random()*3)+1);
    let selection;
    switch(element){
        case 1:
            selection = 'rock';
            break;
        case 2:
            selection = 'scissors';
            break;
        case 3:
            selection = 'paper';
            break;
    }
    return selection;
}



function playRound(playerSelection){

    let computerSelection = getComputerChoice();

    let computerHand = document.querySelector('#computer-hand');
    computerHand.innerHTML = `<img src=\'${computerSelection}.png\'>`
    

    if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection =='rock') || (playerSelection == 'scissors' && computerSelection == 'paper')){
        return 1;
    }
    else if (playerSelection == computerSelection){
        
        return 0;
    }
    else{
        
        return -1;
    }
}


function score(result){
    if(result == 1){
        ++playerScore;
        playerScore_div.textContent = "Player Score : " + playerScore;
        
    }
    if(result == -1){
        ++computerScore;
        computerScore_div.textContent ="Computer Score : " + computerScore;
        

    }

    if(playerScore == '5' || computerScore == '5'){
        if(playerScore == 5){
            const player_choice = document.querySelector('.player-choice');
            player_choice.classList.toggle('winner');
            player_choice.innerHTML = '<div id = \"play-again\"><p>You Won</p><button type = \"button\" onclick = \"window.location.reload()\">Play Again</button></div>';
        }
        else{
            
            const player_choice = document.querySelector('.player-choice');
            player_choice.classList.toggle('winner');
            player_choice.innerHTML = '<div id = \"play-again\"><p>Computer Won</p><button type = \"button\" onclick = \"window.location.reload()\">Play Again</button></div>';
        }
    }
}




const playerHand = document.querySelector('#player-hand');

let computerHand = document.querySelector('#computer-hand');

const playerRock = document.createElement('img');
const playerPaper = document.createElement('img');
const playerScissors = document.createElement('img');


const computerRock = document.createElement('img');

playerRock.src = 'rock.png';
playerPaper.src = 'hand.png';
playerScissors.src = 'scissors.png';



const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click',()=>{
        playerHand.innerHTML ='<img src=\'rock.png\'>'
        //playerHand.removeChild();
        //playerHand.textContent = 'rock';
        let result = playRound('rock');
        score(result);
        //playerHand.textContent = '';
        //computerHand.textContent = '';
    }
)    




const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click',()=>{         
        playerHand.innerHTML ='<img src=\'paper.png\'>'
        //playerHand.appendChild(playerPaper);
        //playerHand.removeChild();
        //playerHand.textContent = 'paper';
        let result = playRound('paper');
        score(result);
        //playerHand.textContent = '';
    }
)

const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click',()=>{
        playerHand.innerHTML ='<img src=\'scissors.png\'>'
        //playerHand.appendChild(playerScissors);
        //playerHand.textContent = 'scissors';
        result = playRound('scissors');
        score(result);
        //playerHand.textContent = '';
    }

)

let playerScore = 0;
let computerScore = 0;

let playerScore_div = document.querySelector('#player-score');
let computerScore_div = document.querySelector('#computer-score');


console.log(playerScore);
console.log(computerScore);



    
    







