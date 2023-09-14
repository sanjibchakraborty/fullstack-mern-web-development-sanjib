const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://sanju160984:Sanjumili1@mongodb-demo.yagqbqq.mongodb.net/?retryWrites=true&w=majority";

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
    const multipleStudents = await students.insertMany([
      { name: "Peter", city: "Kumasi" },
      { name: "Thomas", city: "Western" },
    ]);
    console.log(multipleStudents);
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
