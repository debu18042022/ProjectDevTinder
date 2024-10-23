const express = require("express");

const app = express();

// app.use("/route",[RH1, RH2,RH3,...])

app.use(
  "/user",

  (req, res, next) => {
    console.log("Handling the Route user1");
    next();
    // res.send("Response!!");
  },
  [
    (req, res, next) => {
      console.log("Handling the Route user2");
      // res.send("2 Response!!");
      next();
    },
    (req, res, next) => {
      console.log("Handling the Route user3");
      // res.send("3 Response!!");
      next();
    },
  ],
  (req, res, next) => {
    console.log("Handling the Route user4");
    res.send("4 Response!!");
  }
);

app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777...");
});
