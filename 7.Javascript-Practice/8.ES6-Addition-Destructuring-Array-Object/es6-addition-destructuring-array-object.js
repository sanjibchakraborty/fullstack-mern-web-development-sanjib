//Destrcuturing

//Array Destructuring

// const arr = [1, 2, 3, 4, 5];

// const [num1, num2, num3, num4, num5] = arr;

// const users = [
//   { username: "Ben", age: 20 },
//   { username: "John", age: 30 },
// ];

// const [user1, user2] = users;

//Object Destructuring

// const obj = {
//   firstName: "",
//   age: 24,
// };

// const { firstName = "ff", age: myAge } = obj;

//add default values
// const obj = {
//   firstName: undefined,
//   age: 24,
// };

// const { firstName = "Ben", age, city = "NY" } = obj;

//Destructure parameters
// const userObj = {
//   firstName: "John",
//   age: 24,
// };

// function getUser(user) {
//   console.log("First name-", user.firstName);
//   console.log("age-", user.age);
// }

// function getUser({ firstName, age }) {
//   console.log("First name-", firstName);
//   console.log("age-", age);
// }

// getUser(userObj);

//REST PARAMETERS

//argument

// function addTwoNums(...rest) {
//   console.log(rest);
// }
// addTwoNums(20, 10, 30, "Me");

// function addTwoNums(a, b, ...rest) {
//   console.log(a, b);
//   console.log(rest);
// }
// addTwoNums(20, 10, 30, "Me");

// function findMax(...rest) {
//   console.log(Math.max(...rest));
// }

// findMax(10, 20, 30, 100, 200);

//---------
//Arrow functions
//--------

// function add(a, b) {
//   return a + b;
// }

// const add2 = (a, b) => {
//   return a + b;
// };

//Limitations

// const carObj = {
//   name: "BMW",
//   year: 2022,
//   getName: () => {
//     console.log(this.name);
//   },
// };

// carObj.getName();

// const add = () => {
//   console.log(arguments);
// };

// function add2() {
//   console.log(arguments);
// }

// // add();
// add2(1, 3);

// const Person = name => {
//   this.name = name;
// };

// const ben = new Person("Ben Joe");

// console.log(ben);

//------
//Arrow syntax
//------

//1. One parameter with simple expression

function add(a) {
  return a;
}

// console.log(add(2));

const add2 = a => a;

// console.log(add2(2));

//2. multiple parameters with simple expression

const add3 = (a, b) => a + b;

// console.log(add3(2, 3));

//3. multiple statements

const sum = a => {
  let b = 10;
  return a + b;
};

// console.log(sum(10));

//3. multiple statements and multiple parameters

// const add4 = (a, b) => {
//   let c = 10;
//   let d = 20;
//   return a + b + c + d;
// };

//4. Immediately return object literal

// const userObj = {
//   name: "John",
//   age: 20,
// };

// const userInfo = user => ({ name: user.name, age: user.age });

// const user = userInfo(userObj);
// console.log(user);

//Destructuring obj with arrow function
// const userObj = {
//   name: "John",
//   age: 20,
// };

// const displayUser = ({ name, age }) => {
//   return `Your name is ${name}, and age is ${age} `;
// };

// const user = displayUser(userObj);

// console.log(user);

//Destructuring array with arrow function

// const displayUser = ([name, myAge]) => {
//   return `${name} ${myAge}`;
// };

// const result = displayUser(["John", 30]);

// const displayUser = ([name, age] = ["John", 50]) => `${name} ${age}`;

// const add9 = (a, b = 20) => a + b;

// const ans = add9(2);

//Anonymous fn

// (function (a) {
//   return a + 2;
// })(2);

// a => a + 2;

//---------
//Spread operator(...) === expand
//---------

//spread strings
// console.log(..."welcome");

//spread arrays
//console.log([..."nodejs"]);

//Combine arrays

const arr = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

//traditional
// const newArr = arr.concat(arr2);

//modern
// const newArr2 = [...arr, ...arr2];

//mutate
// const originalArr = ["Ben", "Joe", "Kimi"];

//copy the original array

// const newArr = [...originalArr];
// console.log("Before pushing", originalArr);

// //add new user
// newArr.push("Joe");

// console.log("after pushing", newArr);

//spread objects

const obj1 = {
  name: "John",
  age: 30,
};
const obj3 = {
  name: "Emily",
  age: 20,
};

const obj2 = {
  city: "NY",
  country: "USA",
};

//Traditional way
const newObj = Object.assign({}, obj1, obj2);

//ES5
const newObj2 = { ...obj1, ...obj2, ...obj3 };
