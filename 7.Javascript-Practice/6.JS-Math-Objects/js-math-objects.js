//----
//Math functions
//-----

//Math.abs(x)
// const ans = Math.abs(10.1999);

// //Math.round()
// const ans = Math.round(5.5);

//Math.ceil()
// const ans = Math.ceil(5.1);

//Math.floor()
// const ans = Math.floor(5.9);

//Math.sqrt()
// const ans = Math.sqrt(25);

//Math.pow()
// const ans = Math.pow(2, 3);

//Math.min()
// const ans = Math.min(9, -2);

//Math.max()
// const ans = Math.max(9, -2);

//Math.random()
//const ans = Math.random();
// console.log(ans);

//get random numbers between two numbers

//Math.random() * (max-min + 1) + min

//Example:
//get random numbers between 10,20

// const rand = Math.floor(Math.random() * (20 - 10 + 1) + 10);
// console.log(rand);

//------coding challenge 1------
//Create a function to to find the maximum of two numbers.
//The maximum of two numbers is the larger of the two numbers.
//The maximum of two numbers should be returned as a number.
//The two numbers should be supplied as parameters to the function.

//solution 1
// function getMaxNum(number1, number2) {
//   if (number1 > number2) {
//     return number1;
//   } else {
//     return number2;
//   }
// }
// const result = getMaxNum(20, 40);

//solution 2

// function getMaxNum2(number1, number2) {
//   return Math.max(number1, number2);
// }

// const result = getMaxNum2(20, 40);
// console.log(result);

//------coding challenge 2------
//Create a function to to find the minimum of two numbers.
//The minimum of two numbers is the smaller of the two numbers.
//The minimum of two numbers should be returned as a number.
//The two numbers should be supplied as parameters to the function.

// function getMaxNum2(number1, number2) {
//   return Math.min(number1, number2);
// }

// function getMaxNum(number1, number2) {
//   if (number1 < number2) {
//     return number1;
//   } else {
//     return number2;
//   }
// }
// const result = getMaxNum(20, 40);
// console.log(result);

//------coding challenge 2------
//Create a function to to find the average of two numbers.
//The average of two numbers is the sum of the two numbers divided by 2.
//The average of two numbers should be returned as a number.
//The two numbers should be supplied as parameters to the function.
//Convert the results to a whole number

//BODMAS
//solution

// function average(number1, number2) {
//   //check if they are numbers
//   if (Number(number1) && Number(number2)) {
//     let avg = (number1 + number2) / 2;
//     return Math.floor(avg);
//   } else {
//     return "Please provide a number";
//   }
// }

// const result = average(10, "two");
// console.log(result);

//------coding challenge 3------
//create a function to get random number between two numbers
//The function should return a random number between the two numbers.
//The two numbers should be supplied as parameters to the function.
//The random number should be returned as a number.
//Round the random number to the nearest whole number.

//Solution

// function getRandomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const rand = getRandomNum(30, 40);

// console.log(rand);

//------coding challenge 4------
//Create a function to guess a number when the function runs
//If you get it right alert 'Correct' otherwise 'try again'

//solution

const guessNumber = function (num) {
  //get random number
  const rand = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  console.log(rand);
  if (num === rand) {
    alert("Correct");
  } else {
    alert("Try again");
  }
};

guessNumber(6);
