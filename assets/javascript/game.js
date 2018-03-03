// Setting the variables

var wins = 0;
var losses =0;
var guessesLeft =9;
var guesses = [];

// Defining the letter choices 

var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// User makes their choice

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Computer makes its choice

var compGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
guesses.push(userGuess); 

// If else statement

if (userGuess === compGuess){
    wins++;
    guessesLeft = 9;
    guesses.length = 0;
}

else if (guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    guesses.length = 0;
}

else if (userGuess !== compGuess){
    guessesLeft--;
}


var html = 
          "<h2 id='header'>Guess what letter I am thinking of...</h2>" +
          "<p id='wins'>Wins: " + wins + "</p>" +
          "<p id='losses'>Losses: " + losses + "</p>" +
          "<p id='guessesleft'>Guesses left: " + guessesLeft + "</p>" +
          "<p id='guesses'>Your guesses so far: " + guesses + " </p>";

document.querySelector("#game").innerHTML = html;
}
