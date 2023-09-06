//Global Scope
//--------

// let user = {
//   name: "Ben",
//   age: 20,
// };

// const amtOfMoney = 100;

// function getUseInfo(objUser) {
//   console.log(`${objUser.name} is ${objUser.age} years old`);
// }

//update user

// function changeUserInfo(obj) {
//   obj.name = "John";
//   obj.age = 30;
// }

// changeUserInfo(user);

// getUseInfo(user);

//Block Scope
//--------
// let age = 30;

// if (age > 18) {
//   let msg = "You are old enough";
//   console.log(msg);
// }
// console.log(age);

//Function Scope
//--------

// const myFn = () => {
//   console.log(x);
//   let x = "Hello";
// };

// myFn();

//Lexical Scope
//--------

// function myFn1() {
//   let x = "Hello";
//   console.log(y);
//   function anotherFn() {
//     let y = 10;
//     console.log(x);
//   }

//   //invoke
//   anotherFn();
// }

// myFn1();

//------
//High order function vs function as first class citizen in javascript
//------

//Functions returning function

// function addTwoNums() {
//   return function (a, b) {
//     return a + b;
//   };
// }

//invoke
// const ans = addTwoNums();
// console.log(ans(2, 2));

//another way of calling this fn

// const ans = addTwoNums()(2, 2);
// console.log(ans);

//assign fn to a variable

// function sayHello() {
//   console.log("How are you");
// }

// const rseult = sayHello;

// rseult();
// sayHello();

//store fn in arr

// function sayHello() {
//   console.log("Hello");
// }

// function sayHi() {
//   console.log("Hi");
// }

// const arr = [sayHello, sayHi];

// arr[0]();
// arr[1]();

//-----
//High Order Function (HOF)
//-----

//Calc Bill
const calcBill = function (qyt, price) {
  return qyt * price;
};

//Display Bill
const displayBill = function (calcBillFn) {
  console.log(calcBillFn);
};

// displayBill(calcBill(2, 5));

//-------
//Function returning another function
//-------

// function addTwoNums() {
//   return function () {
//     console.log("Am called");
//   };
// }

// // const firstFn = addTwoNums();

// // const secondFn = firstFn();
// // console.log(secondFn);

// addTwoNums()();

function addTwoNums(a) {
  return function (b) {
    return a + b;
  };
}

const addTwoNums2 = a => {
  return b => a + b;
};

addTwoNums2(3)(4);

// const firstFn = addTwoNums(2);
// const result = firstFn(3);

// console.log(result);

// const result = addTwoNums(2)(3);
// console.log(result);

//---------
//IIFE - Immediately Invoked Function Expression
//-------

function logHello() {
  console.log("Hello normal function");
}

// logHello();

//using IIFE
// (function sayhello() {
//   logHello();
// })();

(() => console.log("Another IIFE"))();
