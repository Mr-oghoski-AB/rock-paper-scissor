const item = ['rock', 'paper' , 'scissor'];
function getComputerChoice (item) {
    return item[Math.floor(Math.random()*item.length)];

}



let playerSelection ;
let computerSelection = getComputerChoice(item);
let computerScore = 0;  
let playerScore = 0;

function playRound(playerSelection, computerSelection){
    let userTurn = prompt("Rock Paper Scissor ? ")  ; 
   
   
    if ((userTurn == item[0]) ||
        (userTurn == item [1] )|| 
        (userTurn == item [2])) {
            playerSelection = userTurn.toLowerCase();

    }

    if (playerSelection == computerSelection ){
        computerScore += 1; 
        playerScore += 1;
        let display = "its a tie, Please try again "
        return display;
    } 
    else if (playerSelection == item[1] && computerSelection == item[0]) {
        playerScore += 1 
        return "you WIN !!!!!! CONGRATULATIONS";          

    }
    else if (playerSelection == item [0] && computerSelection == item [1]){
        computerScore += 1
        return "you lose!!!! paper beats rock ";
    }
    else if (playerSelection == item [1] && computerSelection == item [2]){
        computerScore += 1
        return "you lose!!! scissors beats paper";
    }
    else if (playerSelection == item [2] && computerSelection == item[1]){
        playerScore += 1
        return "you WIN !!!!!CONGRATULATIONS "
    }
    else if (playerSelection == item [0] && computerSelection == item[2]) {
        playerScore += 1
        return "you WIN !!!!! CONGRATULATIONS ";
    }
    else if ( playerSelection == item[2] && computerSelection == item [0]){
        computerScore += 1
        return "you LOSE !! rock beats scissors";
    }
    else {
        return "Wrong input!!! please input Rock , Paper or Scissor"
    }

}




function game() {
    for (let numberOfGames = 0; numberOfGames < 6; numberOfGames++ ) {
        if (numberOfGames != 5) {
            getComputerChoice(item);
            console.log (playRound(playerSelection, computerSelection));
            console.log("computer choice is " + getComputerChoice(item));
            let gameScores = `user: ${playerScore}  computer: ${computerScore}  `;
            console.log (gameScores);
            
        }
        else if (numberOfGames = 5 && playerScore > computerScore ) {
            return "you Win!!"
        }
        else if (numberOfGames = 5 && computerScore > playerScore){
            return "you lose!!!! Better luck next time"
        }
        else if (numberOfGames = 5 && playerScore == computerScore) {
            return 'its a Tie!! its been a really tight game'
        }
    }

}
console.log (game())



