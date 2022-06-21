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
    
    if(playerSelection === computerSelection){
        console.log(("It's a tie! " + playerSelection + " is the same as " + computerSelection + "!"));
        results.textContent = ("It's a tie! " + playerSelection + " is the same as " + computerSelection + "!");
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "paper" && computerSelection == "rock")||
    (playerSelection == "scissors" && computerSelection == "paper"))
    {   
        console.log(("You win! " + playerSelection + " beats " + computerSelection + "!"));
        playerScore += 1;
        results.textContent = [("You win! " + playerSelection + " beats " + computerSelection + "!")];
    }
    else if ((playerSelection == "rock" && computerSelection == "paper")||
    (playerSelection == "paper" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "rock"))
    {   
        console.log(("You lose! " + computerSelection + " beats " + playerSelection + "!"));
        computerScore +=1;
        results.textContent = [("You lose! " + computerSelection + " beats " + playerSelection + "!")];
    }
}
// ------------------------------------------------

// rock event listener
const button1 = document.getElementById('button1');
button1.addEventListener("click", rockFunction);

function rockFunction(){
    console.log('rock');
    playRound('rock',computerPlay());
    pScore.textContent = ("player: " + playerScore);
    cScore.textContent =("computer: " + computerScore);
    // game('rock',computerPlay());
}

//paper event listener
const button2 = document.getElementById('button2');
button2.addEventListener("click", paperFunction);

function paperFunction(){
    console.log('paper');
    playRound('paper',computerPlay());
    pScore.textContent = ("player: " + playerScore);
    cScore.textContent =("computer: " + computerScore);
}

//scissor event listener
const button3 = document.getElementById('button3');
button3.addEventListener("click", scissorFunction);

function scissorFunction(){
    console.log('scissor');
    playRound('scissors',computerPlay());
    pScore.textContent = ("player: " + playerScore);
    cScore.textContent =("computer: " + computerScore);
}
// -----------------------------------------------

// initialize scoreboard
let playerScore = 0;
let computerScore = 0;


// ------------------------------------------------

// change text 
const results = document.getElementById('round-results');
const pScore = document.getElementById('player-score');
const cScore = document.getElementById('computer-score');


// ------------------------------------------------
let playerPoints = 0;
let computerPoints = 0;

function game(){
    for (i = 0; i < 5; i++){
    // let playerSelection = prompt("Select rock, paper, or scissors");
    // computerSelection = computerPlay();
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
// game();



