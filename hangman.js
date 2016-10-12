//myhandman game
//step one: created a list of word and the base of hangman
//step two: function to guess the word
//'______'
//

var wordList = ['apple', 'banana', 'mokey', 'conversation',
    'dream', 'stupidity', 'solution', 'rainbow', 'adventrue', 'goodness'
];

var prompt = require("prompt");

var base =
    `     _________
    |         |
    |         0
    |        /|\\
    |        / \\
    |
    |
    ---------------
    `;


// console.log(base);

function guessWord() {
    var theWord = wordList[Math.floor(Math.random() * 10)];
    var reset = 
    `    ---------
    |
    |
    |
    |
    |
    |
    ------------
    `;
     
    prompt.get('Guess a word; Save the man', function () {
        console.log(reset);
    });
    
}

guessWord();



// console.log('\n' + '|' + '\n' + '|' + "___________");
    // _________
    // |         |
    // |         0
    // |        /|\
    // |        / \
    // |
    // |
    // ------------   