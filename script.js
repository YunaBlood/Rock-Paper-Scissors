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
    // Show on the console the choice
    // console.log(computerChoice)
    // return random choice
    return computerChoice
}
    // Call the function 
    // GetComputerChoice()

//Steps 2 : Human Choice

//Create function GetHumanChoice
function GetHumanChoice(){
    //Create variable userChoice with prompt that ask the user it's choice between the 3
    let userChoice = prompt("Rock, Paper, Scissors", "Paper")
    //if userChoice is not "rock" "paper" or "scissors" then alert("Please input one of the three choice") and return to stop the function
    // if(!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" || userChoice === "scissor")){
    //     alert("Please input one of the three choice")
    //     return}
    if(userChoice === null || userChoice === "" || userChoice === undefined){
        alert("Please input one of the three choice");
        return;
    }
    //Show the result of UserChoice in the console 
    // console.log(userChoice)
    //return the variable userChoice
    return userChoice;
}


// Steps 3 : Declare player score

//Create global scope variable HumanScore and initialize value to 0
let humanScore = 0;
// Create global scope variable ComputerScore score and initialize value to 0
let computerScore = 0;

// Steps 5 : Write the logic to play the entire game

//Create function PlayGame
function PlayGame(round = 1){




    //Check if the round is more than 5 and show the message if you win or lose 
    if(round > 5){
        if(humanScore > computerScore){
            console.log("Human score" ,humanScore, "Computer Score", computerScore, "You win !")
        }else if(computerScore > humanScore){
            console.log("Human score" ,humanScore, "Computer Score", computerScore, "Computer win !")
        }else{
            console.log("Human score" ,humanScore, "Computer Score",computerScore, "It's a draw")
        }
        return
    }



// Steps 4 : Logic to play a single round

//Create function PlayRound
//Define two parameters for PlayRound humanChoice and computerChoice
function PlayRound(humanChoice, computerChoice){
    //HumanChoice need to be case insensitive example "RoCk", "RocK", ROCK, "rock"
    humanChoice = humanChoice.toLowerCase();
    //Show the result of human choice into the console
    console.log("Human choice:",humanChoice);
    //Computer choice result become lowercase
    computerChoice = computerChoice.toLowerCase();
    // Show the result of Computer Choice in the console.
    console.log("Computer choice:",computerChoice)
    //If humanChoice choose different of ComputerChoice then in function of the choice loose or win the round and increment or decrement the score of the winner and show the log on the console
    if(humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissor" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice ==="rock"){
        ++computerScore;
        console.log(`You lose, ${computerChoice} beat ${humanChoice}`);
    }else if(humanChoice === computerChoice){
        console.log(`It's a draw you both choose ${humanChoice, computerChoice}`);
    }else{
        ++humanScore;
        console.log(`You win ! ${humanChoice} beat ${computerChoice}`);
    }

    // return the value of human choice and computer choice
    return humanChoice && computerChoice;
}

    // Call the function GetComputerChoice to replay a round
    const humanSelection = GetHumanChoice();
    // Call the function GetComputerChoice to replay a round
    const computerSelection = GetComputerChoice();
    //Play the round and update the score
    PlayRound(humanSelection,computerSelection);
    // Call playGame for the next round
    PlayGame(round + 1);


}

// Start the game with the first round
PlayGame(1);

