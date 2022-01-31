const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  guess: this.smallestNum-1,
  play: function() {
    this.chooseNums();

    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    // retuns secretNum for computer

    while (this.guess !== this.secretNum){

      this.getGuess()
      if ((!!this.guess) && ((this.guess <= this.biggestNum) && (this.guess >= this.smallestNum))){
        this.prevGuesses.push(this.guess)
      }
      // pushes guess into array if number is in range and is a number. 
      // console.log(!!Number(this.guess))
      this.render()
    }
    return //'YOU WON!!!'
  },
  // 1. prevGuesses
  getGuess: function(){
    // 2. getguess
    let input = Math.round(Number(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)))
    // console.log(!!input) if not a number will return false. 
    if (!!input === false){
      alert ('Please input a number!!');
      this.guess = input;
    } else if (input > this.biggestNum || input < this.smallestNum){
      this.guess = input;
      alert ('The number you entered is out of the range. Try again!')
    } 
    while (!!input){//((!!input) && (input <= this.biggestNum && input >= this.smallestNum)){
      this.guess = input;
      return input
    }
    // player input their number
  },
  
  render: function(){
    if (!!this.guess) {    //(Number(this.guess))

      if (this.guess === this.secretNum){
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries`)

      } else if (this.guess < this.secretNum && (this.guess >= this.smallestNum && this.guess <= this.biggestNum)){
        this.smallestNum = this.guess
        alert(`Your guess is LOWER than the secret number. Your previous guesses are: ${this.prevGuesses.join(', ')}`) // and answer ${this.secretNum}`)

      } else if (this.guess > this.secretNum && (this.guess <= this.biggestNum && this.guess >= this.smallestNum)) {
        this.biggestNum = this.guess
        alert(`Your guess is HIGHER than the secret number. Your previous guesses are: ${this.prevGuesses.join(', ')}`) // and answer ${this.secretNum}`)
      } 
    }
    
  },

  chooseNums: function(){
    // lets play choose range numbers. it sets the largest input value to biggestNum and smallest input to smallestNum.
    let num1 = Math.round(Number(prompt(`Please enter the beginning number for your range`)))
    let num2 = Math.round(Number(prompt(`Please enter the last number for your range`)))
    if (num1 > num2){
      this.smallestNum = num2;
      this.biggestNum = num1;
    } else {
      this.smallestNum = num1;
      this.biggestNum = num2;
    }
  },
}

game.play();