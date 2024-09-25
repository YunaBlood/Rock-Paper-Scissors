//Steps 1 : Computer Choice

    // Create function GetComputerChoice
    function GetComputerChoice(){
    // Create variable computerChoice
    let computerChoice;
    // Take the floor value of the random number
    // Generate a random number between 0 and 1
    // Multiply the random number by 3
    computerChoice = Math.floor(Math.random(computerChoice) * 3);
    // If the number is 0, set the computer choice to "rock"
    if(computerChoice === 0 ){
        computerChoice = "Rock";
    // else if the number is 1, set the computer choice to "paper"
    }else if(computerChoice === 1){
        computerChoice = "Paper";
    // else if the number is 2, set the computer choice to "scissor"
    }else {
        computerChoice = "Scissors";
    }
    // return random choice
    return computerChoice
}
    // Call the function 
    // GetComputerChoice()

// Steps 3 : Declare player score

//Create global scope variable HumanScore and initialize value to 0
let humanScore = 0;
// Create global scope variable ComputerScore score and initialize value to 0
let computerScore = 0;

function PlayRound(humanChoice, computerChoice){
    
    const computerSelection = GetComputerChoice();
    let resultMessage

    const gameResult = document.querySelector(".game-result")
    
    if(humanChoice === "Paper" && computerSelection === "Scissors" || humanChoice === "Rock" && computerSelection === "Paper" || humanChoice === "Scissors" && computerSelection === "Rock"){
        ++computerScore;
        console.log("Scores before increment:", "computer:",computerScore,"human", humanScore);
        resultMessage = (`You lose, ${computerSelection} beat ${humanChoice}`);
    }else if(humanChoice === computerSelection){
        resultMessage = (`It's a draw you both choose ${humanChoice, computerSelection}`);
    }else{
        ++humanScore;
        console.log("Scores before increment:", "computer:",computerScore,"human", humanScore);
        resultMessage = (`You win ! ${humanChoice} beat ${computerSelection}`);
    }

    //Update the display with the message and score
    gameResult.textContent = `${resultMessage}`

    const gameHumanScore = document.querySelector(".human-score")
    const gameComputerScore = document.querySelector(".computer-score")

    gameHumanScore.textContent =`Human score: ${humanScore}`
    gameComputerScore.textContent =`computerScore: ${computerScore}`
    
    // return the value of human choice and computer choice
    return humanChoice && computerChoice;
}
// Steps 5 : Write the logic to play the entire game

//Create function PlayGame
function PlayGame(round = 1){
    
    
    
    const FinalScore = document.createElement("div")
    
    // Check if the round is more than 5 and show the message if you win or lose 
    if(round > 5){
        if(humanScore === 5 || computerScore === 5){
            FinalScore.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}. You win the game congratulation !`
            document.querySelector("button").disabled
        }else if(computerScore > humanScore){
        FinalScore.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}. You lose the game better luck next time !`
            document.querySelector("button").disabled
        }else{
            FinalScore.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}. It's a draw nobody lose`
            document.querySelector("button").disabled
        }
        return 
    }    
    
    // Steps 4 : Logic to play a single round

    // Call playGame for the next round
    PlayGame(round + 1);



}

const btnRock = document.querySelector(".Rock");
const btnPaper = document.querySelector(".Paper");
const btnScissors = document.querySelector(".Scissors");
const container = document.querySelector(".rps-main")
const containerScore = document.querySelector(".rps-score")

btnRock.addEventListener("click", () => PlayRound("Rock"))
btnPaper.addEventListener("click", () => PlayRound("Paper"))
btnScissors.addEventListener("click", () => PlayRound("Scissors"))

// Start the game with the first round
PlayGame(1);

