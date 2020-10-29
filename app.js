const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
//middleware
app.use(cors());
app.use(bodyParser.json());

//import Routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("we are on the app");
});

// connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

// listening

app.listen(3000);
