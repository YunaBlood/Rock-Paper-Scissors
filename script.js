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
    console.log(computerChoice)
    // return random choice
    return computerChoice
}
    // Call the function 
    GetComputerChoice()

//Steps 2 : Human Choice

//Create function GetHumanChoice
function GetHumanChoice(){
    //Create variable userChoice with prompt that ask the user it's choice between the 3
    let userChoice = prompt("Paper,Scissors,Rock", "Paper")
    //if userChoice is not "rock" "paper" or "scissors" then alert("Please input one of the three choice") and return to stop the function
    if(!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors" || userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors")){
        alert("Please input one of the three choice")
        return}
    //Show the result of UserChoice in the console 
    console.log(userChoice)
    //return the variable userChoice
    return userChoice
}

//Call function
GetHumanChoice()