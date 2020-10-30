const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const server = express();

//middleware
server.use(cors());
server.use(bodyParser.json());

//import Routes
const postRoute = require("./routes/posts");


server.use("/posts", postRoute);

//Routes
server.get("/", (req, res) => {
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

const PORT= process.env.PORT || 3301;

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});



