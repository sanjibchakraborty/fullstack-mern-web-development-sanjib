//--------
//Array of objects
//--------

//Mutation
// const arr = [1, 2, 3, 4, 5];

// //add new data into original data

// arr.push(6);

// arr.pop();

// arr.shift();

// console.log(arr);

//------
//Array methods
//------

//1. ForEach();

// const students = [
//   { name: "John", age: 20 },
//   { name: "Mary", age: 26 },
//   { name: "Peter", age: 22 },
//   { name: "Sally", age: 23 },
// ];

// students.forEach(user => {
//   console.log("name", user.name);
//   console.log("age", user.age);
// });

//1. map();

// const newStudents = students.map(user => {
//   return user.name;
// });

// newStudents.push("Emmanuel");
// console.log(newStudents);
// console.log(students);

//1. filter();
// const students = [
//   { name: "John", age: 20, debt: false },
//   { name: "Mary", age: 26, debt: false },
//   { name: "Peter", age: 22, debt: true },
//   { name: "Sally", age: 23, debt: true },
// ];

// const debtStudents = students.filter(student => {
//   return student.age < 26;
// });

// console.log(debtStudents);

//1. reduce();
const products = [
  { name: "banana", price: 1 },
  { name: "orange", price: 2 },
  { name: "apple", price: 3 },
  { name: "pear", price: 4 },
];

const sum = products.reduce(function (total, product) {
  return total + product.price;
}, 0);

console.log(sum);
