const mongoose = require("mongoose");


var mongoURL =
  "mongodb+srv://Shahil:Fake123@cluster0.xdocm.mongodb.net/hotel-book?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
