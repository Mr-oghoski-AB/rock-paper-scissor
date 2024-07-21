const item = ['rock', 'paper' , 'scissors'];
const options = document.querySelectorAll('section button')
let choice = Array.from(options)
const round = document.querySelector('#result');
const player = document.querySelector('.Player');
const computer = document.querySelector('.comp')
const winner = document.querySelector('h1')
const restart = document.querySelector('#btn')
let playerSelection ;
let computerSelection ;




let computerScore = 0;  
let playerScore = 0;
player.textContent = playerScore;
computer.textContent = computerScore;



function getComputerChoice () {
    let compTurn = item[Math.floor(Math.random()*item.length)];
   
   
    if ((compTurn == item[0]) || 
        (compTurn == item [1]) || 
        (compTurn == item [2])) {
            computerSelection = compTurn;
        }
     
}

// function getPlayerChoice () {
//     let userTurn = prompt("Rock Paper Scissors ? ").toLowerCase()  ; 
   
   
//     if ((userTurn == item[0]) ||
//         (userTurn == item [1] )|| 
//         (userTurn == item [2])) {
//             playerSelection = userTurn;

//     }

// }

function playRound(playerSelection, computerSelection){

    if (playerSelection == computerSelection ){
 
        computerScore += 1; 
        playerScore += 1;
        player.textContent = playerScore;
        computer.textContent = computerScore;
        let display = "IT's A TIE";
        round.textContent = display;;
    } 
    else if (playerSelection == item[1] && computerSelection == item[0]) {
        playerScore += 1 
        player.textContent = playerScore;
        computer.textContent = computerScore;
        round.textContent = "YOU WIN THIS ROUND !!! PAPER BEATS ROCK";          

    }
    else if (playerSelection == item [0] &&                 computerSelection == item [1]){
        computerScore += 1
        player.textContent = playerScore;
        computer.textContent = computerScore;
        round.textContent = "YOU LOSE THIS ROUND !!!! ROCK LOSES TO PAPER  ";
    }
    else if (playerSelection == item [1] && computerSelection == item [2]){
        computerScore += 1
        player.textContent = playerScore;
        computer.textContent = computerScore;
        round.textContent = "YOU LOSE THIS ROUND!!! PAPER LOSES TO SCISSORS";;
    }
    else if (playerSelection == item [2] && computerSelection == item[1]){
        playerScore += 1
        player.textContent = playerScore;
        computer.textContent = computerScore;
        round.textContent = "YOU WIN THIS ROUND !! SCISSORS BEATS PAPER ";
    }
    else if (playerSelection == item [0] && computerSelection == item[2]) {
        playerScore += 1
        player.textContent = playerScore;
        computer.textContent = computerScore;
        round.textContent = "YOU WIN THIS ROUND!!!!! ROCK BEATS SCISSORS ";
    }
    else if ( playerSelection == item[2] && computerSelection == item [0]){
        computerScore += 1
        player.textContent = playerScore;
        computer.textContent = computerScore;
        round.textContent= "YOU LOSE THIS ROUND !! SCISSORS LOSES TO ROCK";;
     
    }
     if (playerScore - computerScore == 5){
        winner.textContent = 'YOU WIN!!!'
    }
    else if ( computerScore - playerScore == 5 ){
        winner.textContent = 'YOU LOSE!!!  TRY AGAIN'
    }


    // else {
    //     return "Wrong input!!! please input Rock , Paper or Scissors"
    // }

}

choice.forEach( element => {
    element.addEventListener    ('click', () => {
        playerSelection = element.id.toLocaleLowerCase();
        if (winner.textContent == ""){
            getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
       
    })
})

restart.addEventListener ('click', () => {
    computerScore = 0;  
    playerScore = 0;
    player.textContent = playerScore;
    computer.textContent = computerScore;
    round.textContent = ''
    winner.textContent = ''
    return computerScore , playerScore;
  
})



// function game() {
//     for (let numberOfGames = 0; numberOfGames < 6; numberOfGames++ ) {
//         if (numberOfGames != 5) {
//             console.log (getComputerChoice())
//             console.log (getPlayerChoice())
//             console.log (playRound(playerSelection, computerSelection));
//             console.log("computer choice is " + computerSelection);
//             let gameScores = `user: ${playerScore}  computer: ${computerScore}  `;
//             console.log (gameScores);
            
//         }
//         else if (numberOfGames = 5 && playerScore > computerScore ) {
//             return "you Win!! the machine didn't stand a chance"
//         }
//         else if (numberOfGames = 5 && computerScore > playerScore){
//             return "you lose!!!! Better luck next time"
//         }
//         else if (numberOfGames = 5 && playerScore == computerScore) {
//             return 'its a Tie!! its been a really tight game'
//         }
//     }

// }
// console.log (game())



