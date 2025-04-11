const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");
const dotenv=require("dotenv")

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3010;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.static("static"));


app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

console.log();


const connectDb = async () => {
  await mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database:", err);
    });
};

connectDb();

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
