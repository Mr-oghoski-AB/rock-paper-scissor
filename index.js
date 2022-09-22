const item = ['rock', 'paper' , 'scissor'];
function getComputerChoice (item) {
    return item[Math.floor(Math.random()*item.length)];

}
console.log(getComputerChoice(item))
const playerSelection = prompt ("Rock paper Scissors ? "  );
const computerSelection = getComputerChoice(item);

function playRound(playerSelection, computerSelection){
    if (playerSelection == item[0] && computerSelection == item[0] ){
        let display = "you guessed it  right"
        return console.log (display)
    }
    else {
        console.log ("you lose !!!")
    }
}

console.log (playRound(playerSelection, computerSelection))