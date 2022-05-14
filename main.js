'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solution = "Hello"
let guess = ""

const checkInput = (input) => {
    solution = solution.split("")

    for (let i = 0; i < solution.length; i++) {
        if(input === solution[i]) {
            console.log(solution, "solution array")
            guess += input
        }
    }
}

const hangman = (str) => {

    if(str === solution) {
        // console.log("working")
        return "You guessed it!"
    } else {
        checkInput(str)
        console.log(guess, "----guess----")
    }
}

// const countIt = (str) => {
//     console.log('BOOMS', str.length)
//   }




const getPrompt = () =>  {
    rl.question('Input a letter: ', (str) => {
      hangman(str);
      getPrompt();
    });
  }
  
  if (typeof describe === 'function') {
    solution = "Hello"
    describe('hangman()', () => {
        
      it('should be of type function', () => {  
        assert.equal(typeof hangman, "function");
      });
      it('should be able to detect a win', () => {
        assert.equal(hangman("l"), 'You guessed it!');
      });
      
    });
  } else {
    getPrompt();
  }