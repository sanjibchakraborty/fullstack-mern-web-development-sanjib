//-----
//Ways of creating string
//----

//using string literal
// const myName = "John";

//using the constructor function

// const firstName = new String("John");

// const result = myName === firstName;

// console.log(firstName);

//------
//String concatenation
//-----

//+ operator

// const str1 = "Hello";
// const str2 = "How are you";
// // const result = str1 + " " + str2;

// //concate method()
// const result = str1.concat(" " + str2);

// console.log(result);

//------
//Js Template Literals

//string templates
//back tick sybrax
//template strings

//Back tick syntax

// const msg = `Good day brother`;

// const msg2 = `"Good evening"`;

//mutiline strings

// const msg = `
// Welcome to our application
// try to make sure your have
// an
// account
// `;

// //interpolation

// const age = 30;

// const welcome = `This is your age ${age}`;

//-----
//string length
//-----

// const lastName = "John";

// const result = lastName.length;

// console.log(result);

//-----STRING LENGTH CHALLENGE-----
/*

// 1. create a function to find the number of words in a string
//The function should take a string as an argument.
//The function should return the number of words in the string.

// 2. create a function to check if a string is longer than a certain number of characters
//The function should take two arguments: the first argument is the string, and the second argument is the number of characters.
//The function should return true if the string is longer than the number of characters, and false if it is not.
*/

//SOLUTION 1
function stringLength(str) {
  return str.length;
}

//invoke/call
// const result = stringLength("i-novotek Academy");
// const result2 = stringLength("Academy");
// const result3 = stringLength("i-novotek");
// console.log(result);
// console.log(result2);
// console.log(result3);

// 2. create a function to check if a string is longer than a certain number of characters
//The function should take two arguments: the first argument is the string, and the second argument is the number of characters.
//The function should return true if the string is longer than the number of characters, and false if it is not.

//SOLUTION 2

// const isLongerThan = function (str, num) {
//   if (str.length > num) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const res = isLongerThan("hello", 90);

// console.log(res);

//------
// trim/toUpperCase/toLowerCase/indexOf

//trim

// const str = "  Coding time   ";
// console.log(str.length);

// const res = str.trim();

// console.log(res.length);

//toUpperCase/toLowerCase
// const str = "coding time";

// console.log(str.toUpperCase());

//indexOf

// const str = "coding time";

// const res = str.indexOf("time");

// console.log(res);

//----TRIM CHALLENGE-----

/*

//create a function to check if a string contains whitespace
//The function should take one argument, the string.
//The function should return true if the string contains whitespace, and false if it does not.
*/

//SOLUTION

// function containsWhiteSpace(str) {
//   return str.indexOf(" ") !== -1;
// }

// const res = containsWhiteSpace("john     ");

// console.log(res);

//-----
//split()
//-----
// const str = "you";

// const res = str.split("");

//-----
//join()
//-----
// const convertedStr = res.join("/");

//-----
//revers ()
//-----

// const food = ["pizza", "congee", "Fufu", "rice"];

// const reversedArr = food.reverse();

//----Array join() CHALLENGE-----

/* 
1. create a function to seperate a string using a any character
2. The function should take two arguments: the first argument is the array, and the second argument is the character to use as a separator.
*/

//---RERVERS/JOIN CHALLENGE  ------

/*
#  : create a function to reverse a string
1. The function should take a string as an argument.
2. The function should return the string in reverse order.

*/

//SOLUTION 1

const seperateStrin = function (arr, char) {
  return arr.join(char);
};

// const result = seperateStrin(["js", "css", "node js"], "-");

// console.log(result);

//SOLUTION 2

/*
#  : create a function to reverse a string
1. The function should take a string as an argument.
2. The function should return the string in reverse order.

*/

function reverseString(str) {
  //conver string to arr
  // let strArr = str.split();
  // //reversed the converted string
  // let reversedArr = strArr.reverse();
  // let finalStr = reversedArr.join("");
  // return finalStr;

  return str.split("").reverse().join("");
}

// const result = reverseString("nodejs");

// console.log(result);

//---
//REPEAT()
//---

// const str = "Welcome";

// const res = str.repeat(5);

//---REPEAT CHALLENGE 1-----

/*
#  : create a function to repeat a string a number of times
#: The function should take one argument is the string, to repeat a number of times
The function should return a string with the string repeated the number of times.
*/

//---REPEAT CHALLENGE 2 -----

/* 
#: create a function to repeat a string a number of times
#: The function should take two arguments: string and number
#: The function should return a string
#: The function should check if the number is less than or equal to 0
*/

//SOLUTION

// const repeatString = function (str) {
//   return str.repeat(6);
// };

// const result = repeatString("");

// //SOLUTION 2

// const repeatString2 = function (str, num) {
//   //chek if the number is than or equall to zero
//   if (num <= 0) {
//     return "Number must be greater than 0";
//   }
//   return str.repeat(num);
// };
// const ans = repeatString2("come", 10);

//------
//StartWith()
//------

// const str = "Welcome";

// const result = str.startsWith("w");

//---START WITH CHALLENGE-----
/*
#: create a function to check if a string starts with a certain string
#: The function should take two arguments: the first argument is the string, and the second argument is the string to check if it starts with.
#: The function should return true if the string starts with the string, and false if it does not.
*/

//SOLUTION
// function startsWithFn(str, start) {
//   //check if the start with the string
//   if (str.startsWith(start)) {
//     return true;
//   }
//   return `String does not start with ${start}`;
// }

// //invoke
// const res = startsWithFn("academy", "z");

//---endWith()-----
/*
#: create a function to check if a string ends with a certain string
#: The function should take two arguments: the first argument is the string, and the second argument is the string to check if it ends with.
#: The function should return true if the string ends with the string, and false if it does not.
*/

//------
//includes()
//-----
// const str = "Are you a developer?";

// const result = str.includes("you");
// console.log(result);

//---INCLUDES CHALLENGE-----
/*
#: create a function to check if a string includes a certain string
#: The function should take two arguments: the first argument is the string, and the second argument is the string to check if it includes.
#: The function should return true if the string includes the string, and false if it does not.
*/

//SOLUTION

// function txtIncludes(search) {
//   const txt = "am good today";
//   return txt.includes(search);
// }

// const res = txtIncludes("am good today", "good");
// console.log(res);

//------
//SLICE()
///-----

const str = "welcome to javascript methods";

const res = str.slice(2, 6);

//---SLICE CHALLENGE 1-----
/*
#: create a function to slice a string into a substring
#: The function should take two arguments: the first argument is the string, and the second argument is the number of characters to slice.
#: The function should return a substring of the string.

*/

//SOLUTION
// const sliceString = function (str, num) {
//   return str.slice(0, num);
// };

// const ans = sliceString("Hello word", 10);

// console.log(ans);

//---------
//string comparison
//--------

// console.log("a" < "z");
// console.log("a" < "A");

// console.log("Glow" < "Glow");

//compare of different types

// console.log("a" > 2);

// console.log("5" == 5);

//compare boolean values

// console.log(false == 0);

//cpmpare null and undefined

console.log(null === undefined);
