// Print only even number beween 0 to 100
// for (let index = 0; index <= 100; index++) {
//   const element = index;
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// }
let guessNumber = 25;
let userGuess = parseInt(prompt("Enter your Number between 1 to 25"));

while (userGuess !== guessNumber) {
  userGuess = parseInt(prompt("Guess Again"));
}

alert("Congratulations! You guessed the number.");
