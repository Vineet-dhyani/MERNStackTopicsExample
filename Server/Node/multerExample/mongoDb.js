const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/drawings", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection
  .once("open", () => {
    console.log("Connection Established");
  })
  .on("connectionError", (err) => {
    console.log(err);
  });

module.exports = { mongoose, connection };
