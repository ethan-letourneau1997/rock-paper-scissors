// html elements defined 

const results = document.getElementById('round-results');

const pScore = document.getElementById('player-score');
const cScore = document.getElementById('computer-score');

const gameResults = document.getElementById('game-results');

const roundNumber = document.getElementById('round-count');

// initialize scoreboard

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;


// randomly assigns computers choice

let computerMove = "";

function computerPlay(){
    let randNum = Math.random()*3;
    if (randNum <= 1){
        computerMove = "rock";
        normalBorder ();
        changeComputerRockBorder();
    }
    else if (randNum <= 2){
        computerMove = "paper";
        normalBorder ();
        changeComputerPaperBorder();
    }
    else{
        computerMove = "scissors";
        normalBorder ();
        changeComputerScissorsBorder();
    }
    return computerMove;
}

// plays through a round

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


// checks and updates score

function checkScore(playerScore, computerScore){
    if (playerScore == 5){
        gameResults.textContent = "you win";
    }
    else if (computerScore == 5){
        gameResults.textContent = "you lose";
    }
}


// player chooses scissors
const button1 = document.getElementById('button1');
button1.addEventListener("click", rockFunction);

function rockFunction(){
    console.log('rock');
    playRound('rock',computerPlay());
    pScore.textContent = (playerScore);
    cScore.textContent = (computerScore);
    checkScore(playerScore,computerScore);
    changeRockBorder ();
    roundCount++;
    roundNumber.textContent = (roundCount);
}

// player chooses paper

const button2 = document.getElementById('button2');
button2.addEventListener("click", paperFunction);

function paperFunction(){
    console.log('paper');
    playRound('paper',computerPlay());
    pScore.textContent = (playerScore);
    cScore.textContent =(computerScore);
    checkScore(playerScore,computerScore);
    changePaperBorder ();
    roundCount++;
    roundNumber.textContent = (roundCount);
}

// player chooses scissors

const button3 = document.getElementById('button3');
button3.addEventListener("click", scissorFunction);

function scissorFunction(){
    console.log('scissor');
    playRound('scissors',computerPlay());
    pScore.textContent = (playerScore);
    cScore.textContent =(computerScore);
    checkScore(playerScore,computerScore);
    changeScissorsBorder ();
    roundCount++;
    roundNumber.textContent = (roundCount);
}
 
//changes border color on player click / computer choice

function changeRockBorder () {
    document.getElementById("button1").style.border = '8px Solid #2a9d8f'
}
function changePaperBorder () {
    document.getElementById("button2").style.border = '8px Solid #2a9d8f'
}
function changeScissorsBorder () {
    document.getElementById("button3").style.border = '8px Solid #2a9d8f'
}

function changeComputerRockBorder () {
    document.getElementById("button4").style.border = '8px Solid #2a9d8f'
}
function changeComputerPaperBorder () {
    document.getElementById("button5").style.border = '8px Solid #2a9d8f'
}
function changeComputerScissorsBorder () {
    document.getElementById("button6").style.border = '8px Solid #2a9d8f'
}

// returns border selection to default on new selection 
function normalBorder () {
    document.getElementById('button1').style.border = '2px solid black';
    document.getElementById('button2').style.border = '2px solid black';
    document.getElementById('button3').style.border = '2px solid black';
    document.getElementById('button4').style.border = '2px solid black';
    document.getElementById('button5').style.border = '2px solid black';
    document.getElementById('button6').style.border = '2px solid black';
}



