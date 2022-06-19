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

console.log(computerPlay());