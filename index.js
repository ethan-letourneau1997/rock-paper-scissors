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
        return ("It's a tie! " + playerSelection + " is the same as " + computerSelection + "!");
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "paper" && computerSelection == "rock")||
    (playerSelection == "scissors" && computerSelection == "paper"))
    {   
        return [("You win! " + playerSelection + " beats " + computerSelection + "!")];
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "rock"))
    {   
        return [("You lose! " + computerSelection + " beats " + playerSelection + "!")];
    }
    else{
        return ("Invalid entry! Please try again")
    }
}

let playerPoints = 0;
let computerPoints = 0;

function game(){
    for (i = 0; i < 5; i++){
    let playerSelection = prompt("Select rock, paper, or scissors");
    computerSelection = computerPlay();
    if (playRound(playerSelection, computerSelection) == ("You lose! " + computerSelection + " beats " + playerSelection + "!")){
        console.log(("You lose! " + computerSelection + " beats " + playerSelection + "!"));
        computerPoints++;
    }
    else if (playRound(playerSelection, computerSelection) == ("You win! " + playerSelection + " beats " + computerSelection + "!")){
        console.log(("You win! " + playerSelection + " beats " + computerSelection + "!"));
        playerPoints++;
    }
    else{
        console.log("It's a tie!!")
    }
    console.log("your score: " + playerPoints)
    console.log("computer score: " + computerPoints)
}
    if(playerPoints > computerPoints){
        console.log("FINAL SCORE")
        console.log("your score: " + playerPoints)
        console.log("computer score: " + computerPoints)
        console.log("You win!")
    }
    else if(playerPoints < computerPoints){
        console.log("FINAL SCORE")
        console.log("your score: " + playerPoints)
        console.log("computer score: " + computerPoints)
        console.log("You lose!")
    }
    else{
        console.log("FINAL SCORE")
        console.log("your score: " + playerPoints)
        console.log("computer score: " + computerPoints)
        console.log("Its a tie!")
    }
}
game();

