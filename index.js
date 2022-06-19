//computer's move
let computerMove = "";

function computerPlay(){
    let randNum = Math.random()*3;
    if (randNum <= 1){
        computerMove = "rock";
    }
    else if (randNum <= 2){
        computerMove = "paper";
    }
    else{
        computerMove = "scissors";
    }
    return computerMove;
}


// player's move
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        console.log("It's a tie! " + playerSelection + " is the same as " + computerSelection + "!");
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "paper" && computerSelection == "rock")||
    (playerSelection == "scissors" && computerSelection == "paper"))
    {
        console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "rock"))
    {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + "!");
    }
    else{
        console.log("Invalid entry! Please try again")
    }
}
const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))
