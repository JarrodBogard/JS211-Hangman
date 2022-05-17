// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

let solution = ""
let inputStr = ""
let guess = []
let usedInputs = []
const possSolution = ["hello", "goodbye", "seeya", "howdy", "later", "ola", "goodnight"]
const possInputs = ["a", "b", "c", "d", "e", 'f', "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const input = document.querySelector("#userInput")
input.addEventListener("keyup", e => {
  inputStr = e.target.value
  console.log(inputStr)
})

const message = document.querySelector("#winner-message")
message.style.listStyle = "none"
const messageItem = document.createElement("li")

const possList = document.querySelector("#possible-inputs")
possList.style.listStyle = "none"
const inputItem = document.createElement("li")
inputItem.style.letterSpacing = "2px"
inputItem.innerText = possInputs
possList.appendChild(inputItem)

const usedList = document.querySelector("#used-inputs")
usedList.style.listStyle = "none"
const usedItem = document.createElement("li")
usedItem.style.letterSpacing = "2px"
usedItem.innerText = usedInputs
usedList.appendChild(usedItem)




solution = possSolution[Math.floor(Math.random() * possSolution.length)]
console.log(possSolution.length)
console.log(solution, "----solution----")



const checkInput = (input) => {
  solution = solution.toLowerCase().trim()
  
  let arrSolution = solution.split("")
  //filling guess array with empty string with exact length of solution
  if(guess.length === 0){
    for(let i = 0; i < solution.length; i++){
      guess.push(' ')
    }
  }
  //if input matches solution place input into guess array at correct index
  for (let i = 0; i < arrSolution.length; i++) {
    if(input === arrSolution[i]) {
      guess[i] = input
    }
  }
  
  //if guess array no longer includes empty string that means the word is completed and the player has won return true
  if(guess.includes(' ') === false){
    return true
  }
  
}

const hangman = (str) => {
  str = inputStr
  if(checkInput(str)){
    console.log(guess)
    let string = guess.join('')
    console.log(`You Won! The word was: ${string}`)
    messageItem.innerText = `You Won! The word was: ${string}`
    message.append(messageItem.innerText)
    
  }
  else{
    switchArrays()
    checkInput(str)
    // message.append(guess)
    console.log(guess)
  }
}


// create list of possible inputs on DOM (done)

// remove inputs as they are used from possible inputs list (done)

// create functions that perform the pop and unshift methods after each entry

// const removeInput = possInputs.pop()
// console.log(removeInput, "---pop---")

//place poss inputs in a list (done)

// place used inputs in a separate list of used inputs (done)
// usedInputs.unshift(removeInput)
// console.log(usedInputs, "---unshift---")
// console.log(possInputs)


const switchArrays = () => {
  for(let i = 0; i < possInputs.length; i++) {
    if(inputStr === possInputs[i]) {
      let removeInput = possInputs.splice(i, 1)
      console.log(removeInput, "removed input")
      usedInputs += removeInput + " "
      usedList.innerText = ""
      usedList.append("Used Inputs: ", usedInputs)
      input.value = ""
      possList.innerText = ""
      possList.append("Possible Inputs: ", possInputs)
      console.log(usedInputs, "----usedInputs Array----")
      console.log(possInputs, "----possInputs Array----")
      return true
    } 
    // else {
    //   console.log("You already entered that letter. Try again.")
    //   return usedList.innerText = "You already entered that letter. Try again."
    // }
  }
 
}
// const getPrompt = () =>  {
//     rl.question('Input a letter: ', (str) => {
//       hangman(str);
//       getPrompt();
//     });
//   }
  
//   if (typeof describe === 'function') {
//     solution = "Hello"
//     describe('hangman()', () => {
        
//       it('should be of type function', () => {  
//         assert.equal(typeof hangman, "function");
//       });
//       it('should be able to detect a win', () => {
//         assert.equal(hangman("Hello"), 'You guessed it!');
//       });
      
//     });
//   } else {
//     getPrompt();
//   }
