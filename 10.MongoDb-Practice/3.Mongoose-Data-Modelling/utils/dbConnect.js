const mongoose = require("mongoose");
module.exports = mongoose
  .connect(
    "mongodb+srv://sanju160984:Sanjumili1@mongodb-demo.yagqbqq.mongodb.net/data-modelling?retryWrites=true"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err.message));
