// GAME
  // take a range of numbesr 1 - 100
  // smallest number to biggest number (this is just setting propeties in the object for the game. it does not have to be in any specific order just min/max)
  // given that range, a random number is generated
  // the user has to guess that random number
  // the game needs to track how many guesses has happened
  // also tells us if we guessed right number or not
  // give clues whether our guess is more than the random number or less than the random number

  // my notes on game
  // look at math.floor(math.random)
    // once a number is generated, save to a variable. 
    // multiple ways of generating the number:
        // on load. this may cause an issue because after winning, the user will have to refresh the page.
        // after winning, so while loop, if comVal = playerVal then run function to generate new num. this may be an issue if the player wins, the win message will disappear. 
        // have a new button appear or change the original button to say play again. so once the to values are equal and button is pressed, the comp generates a new value and player inputs again. 
            // this seems the best option. i think i will still need an onload function so that if the player plays for the first time, it will load a num. 
            // or i can have a start button. then it will disappear or change to submit. if it just changes to 
  // user inputs a number in a input field
      // save the user input number into a variable
      // should run through a function on button click
      // the function should check:
      // if its greater or less than the random number. if either then show message if too high or too low
      // if it is the same number then show message you win
  // each time the button is pressed, a variable that is set to 0 should increment by 1 for each click.
    // possibly for loop to increment a variable. 
  // once the player wins, display the click value
  // after winning a new number is generated. 
    // multiple ways of generating the number:
        // on load. this may cause an issue because after winning, the user will have to refresh the page.
        // after winning, so while loop, if comVal = playerVal then run function to generate new num. this may be an issue if the player wins, the win message will disappear. 
        // have a new button appear or change the original button to say play again. so once the to values are equal and button is pressed, the comp generates a new value and player inputs again. 
  // player input on console

  // let sign = prompt('hello your name is')
// alert(sign)

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    return this.secretNum;
    // retuns secretNum for computer

    do {
      this.getGuess();
      this.prevGuesses.push(this.getGuess());
    } while (input < this.biggestNum && input > this.smallestNum)
    // do .. while calls getGuess and pushes the input into prevGuesses array. 
    // while it is in between the range. 

  },
  prevGuesses: [],
  // 1. prevGuesses
  getGuess: function(){
    // 2. getguess
    let input = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
    console.log(parseInt(input))    // I don't think parseInt is necessary from testing this out and looking it up.
    console.log(typeof input)
    console.log(isNaN(input))
    // player input their number
    if (isNaN(input) === true){
      return `Seems like ${input} isn't a number! Please enter a number!`
    // 3. value that is a number not string | is between smallest and biggest num inclus.
    // hints: while loop | parseInt returns NaN if the string cannot be parsed into a number
    } else if (input > this.biggestNum || input < this.smallestNum){
        return `Please input a number between ${this.smallestNum} and ${this.biggestNum}!`
        // checks if input is between the desired range
    } else{
      return input
    }

    }
  
  render: function(){
    if 
  }
}

//game.getGuess()                                
console.log(game.getGuess())