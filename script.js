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

    const roundResult = document.querySelector(".round-result")
    
    if(humanChoice === "Paper" && computerSelection === "Scissors" || humanChoice === "Rock" && computerSelection === "Paper" || humanChoice === "Scissors" && computerSelection === "Rock"){
        ++computerScore;
        resultMessage = (`You lose, ${computerSelection} beat ${humanChoice}`);
    }else if(humanChoice === computerSelection){
        resultMessage = (`It's a draw you both choose ${humanChoice}`);
    }else{
        ++humanScore;
        resultMessage = (`You win ! ${humanChoice} beat ${computerSelection}`);
    }

    let contentResult;
    const gameResult = document.querySelector(".game-result")
    const resetButton = document.querySelector(".reset");
    //Reset the game
    resetButton.addEventListener("click", () => resetGame());
    
    //Update the display with the message and score
    roundResult.textContent = `${resultMessage}`;
    const gameHumanScore = document.querySelector(".human-score")
    const gameComputerScore = document.querySelector(".computer-score")
    gameHumanScore.textContent =`Human score: ${humanScore}`
    gameComputerScore.textContent =`computerScore: ${computerScore}`

    if(humanScore < computerScore){
        gameHumanScore.setAttribute("style", "color:red")
        gameComputerScore.setAttribute("style", "color:green")
    }else{
        gameHumanScore.setAttribute("style", "color:green")
        gameComputerScore.setAttribute("style", "color:red")
    }
    

    if(humanScore === 5){
        contentResult = (`Human Score: ${humanScore}, Computer Score: ${computerScore}. You win the game congratulation !`);
        disableButton();
        gameResult.setAttribute("style", "color:green" )
        gameResult.textContent = `${contentResult}`;
        return;
    }else if(computerScore === 5){
        contentResult = (`Human Score: ${humanScore}, Computer Score: ${computerScore}. You lose the game better luck next time !`);
        disableButton();
        gameResult.setAttribute("style", "color:red" )
        gameResult.textContent = `${contentResult}`;
        return;
    }

    function resetGame(){
        humanScore = 0
        computerScore = 0
        gameHumanScore.textContent =`Human score: ${humanScore}`
        gameComputerScore.textContent =`computerScore: ${computerScore}`
        gameResult.textContent = "";
        roundResult.textContent ="";
        const buttons = document.querySelectorAll(".Rock, .Paper , .Scissors")
        buttons.forEach(button => button.disabled = false)
    }


    function disableButton(){
        const buttons = document.querySelectorAll(".Rock, .Paper , .Scissors")
        buttons.forEach(button => button.disabled = true)
    }

    
    // return the value of human choice and computer choice
    return humanChoice && computerChoice;
}

const btnRock = document.querySelector(".Rock");
const btnPaper = document.querySelector(".Paper");
const btnScissors = document.querySelector(".Scissors");
const container = document.querySelector(".rps-main")
const containerScore = document.querySelector(".rps-score")


btnRock.addEventListener("click", () => PlayRound("Rock"))
btnPaper.addEventListener("click", () => PlayRound("Paper"))
btnScissors.addEventListener("click", () => PlayRound("Scissors"))