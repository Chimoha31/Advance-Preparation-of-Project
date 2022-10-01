const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

// Connect mongoDB
mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log("There is an error on mongoDB");
  } else {
    console.log("mongoDB is successfully connected");
  }
});

app.listen(PORT, () => {
  console.log("Server is running 👯‍♀️");
});
