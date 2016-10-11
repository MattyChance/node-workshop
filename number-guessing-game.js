var request = require('request');
var prompt = require('prompt');

var randomNumber = Math.floor(Math.random() * 100); 
console.log(randomNumber);

var guessingCount = 0;

function guessingGame() {
    guessingCount += 1;
    
    prompt.get('guess a number!', function(err, input) {
        if (err) {
            console.log(err);
        }
        else {


            var userGuess = parseInt(input['guess a number!']);

            if (userGuess === randomNumber) {
                console.log('You won! You are a mind-reading master!');
            }
            else if (userGuess < randomNumber) {
                console.log('You number was too small! Try again!');
                guessingGame();
            }
            else {
                console.log('You number was too big! Try again!');
                guessingGame();
            }

        }

    })
       
    if (guessingCount === 4) {
        console.log('You lost! No more chance to guess');
    }
}

guessingGame();