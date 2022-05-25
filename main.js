'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solution = ""
let guess = []
let usedInputs = []
const possSolution = ["hello", "goodbye", "seeya", "howdy", "later", "ola", "goodnight"]
let counter = 5


// // generates random solution from possSoltion array 
solution = possSolution[Math.floor(Math.random() * possSolution.length)]
console.log(solution, "----solution----")



const checkInput = (input) => {
  input = input.toLowerCase().trim()
  let arrSolution = solution.split("")
  
  console.log(usedInputs, "--------usedinputs--------")
  //filling guess array with empty string with exact length of solution
  if(guess.length === 0){
    for(let i = 0; i < solution.length; i++){
      guess.push('_')
    }
  }
  
  //if input matches solution place input into guess array at correct index
  for (let i = 0; i < arrSolution.length; i++) {
    if(input === arrSolution[i]) {
      guess[i] = input
    } 
  }
  
  // if input does not match it will remove 1 from the counter 
  if(!arrSolution.includes(input) && usedInputs.includes(input) === false) {
    
    counter--
    console.log(`You have ${counter} lives left.`)
  }
  
  // if counter equals 0 it will return a "lose" message 
  if(counter === 0) {
    return console.log("you are dead")
  }
  
  //if guess array no longer includes empty string that means the word is completed and the player has won return true
  if(guess.includes('_') === false){
    return true
  }
  console.log(guess)
  usedInputs.push(input)
}

const hangman = (str) => {
  if(checkInput(str)){
    let string = guess.join('')
    console.log(`You Won! The word was: ${string}`)
    return string 
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
      
    });
  } else {
    getPrompt();
  }
