let solution = ""
let inputStr = ""
let guess = []
let usedInputs = []
const possSolution = ["hello", "goodbye", "seeya", "howdy", "later", "ola", "goodnight"]
const possInputs = ["a", "b", "c", "d", "e", 'f', "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const submitButton = document.getElementById("submit")
let counter = 10
// let numberOfClicks = 0


const input = document.querySelector("#userInput")
input.addEventListener("keyup", e => {
  let trim = e.target.value
  inputStr = trim.toLowerCase().trim()
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

// // generates random solution from possSoltion array 
solution = possSolution[Math.floor(Math.random() * possSolution.length)]
console.log(solution, "----solution----")



const checkInput = (input) => {
    // input = input.toLowerCase().trim()
    let arrSolution = solution.split("")

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
    if(!arrSolution.includes(input) && !usedInputs.includes(input) ) {
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
}

// const youLose = () => { 
//     if(guess != solution)
//     submitButton.addEventListener("click", () => {  
//         numberOfClicks += 1
//         if(numberOfClicks === 10) console.log("you dead...")
//         console.log(numberOfClicks)
//       })
//     }
      
const hangman = (str) => {
    str = inputStr
    if(checkInput(str)){
    switchArrays()
    let string = guess.join('')

    // // winner message will display on DOM //
    message.innerHTML = ""
    messageItem.innerText = `You Won! The word was: ${string}`
    message.append(messageItem.innerText)
    } else {

        switchArrays()
    }
}


const switchArrays = () => {
  for(let i = 0; i < possInputs.length; i++) {
      if(inputStr === possInputs[i] && inputStr !== usedInputs[i]) {
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
        message.append(guess.join(" "))
          return true
        }
        else {
            // console.log("Please make an entry or enter a letter not already used.")
            usedList.innerText = "Please make an entry or enter a letter not already used."
        }
    }
}