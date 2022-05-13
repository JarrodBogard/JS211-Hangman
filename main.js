
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solution = 'Hello'
let guess = ''

const checkInput = (input) => {
    for(let i = 0 ; i < solution.length; i++){
        if(input === solution[i]){
            guess += input
        }
    }
    
}

const hangMan = (str) => {
  if(str === solution){
      return "You guessed it"
  } else{
      checkInput(str)
      console.log(guess, "++++++")
  }

}


const getPrompt = () =>  {
  rl.question('Input: Any letter ', (str) => {
    hangMan(str);
    getPrompt();
  });
}

if (typeof describe === 'function') {
    solution = "Hello"
  describe('#hangMan()', () => {
    it('should detect a win', () => {
      assert.equal(hangMan('o'), "You guessed it")

    });
  });
} else {
  getPrompt();
}