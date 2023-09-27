const mongoose = require("mongoose");
//connect to mongoDB using async await
const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://inovotek:Y8MtpWcYhD3JlwS@mongodb-demo.lqjq2rn.mongodb.net/Error-33?retryWrites=true&w=majority"
    );
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
connectDB();
