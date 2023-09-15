const mongoose = require("mongoose");

// Connect to mongoose
mongoose
  .connect(
    "mongodb+srv://sanju160984:Sanjumili1@mongodb-demo.yagqbqq.mongodb.net/university?retryWrites=true&w=majorit"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));

// Define the schema: name, city, courses, isMarried, age
// const studentSchema = new mongoose.Schema({
//   name: String,
//   city: String,
//   courses: Array,
//   isMarried: Boolean,
//   age: Number,
// });

// Model
const Student = mongoose.model("Student", studentSchema);

// Create student
Student.create({
  name: "Sanjib",
  city: "India",
  courses: ["Twi"],
  isMarried: false,
  age: 20,
})
  .then((student) => console.log(student))
  .catch((err) => console.log(err));

// Find all students
// Student.find()
//   .then((students) => console.log(students))
//   .catch((err) => console.log(err));

// Find all students whose age  === 20
// Student.find({ age: 20 })
//   .then((students) => console.log(students))
//   .catch((err) => console.log(err));

// Find single record by ID
// Student.findById("65043e7dbc3e262bd0baa6cf")
//   .then((student) => console.log(student))
//   .catch((err) => console.log(err));

// Find single record
// Student.findOne({ name: "Sanjib" })
//   .then((student) => console.log(student))
//   .catch((err) => console.log(err));

// Update record
// Student.findOneAndUpdate(
//   { name: "Sanjib" },
//   { age: 50 },
//   {
//     new: true,
//   }
// )
//   .then((student) => console.log(student))
//   .catch((err) => console.log(err));

// Find by ID and update record
// Student.findByIdAndUpdate(
//   "65043e7dbc3e262bd0baa6cf",
//   { age: 38 },
//   {
//     new: true,
//   }
// )
//   .then((student) => console.log(student))
//   .catch((err) => console.log(err));

// Find by ID and delete record
// Student.findByIdAndDelete("65043be83c6d38e79920349a")
//   .then(() => console.log("Student has been deleted"))
//   .catch((err) => console.log(err));
