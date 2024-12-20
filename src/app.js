const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const dummyUser = {
    firstName: "Rohit",
    lastName: "Sharma",
    emailId: "rohit@123.com",
    password: "Rohit1234",
    age: 36,
    gender: "male",
  };
  const user = new User(dummyUser);
  try {
    await user.save();
    res.send("user data successfully inserted into the DB");
  } catch (err) {
    res.status(400).send("Error occured", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established!");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.err("Database cannot be connected!");
  });
