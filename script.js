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
    console.log(computerChoice)
    // return random choice
    return computerChoice
}
// Call the function 
GetComputerChoice()