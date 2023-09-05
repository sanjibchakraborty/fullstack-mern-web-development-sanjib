//Ways of creating a function

//1. function declaration
//2. function expression

//create a function to say hello

//function declaration

//create a function

// function sayHello (){
// //code here
// console.log('Hello, welcome to function')
// }

//calling a function / invocation
//sayHello()

//------
// function expression
//-----

// let greeting = function(){
//     console.log('Good morning')
// }
//greeting()

//create a function to greet mom

// let greetMom = function(){
//     console.log('Mom, good morning');
// }

// greetMom()

//parameters and arguments

// const addNum = function(){
//   let x = 18;
//   let y  = 10;
//   let result = x + y
//   console.log(result)
// }

// addNum()

// const addNum = function(x, y){
//     let result = x + y
//     console.log(result)
//   }

//   //addNum(1.4,9.63215325678)

//Exercise

//1 create a function that will multiply 3 numbers and display the answer in the console

// function multiplyNum(a,b,c){
//   let result = a * b * c
//   console.log(result);
// }

// multiplyNum(1,2,3)

//-----
//Return
//-----

const addNum = function (x, y) {
  let result = x + y;
  console.log("before return");

  console.log("after return");
};

let ans = addNum(3, 4);

function isPalindrome(str) {
  let splits = str.split("");
  splits = splits.reverse();
  const reversedStr = splits.join("");
  console.log(reversedStr);
}

isPalindrome("katak");
