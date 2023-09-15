const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://sanju160984:Sanjumili1@mongodb-demo.yagqbqq.mongodb.net/?retryWrites=true&w=majorit";

// Create new client
const client = new MongoClient(url);

const dbConnect = async () => {
  try {
    // connect to db
    await client.connect();
    console.log("DB connected successfully");

    // Create a new db
    const db = client.db("School");

    // Create a collection inside 'School' db
    const students = db.collection("Students");

    // Create or insert documents inside the 'Students' collection

    // Insert single document (Student)
    // const student1 = await students.insertOne({
    //   name: "John Doe",
    //   city: "Kumasi",
    // });
    // console.log(student1);

    // Insert multiple document (Student)
    // const multipleStudents = await students.insertMany([
    //   { name: "Peter", city: "Kumasi" },
    //   { name: "Thomas", city: "Western" },
    // ]);
    // console.log(multipleStudents);

    // Find all students
    const allStudents = await students.find().toArray();
    console.log(allStudents);

    // Find a student by name 'Peter'
    const foundStudent = await students.findOne({ name: "Peter" });
    console.log(foundStudent);

    // Find all students from Kumasi
    const foundStudents = await students.find({ city: "Kumasi" }).toArray();
    console.log(foundStudents);

    // Update record
    const updatedStudents = await students.updateOne(
      { name: "Peter" },
      {
        $set: { name: "Peter", city: "Kolkata" },
      }
    );
    console.log(updatedStudents);

    // Delete a student
    const deletedStudent = await students.deleteOne({ name: "Thomas" });
    console.log(deletedStudent);
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
