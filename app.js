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
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  guess: this.smallestNum-1,
  // inRange: ((this.guess < this.biggestNum) && (this.guess > this.smallestNum)),
  play: function() {
    this.setBig();
    this.setSmall();

    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    //return this.secretNum;
    // retuns secretNum for computer
    //this.getGuess();        
    // let n;
    while (this.guess !== this.secretNum){
      // n++;
      this.getGuess()
      if ((!!this.guess) && ((this.guess <= this.biggestNum) && (this.guess >= this.smallestNum))){
        this.prevGuesses.push(this.guess)
      }
      // console.log(!!Number(this.guess))
      this.render()
      // if ((this.guess < this.biggestNum) && (this.guess > this.smallestNum)() && !!this.guess){ 
      //   this.prevGuesses.push(this.guess)
      // }
      // }
    }

    // let guess = this.getGuess()  
    // console.log(guess) 
    // console.log(!!guess) 
    // console.log(typeof guess) // what getGuess returns changes the type
    // while(guess < this.smallestNum && guess > this.biggestNum){
    //   this.prevGuesses.push(guess);
    //   this.getGuess();
    // }

    // do {
    //   this.prevGuesses.push(this.getGuess());  
    //   this.getGuess();
    // } while (this.getGuess() < this.biggestNum && this.getGuess() > this.smallestNum) 
    // do .. while calls getGuess and pushes the input into prevGuesses array. 
    // while it is in between the range. 
    return 'you won'
  },
  // 1. prevGuesses
  getGuess: function(){
    // 2. getguess
    let input = Math.round(Number(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)))
    // let n;
    //console.log(typeof (parseInt(input)))              
    // console.log(typeof input)  
    // console.log(Number(input))
    // console.log(!!NaN)  
    // console.log(input)
    if (!!input === false){
      alert ('please input a number!');
      this.guess = input;
    } else if (input > this.biggestNum || input < this.smallestNum){
      this.guess = input;
      alert ('num out of range')
    } 
    while (input){//((!!input) && (input <= this.biggestNum && input >= this.smallestNum)){
      this.guess = input;
      // n++;
      return input
    }
    // if (n === this.prevGuesses.length){
    //   push();
    // }


    //console.log(isNaN(parseInt(input, 10)))    
    // player input their number
    // if (isNaN(parseInt(input)) === true){ 
    //   return `Seems like ${input} isn't a number! Please enter a number!`
    // 3. value that is a number not string | is between smallest and biggest num inclus.
    // hints: while loop | parseInt returns NaN if the string cannot be parsed into a number
    // } else if (input > this.biggestNum || input < this.smallestNum){
    //     return `Please input a number between ${this.smallestNum} and ${this.biggestNum}!`
        // checks if input is between the desired range
    // } else{
    //   return input 
  },
  
  render: function(){
    if (!!this.guess) {    //(Number(this.guess))

      if (this.guess === this.secretNum){
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries`)
      } else if (this.guess < this.secretNum && (this.guess >= this.smallestNum && this.guess <= this.biggestNum)){
        this.smallestNum = this.guess
        // this.tooLow()
        alert(`too low ${this.prevGuesses.join(', ')} and answer ${this.secretNum}`)
      } else if (this.guess > this.secretNum && (this.guess <= this.biggestNum && this.guess >= this.smallestNum)) {
        this.biggestNum = this.guess
        // this.tooHigh()
        alert(`too high ${this.prevGuesses.join(', ')} and answer ${this.secretNum}`)
      } 
    }
    
  },

  setBig: function(){
    let chooseBig = Math.round(Number(prompt(`Please enter a number to set as the Biggest`)))
    this.biggestNum = chooseBig;

  },

  setSmall: function(){
    let chooseSmall = Math.round(Number(prompt(`Please enter a number to set as the Smallest`)))
    this.smallestNum = chooseSmall;

  },


  // tooLow: function(){
  //   if (this.guess > this.smallestNum && this.guess < this.biggestNum){
  //     this.smallestNum = this.guess
  //   }
  // },
  
  // tooHigh: function(){
  //   if(this.guess < this.biggestNum & this.guess > this.smallestNum){
  //     this.biggestNum = this.guess
  //   }
  // },

  // inRange: function(){
  //   return (((this.guess-this.smallestNum)*(this.guess-this.biggestNum)) <= 0)
  // }
  // check: function(){
    //let idx = this.prevGuesses.length - 1
  //   if ((this.guess > this.smallestNum && this.guess < this.biggestNum) && this.guess < this.secretNum){
  //     this.smallestNum = this.guess
  //   } else if ((this.guess > this.smallestNum && this.guess < this.biggestNum) && this.guess > this.secretNum){
  //     this.biggestNum = this.guess
  //   }
  // },

  // push: function(){
  //   this.prevGuesses.push(this.guess)
  // }
}

// console.log(game.getGuess())                  
// console.log(game.guess)
// console.log(game.play()) 
console.log(game.play())


//console.log(game.secretNum)
// console.log(game.prevGuesses.join(', '))
// console.log(game.prevGuesses.length)
//console.log(game.getGuess())

let test = '3'
let bait = Math.round(Number(test))
console.log(typeof bait)
// console.log(isNaN(bait))
console.log(!!bait + '  bool') // this may be useful
if (!!bait){             //(isNaN(bait) === true){
  console.log('this is true') // this also may be useful. i should be able to use this for determining true false for if statements. and to simplify, i can use just number(test) and it will put out true false. 
  // then i can put a message saying whether its a number or not and repeat.
  // needs to be in a while loop too to continuously check the inputs
  // instead of console.log everything start using alerts. and if trouble shooting, use console.log
} else {
  console.log('this is false')
}
// console.log(Number(test)) // use this for testing if number
// console.log(typeof (Number(test)))


// function cheese (text){
//   console.log('food ' + text)
// }
// let bingo = cheese('banana') 
// console.log(typeof(bingo))
// bingo = cheese('fig')
// console.log(typeof bingo)