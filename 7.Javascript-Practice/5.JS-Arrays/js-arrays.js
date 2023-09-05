//1. using the new keyword

// const books = new Array("css", "html", "node js");

// const books2 = new Array(); //[]

// books2[0] = "CSS";
// books2[1] = "HTML";
// books2[2] = "Node js";

// //2. Array literal

// // const books3 = ["js", "react", "express", "redux"];

// const books3 = [];
// //add record

// books3[0] = "js";
// books3[1] = "react";
// books3[2] = "express js";

// //Arrays can take any data type value

// const arr = ["food", true, 20, null, undefined];

//------
//ACCESSING ARRAYS
//------

// const books = ["mongoDB", "Node Js", "React Js"];

// //get first book
// const b1 = books[0];

// //get second book
// const b2 = books[1];

// //get three book
// const b3 = books[2];

// //get four book
// const b4 = books[7];

// console.log(b4);

//-----
//Iterating over an array
//----

// const books = ["mongoDB", "Node Js", "React Js", "HTML", "css", "Angular"];

// //check for how Many records in this array
// for (let i = 0; i < books.length; i++) {
//   const arr = books[i];
//   console.log(arr);
// }

//ARRAY METHODS

// const books = ["mongoDB", "Node Js", "ReactJs", "HTML"];

//push()
// books.push("CSS");

//pop()
// books.pop();

//unshift()
// books.unshift("novel");

//shift()

//indexOf

// const books = ["mongoDB", "Node Js", "ReactJs", "HTML"];

//lastIndexOf()
// const res = books.lastIndexOf("Node Jsss");
//include()
// console.log(books.includes("Node Jsss"));

// //reverse()
// console.log(books.reverse());

//reduce
//filter

//-----REDUCE------
//reduce return a single
//does not mutate

// const productQty = [12, 30];

// arr.reduce(function(acc,currVal, currIdx, arr){

//}, initialVa)

//Find the total qty in the array

// const ans = productQty.reduce(function (acc, currVal) {
//   return acc + currVal;
// }, 0);

// console.log(ans);

//-------
//find
//------

// const agesArr = [2, 5, 6, 20, 30, 50, 24];
//syntax

//arr.find(function(data){

//})

//find age less than 30;

// const result = agesArr.find(function (age) {
//   return age < 30;
// });

// console.log(result);

//-----
//filter
//----

const scoresArr = [20, 50, 60, 20, 30, 90, 50, 100, 24];

//find all scores above 50;
// const ans = scoresArr.filter(function (score) {
//   return score > 50;
// });

//-----CODING CHALLENGE ON ARRAYS

//challenge 1:
//create an array of numbers
//create a for loop that prints out the numbers in the array

const amount = [90, 400, 1, 5, 7];

// for (let i = 0; i < amount.length; i++) {
//   console.log(amount[i]);
// }

//challenge 2:
//create an array of strings
//create a for loop that prints out the strings in the array
//The strings should be in the following format:
//"This is string number: " + i
//Example: "This is string number: 1"

// const str = ["This", "is", "my", "node js", "you"];

// for (let i = 0; i < str.length; i++) {
//   console.log(`This is string number ${i}`);
// }

//challenge 3:
//Write a function to reverse an array
//The function should take in an array and return the array in reverse order

// const reversedArr = function (arr) {
//   return arr.reverse();
// };

// const arrData = [1, 2, 3, 4, 5, 6, 7];
// const res = reversedArr(arrData);
// console.log(res);

//-------ARRAY CHALLENGE 4-------

//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array
//The function should take in an array and return the sum of all the numbers in the array

//solution

// const sumOfAllNumArr = [1, 25, 6, 9, 2];

// function sumOfAllNumArrFn(arr) {
//   //   const total = arr.reduce(function (acc, curVal) {
//   //     return acc + curVal;
//   //   }, 0);
//   return arr.reduce((acc, curr) => acc + curr);
// }

// const ans2 = sumOfAllNumArrFn(sumOfAllNumArr);

//------------
//--Challenge 5:
//-----------

//Write a function that takes in an array of numbers and returns the average of all the numbers in the array
//The function should take in an array and return the average of all the numbers in the array
//convert the result to 2 decimal places
//Add dollars signs at the beginning of the result

// const avgNum = function (arr) {
//   //calc avg
//   const avg = arr.reduce(function (acc, currVal) {
//     return acc + currVal / arr.length;
//   }, 0);
//   //return the result from the function
//   return `$ ${avg.toFixed(2)}`;
// };

// const ans = avgNum([2, 3, 4, 5, 9, 2]);
// console.log(ans);

//------------
//--Challenge 6:
//-----------

//Create a function to remove all duplicates values from an array
//The function should take in an array and return a new array with all the duplicates removed

// const arrData = [2, 4, 6, 2, 4, 4, 5, 8, 9, 4];

// function removeDuplicates(arr) {
//   //remove duplicates
//   const filteredData = arr.filter(function (el, idx, arr) {
//     return arr.indexOf(el) === idx;
//   });

//   return filteredData;
// }

// const res = removeDuplicates(arrData);

// console.log(res);
// console.log(arrData);

//------------
//--Challenge 7:
//-----------
//Write a function that takes an array of words and returns a new array with only the words that are three letters or shorter.

//SOLUTION

const arrData = [
  "NodeJS",
  "ExpressJS",
  "React",
  "Css",
  "HTML",
  "JS",
  "MongoDB",
];

const findThreeLetters = function (arr) {
  return arr.filter(function (el, idx, arr) {
    return el.length <= 3;
  });
};

const res = findThreeLetters(arrData);

console.log(res);
