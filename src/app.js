const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send("user data successfully inserted into the DB");
  } catch (err) {
    res.status(400).send("Error occured", err.message);
  }
});

app.get("/singleuser", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(users);
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length !== 0) {
      res.status(200).send(users);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
  }
});

app.get("/userbyid", async (req, res) => {
  const userId = req.body._id;
  try {
    const user = await User.findById({ _id: userId });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.status(400).send("Something went wrong!");
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
