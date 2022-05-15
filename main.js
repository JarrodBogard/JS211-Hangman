'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solution = ""
let guess = []
let possSolution = ["hello", "goodbye", "seeya", "howdy", "later", "ola", "goodnight"]

solution = possSolution[Math.floor(Math.random() * possSolution.length)]
console.log(possSolution.length)
console.log(solution, "----solution----")

// const wordGenerator = () => {
  // let possSolution = "abcdefghijklmnopqrstuvwxyz"
  // for(let i = 0; i < 8; i++) {
  //   solution +=  possSolution.charAt(Math.floor(Math.random() * possSolution.length))
  // } 
// }
// wordGenerator()

const checkInput = (input) => {
  solution = solution.toLowerCase().trim()

  let arrsolution = solution.split("")
  //filling guess array with empty string with exact length of solution
  if(guess.length === 0){
    for(let i = 0; i < solution.length; i++){
      guess.push(' ')
    }
  }
  //if input matches put input into guess array at correct index
  for (let i = 0; i < arrsolution.length; i++) {
    if(input === arrsolution[i]) {
      guess[i] = input
    }
  }
   
   //if guess array no longer includes empty string that means the word is completed and the player has won return true
  if(guess.includes(' ') === false){
    return true
  }

}

const hangman = (str) => {

    if(checkInput(str)){
      console.log(guess)
      let string = guess.join('')
      console.log(`You Won! The word was: ${string}`)
    }
    else{
      console.log(guess)
      checkInput(str)
 
    }
}





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
        assert.equal(hangman("Hello"), 'You guessed it!');
      });
      
    });
  } else {
    getPrompt();
  }
