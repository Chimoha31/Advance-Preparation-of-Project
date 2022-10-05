const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());


// Connect mongoDB
const mongoURL = process.env.MONGO_URL
mongoose.connect(mongoURL, (err) => {
  if (err) {
    console.log("There is an error on mongoDB");
  } else {
    console.log("mongoDB is successfully connected");
  }
});

// Router
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running 👯‍♀️");
});
