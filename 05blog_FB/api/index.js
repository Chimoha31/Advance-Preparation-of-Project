const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// cors
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Connect mongoDB
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, (err) => {
  if (err) {
    console.log("There is an error on mongoDB");
  } else {
    console.log("mongoDB is successfully connected");
  }
});

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


// Router
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log("Server is running 👯‍♀️");
});
