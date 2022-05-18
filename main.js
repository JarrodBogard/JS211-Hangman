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
const submitButton = document.getElementById("submit")
let numberOfClicks = 0


const input = document.querySelector("#userInput")
input.addEventListener("keyup", e => {
  inputStr = e.target.value
  console.log(inputStr)
})

// winner message element
const message = document.querySelector("#winner-message")
message.style.listStyle = "none"
const messageItem = document.createElement("li")

// possible input list 
const possList = document.querySelector("#possible-inputs")
possList.style.listStyle = "none"
const inputItem = document.createElement("li")
inputItem.style.letterSpacing = "2px"
inputItem.innerText = possInputs
possList.appendChild(inputItem)

// used input list 
const usedList = document.querySelector("#used-inputs")
usedList.style.listStyle = "none"
const usedItem = document.createElement("li")
usedItem.style.letterSpacing = "2px"
usedItem.innerText = usedInputs
usedList.appendChild(usedItem)

// generates random solution from possSoltion array 
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

const youLose = () => { 
  if(inputStr != solution)
  submitButton.addEventListener("click", () => {  
    numberOfClicks += 1
    if(numberOfClicks === 10) console.log("you dead...")
    console.log(numberOfClicks)
  })
}

const hangman = (str) => {
  str = inputStr
  if(checkInput(str)){
    switchArrays()
    console.log(guess)
    let string = guess.join('')
    message.innerHTML = ""
    console.log(`You Won! The word was: ${string}`)
    // winner message will display on DOM //
    messageItem.innerText = `You Won! The word was: ${string}`
    message.append(messageItem.innerText)
    
  }
  else{
    switchArrays()
    checkInput(str)
    console.log(guess)
  }
}


const switchArrays = () => {
  for(let i = 0; i < possInputs.length; i++) {
    if(inputStr === possInputs[i] && inputStr !== usedInputs[i]) {
      // removes user input from the possInputs array and places in empty usedList array //
      let removeInput = possInputs.splice(i, 1)
      usedInputs += removeInput + " "
      usedList.innerText = ""
      usedList.append("Used Inputs: ", usedInputs)
      
      // displays updated possInputs array //
      input.value = ""
      possList.innerText = ""
      possList.append("Possible Inputs: ", possInputs)
      
      // displays correct guesses //
      message.innerText = ""
      message.append(guess)
      
      console.log(removeInput, "removed input")
      console.log(usedInputs, "----usedInputs Array----")
      console.log(possInputs, "----possInputs Array----")
        return true
      }
      else {
        // console.log("Please make an entry or enter a letter not already used.")
        usedList.innerText = "Please make an entry or enter a letter not already used."
        // youLose()
      }
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
